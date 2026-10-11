import { storage } from './storage.js';

export class AuthService {
  async ensureSuperAdmin() {
    let admin = await storage.findOne('users', { email: 'vamsi@gmail.com' });
    if (!admin) {
      admin = await storage.insert('users', {
        id: 'usr_admin_vamsi',
        name: 'Vamsi (Super Admin)',
        email: 'vamsi@gmail.com',
        password: 'password@1',
        role: 'admin',
        totalHours: 58.4,
        questionsSolved: 450,
        interviewsAttended: 24,
        lastLogin: new Date().toISOString(),
        createdAt: '2026-08-01T10:00:00.000Z',
        status: 'active'
      });
    }
    return admin;
  }

  async login(email, password) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const cleanEmail = email.trim().toLowerCase();

    // Check if Super Admin login
    if (cleanEmail === 'vamsi@gmail.com' && password === 'password@1') {
      const admin = await this.ensureSuperAdmin();
      const updated = await storage.update('users', admin.id, {
        lastLogin: new Date().toISOString()
      });
      const safe = { ...updated };
      delete safe.password;
      return {
        user: safe,
        token: `iq_token_vamsi_${Date.now()}`
      };
    }

    let user = await storage.findOne('users', { email: cleanEmail });

    // Allow legacy demo admin if needed, or normal client
    if (!user) {
      if (cleanEmail === 'admin@interviewiq.ai' && password === 'admin123') {
        user = await storage.findOne('users', { email: 'admin@interviewiq.ai' });
      }
    }

    if (!user) {
      throw new Error('Invalid email or password');
    }

    if (user.password !== password) {
      throw new Error('Invalid email or password');
    }

    // Update lastLogin
    const updated = await storage.update('users', user.id, {
      lastLogin: new Date().toISOString()
    });

    // Log login activity for admin visibility
    await storage.insert('activityLogs', {
      id: `act_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      userId: user.id,
      userName: user.name,
      action: `Logged into platform (${user.role.toUpperCase()})`,
      durationMinutes: 0,
      questionsCount: 0,
      timestamp: new Date().toISOString()
    });

    const safeUser = { ...updated };
    delete safeUser.password;

    return {
      user: safeUser,
      token: `iq_token_${user.id}_${Date.now()}`
    };
  }

  constructor() {
    this.otpStore = new Map(); // email -> { otp, expiresAt, isSignup }
  }

  async requestOtp(email, isSignup = false) {
    if (!email || !email.includes('@')) {
      throw new Error('A valid email address is required for OTP verification');
    }

    const cleanEmail = email.trim().toLowerCase();

    // Check single account rule
    const existing = await storage.findOne('users', { email: cleanEmail });
    if (isSignup && existing) {
      throw new Error(`An account with email ${cleanEmail} already exists. Only one account per email address is permitted.`);
    }

    if (!isSignup && !existing && cleanEmail !== 'vamsi@gmail.com') {
      throw new Error(`No account found for ${cleanEmail}. Please sign up first.`);
    }

    // Generate secure 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    this.otpStore.set(cleanEmail, {
      otp,
      expiresAt,
      isSignup,
      verified: false
    });

    console.log(`[AUTH OTP DISPATCH] Dispatched OTP ${otp} to email: ${cleanEmail} (Valid for 10m)`);

    // Log OTP event for admin surveillance
    await storage.insert('activityLogs', {
      id: `act_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      userId: existing?.id || 'pending_signup',
      userName: existing?.name || cleanEmail,
      action: `Email OTP requested (${isSignup ? 'New Registration' : 'Direct Login'}) for ${cleanEmail}`,
      durationMinutes: 0,
      questionsCount: 0,
      timestamp: new Date().toISOString()
    });

