import { test } from 'node:test';
import assert from 'node:assert';
import http from 'node:http';
import app from '../index.js';

let server;
let baseUrl;

function request(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, baseUrl);
    const options = {
      method,
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ status: res.statusCode, body: json });
        } catch (e) {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });

    req.on('error', reject);
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

test('Setup Server for New Features Test', async () => {
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const port = server.address().port;
      baseUrl = `http://localhost:${port}`;
      resolve();
    });
  });
});

test('Auth - Admin Login, Client Login, and Permissions', async () => {
  // Super Admin Login
  const adminRes = await request('POST', '/api/auth/login', {
    email: 'vamsi@gmail.com',
    password: 'password@1'
  });
  assert.strictEqual(adminRes.status, 200);
  assert.strictEqual(adminRes.body.user.role, 'admin');

  // Client Login
  const clientRes = await request('POST', '/api/auth/login', {
    email: 'alex@cloudscale.io',
    password: 'client123'
  });
  assert.strictEqual(clientRes.status, 200);
  assert.strictEqual(clientRes.body.user.role, 'client');

  // Admin Get Users
  const usersRes = await request('GET', '/api/admin/users');
  assert.strictEqual(usersRes.status, 200);
  assert.ok(usersRes.body.users.length >= 2);

  // Admin Toggle Role (dynamically checks inversion)
  const targetUser = usersRes.body.users.find(u => u.email !== 'vamsi@gmail.com');
  const oldRole = targetUser.role;
  const expectedNewRole = oldRole === 'admin' ? 'client' : 'admin';
  const toggleRes = await request('POST', '/api/admin/toggle-role', {
    userId: targetUser.id
  });
  assert.strictEqual(toggleRes.status, 200);
  assert.strictEqual(toggleRes.body.user.role, expectedNewRole);

  // Admin Metrics
  const metricsRes = await request('GET', '/api/admin/metrics');
  assert.strictEqual(metricsRes.status, 200);
  assert.ok(metricsRes.body.metrics.totalUsers >= 2);
});

test('Auth - Email OTP Dispatch, Verification & 1-Email-1-Account Policy', async () => {
  const testEmail = `candidate_${Date.now()}@google.edu`;

  // 1. Send OTP for signup
  const sendRes = await request('POST', '/api/auth/send-otp', {
    email: testEmail,
    isSignup: true
  });
  assert.strictEqual(sendRes.status, 200);
  assert.strictEqual(sendRes.body.success, true);
  assert.ok(sendRes.body.otpCode);

  const otp = sendRes.body.otpCode;

  // 2. Verify OTP
  const verifyRes = await request('POST', '/api/auth/verify-otp', {
    email: testEmail,
    otp
  });
  assert.strictEqual(verifyRes.status, 200);
  assert.strictEqual(verifyRes.body.success, true);

  // 3. Register user with OTP
  const regRes = await request('POST', '/api/auth/register', {
    name: 'Hackathon Tester',
    email: testEmail,
    password: 'password123',
    otp
  });
  assert.strictEqual(regRes.status, 201);
  assert.strictEqual(regRes.body.user.email, testEmail);
  assert.strictEqual(regRes.body.user.role, 'client');

  // 4. Enforce 1-Email-1-Account: Attempt to register with duplicate email
  const dupRes = await request('POST', '/api/auth/register', {
    name: 'Duplicate Attempt',
    email: testEmail,
    password: 'password123'
  });
  assert.strictEqual(dupRes.status, 400);
  assert.match(dupRes.body.error, /already exists/i);
});

test('Practice - MCQs, Evaluation & Recommended Notes/Links', async () => {
  const mcqsRes = await request('GET', '/api/practice/mcqs');
  assert.strictEqual(mcqsRes.status, 200);
  assert.ok(mcqsRes.body.mcqs.length > 0);

  const evalRes = await request('POST', '/api/practice/mcqs/evaluate', {
    id: 'mcq_ml_01',
    selectedOptionIndex: 1
  });
  assert.strictEqual(evalRes.status, 200);
  assert.strictEqual(evalRes.body.evaluation.isCorrect, true);
  assert.ok(evalRes.body.evaluation.recommendations.notes.length > 0);
  assert.ok(evalRes.body.evaluation.recommendations.documentationLinks.length > 0);
  assert.ok(evalRes.body.evaluation.recommendations.recommendedClasses.length > 0);
});

test('Practice - LeetCode Coding Challenge Execution (100 Problems Catalog & Multi-Language)', async () => {
  const problemsRes = await request('GET', '/api/practice/coding/problems');
  assert.strictEqual(problemsRes.status, 200);
  assert.ok(problemsRes.body.problems.length >= 100);

  const twoSumProblem = problemsRes.body.problems.find(p => p.number === 1 || p.id === 'lc_1_two_sum');
  assert.ok(twoSumProblem);

  // Verify languages supported in starterCode
  assert.ok(twoSumProblem.starterCode.python);
  assert.ok(twoSumProblem.starterCode.c);
  assert.ok(twoSumProblem.starterCode.cpp);
  assert.ok(twoSumProblem.starterCode.java);
  assert.ok(twoSumProblem.starterCode.javascript);

  // Run in Python
  const runPyRes = await request('POST', '/api/practice/coding/run', {
    problemId: twoSumProblem.id,
    code: 'def solution(d):\n    return [0, 1]\nprint(solution(None))',
    language: 'python'
  });
  assert.strictEqual(runPyRes.status, 200);
  assert.strictEqual(runPyRes.body.result.status, 'Accepted');
  assert.strictEqual(runPyRes.body.result.allPassed, true);

  // Run in JavaScript
  const runJsRes = await request('POST', '/api/practice/coding/run', {
    problemId: twoSumProblem.id,
    code: twoSumProblem.starterCode.javascript,
    language: 'javascript'
  });
  assert.strictEqual(runJsRes.status, 200);
  assert.strictEqual(runJsRes.body.result.status, 'Accepted');
  assert.strictEqual(runJsRes.body.result.allPassed, true);
});

test('Practice - SQL Query Execution', async () => {
  const sqlRes = await request('POST', '/api/practice/frontend-sql/run-sql', {
    query: 'SELECT d.name, e.name, e.salary FROM employees e JOIN departments d ON e.department_id = d.id GROUP BY d.id;'
  });
  assert.strictEqual(sqlRes.status, 200);
  assert.strictEqual(sqlRes.body.result.success, true);
  assert.ok(sqlRes.body.result.rows.length > 0);
});

test('Resume Builder & Interview Tips', async () => {
  const bulletRes = await request('POST', '/api/resume-builder/optimize-bullet', {
    bullet: 'Worked on PyTorch model deployment for search ranking',
    role: 'Lead ML Engineer'
  });
  assert.strictEqual(bulletRes.status, 200);
  assert.ok(bulletRes.body.optimized.length > 10);

  const tipsRes = await request('GET', '/api/resume-builder/interview-tips');
  assert.strictEqual(tipsRes.status, 200);
  assert.ok(tipsRes.body.tips.length >= 4);
});

test('Teardown Server for New Features Test', async () => {
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
});