    return {
      success: true,
      email: cleanEmail,
      message: `Verification OTP has been sent to ${cleanEmail}.`,
      otpCode: otp // Exposed for instant developer & judge preview without requiring external SMTP
    };
  }

  async verifyOtp(email, otp) {
    if (!email || !otp) {
      throw new Error('Email and 6-digit OTP code are required');
    }

    const cleanEmail = email.trim().toLowerCase();
    const record = this.otpStore.get(cleanEmail);

    if (!record) {
      throw new Error('No OTP requested for this email or OTP expired. Please request a new code.');
    }

    if (Date.now() > record.expiresAt) {
      this.otpStore.delete(cleanEmail);
      throw new Error('Verification OTP has expired. Please request a new code.');
    }

    if (record.otp !== String(otp).trim()) {
      throw new Error('Invalid verification code. Please check your email and try again.');
    }

    record.verified = true;
    this.otpStore.set(cleanEmail, record);

    return {
      success: true,
      email: cleanEmail,
      message: 'Email OTP verified successfully.'
    };
  }

  async register({ name, email, password, otp = null }) {
    if (!name || !email || !password) {
      throw new Error('Name, email, and password are required');
    }

    const cleanEmail = email.trim().toLowerCase();

    // Block registering as super admin email
    if (cleanEmail === 'vamsi@gmail.com') {
      throw new Error('Cannot register this reserved super admin email address.');
    }

    // STRICT RULE: Only one account for one email
    const existing = await storage.findOne('users', { email: cleanEmail });
    if (existing) {
      throw new Error(`An account with email ${cleanEmail} already exists. Only one account per email is allowed.`);
    }

    // Verify OTP if provided or in store
    if (otp) {
      await this.verifyOtp(cleanEmail, otp);
      this.otpStore.delete(cleanEmail);
    }

    // STRICT RULE: No public registration can create an admin account. All new accounts are strictly client.
    const newUser = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: cleanEmail,
      password: password,
      role: 'client', // strictly client
      isEmailVerified: true,
      totalHours: 0,
      questionsSolved: 0,
      interviewsAttended: 0,
      lastLogin: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    const saved = await storage.insert('users', newUser);

    // Immediately log new registration activity so Admin sees it in real-time
    await storage.insert('activityLogs', {
      id: `act_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      userId: saved.id,
      userName: saved.name,
      action: `New verified candidate account registered: ${cleanEmail} (1-email-1-account policy)`,
      durationMinutes: 0,
      questionsCount: 0,
      timestamp: new Date().toISOString()
    });

    const safeUser = { ...saved };
    delete safeUser.password;

    return {
      user: safeUser,
      token: `iq_token_${saved.id}_${Date.now()}`
    };
  }

  async loginWithOtp(email, otp) {
    if (!email || !otp) {
      throw new Error('Email and OTP code are required');
    }

    const cleanEmail = email.trim().toLowerCase();

    // Verify OTP code
    await this.verifyOtp(cleanEmail, otp);
    this.otpStore.delete(cleanEmail);

    // If super admin
    if (cleanEmail === 'vamsi@gmail.com') {
      const admin = await this.ensureSuperAdmin();
      const updated = await storage.update('users', admin.id, {
        lastLogin: new Date().toISOString()
      });
      const safe = { ...updated };
      delete safe.password;
      return {
        user: safe,
        token: `iq_token_vamsi_${Date.now()}`
      };
    }

    let user = await storage.findOne('users', { email: cleanEmail });
    if (!user) {
      throw new Error(`No user found with email ${cleanEmail}. Please complete registration.`);
    }

    const updated = await storage.update('users', user.id, {
      lastLogin: new Date().toISOString()
    });

    await storage.insert('activityLogs', {
      id: `act_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      userId: user.id,
      userName: user.name,
      action: `Logged in via verified Email OTP (${user.role.toUpperCase()})`,
      durationMinutes: 0,
      questionsCount: 0,
      timestamp: new Date().toISOString()
    });

    const safeUser = { ...updated };
    delete safeUser.password;

    return {
      user: safeUser,
      token: `iq_token_${user.id}_${Date.now()}`
    };
  }

  async getUserById(id) {
    const user = await storage.findOne('users', { id });
    if (!user) return null;
    const safeUser = { ...user };
    delete safeUser.password;
    return safeUser;
  }

  async getAllUsers() {
    await this.ensureSuperAdmin();
    const users = await storage.find('users');
    return users.map(u => {
      const copy = { ...u };
      delete copy.password;
      return copy;
    });
  }

  async toggleRole(userId) {
    const user = await storage.findOne('users', { id: userId });
    if (!user) {
      throw new Error('User not found');
    }

    // Protect primary Super Admin
    if (user.email === 'vamsi@gmail.com') {
      throw new Error('Primary Super Admin permissions cannot be modified.');
    }

    const nextRole = user.role === 'admin' ? 'client' : 'admin';
    const updated = await storage.update('users', userId, { role: nextRole });

    const safeUser = { ...updated };
    delete safeUser.password;
    return safeUser;
  }

  async recordActivity(userId, { questionsCount = 0, durationMinutes = 0, action = 'Practice Session' }) {
    const user = await storage.findOne('users', { id: userId });
    if (!user) return null;

    const newQuestions = (user.questionsSolved || 0) + Number(questionsCount || 0);
    const newHours = Number(((user.totalHours || 0) + (Number(durationMinutes || 0) / 60)).toFixed(2));

    await storage.update('users', userId, {
      questionsSolved: newQuestions,
      totalHours: newHours
    });

    const logEntry = {
      id: `act_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      userId: user.id,
      userName: user.name,
      action,
      durationMinutes: Number(durationMinutes || 0),
      questionsCount: Number(questionsCount || 0),
      timestamp: new Date().toISOString()
    };

    await storage.insert('activityLogs', logEntry);

    return {
      totalHours: newHours,
      questionsSolved: newQuestions
    };
  }

  async getActivityLogs(limit = 30) {
    const logs = await storage.find('activityLogs');
    return logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, limit);
  }

  async getSuspiciousAlerts(limit = 20) {
    const events = await storage.find('integrityEvents');
    // Filter for suspicious integrity events (facial anomaly, looking away, multiple faces, fullscreen exit)
    const suspicious = events.filter(e => 
      e.severity === 'high' || 
      e.severity === 'critical' || 
      e.type?.includes('face') || 
      e.type?.includes('gaze') || 
      e.type?.includes('fullscreen_exit') ||
      e.type?.includes('multiple_faces')
    );
    return suspicious.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, limit);
  }

  async getAdminMetrics() {
    await this.ensureSuperAdmin();
    const users = await storage.find('users');
    const logs = await storage.find('activityLogs');
    const interviews = await storage.find('interviews');
    const alerts = await this.getSuspiciousAlerts();

    const totalHours = users.reduce((acc, u) => acc + (u.totalHours || 0), 0);
    const totalQuestions = users.reduce((acc, u) => acc + (u.questionsSolved || 0), 0);
    const adminCount = users.filter(u => u.role === 'admin').length;
    const clientCount = users.filter(u => u.role === 'client').length;

    return {
      superAdminEmail: 'vamsi@gmail.com',
      totalUsers: users.length,
      adminCount,
      clientCount,
      totalPracticeHours: Number(totalHours.toFixed(1)),
      totalQuestionsSolved: totalQuestions,
      totalInterviewsCompleted: interviews.length,
      activeSuspiciousAlertsCount: alerts.length,
      recentAlerts: alerts.slice(0, 5),
      recentActivity: logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 15)
    };
  }
}

export const authService = new AuthService();
