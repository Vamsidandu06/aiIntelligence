import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Volume2, VolumeX, Sparkles, Brain, Cpu, MessageSquare } from 'lucide-react';

export function AIInterviewerAvatar({ 
  currentQuestionText = '', 
  isSpeaking: externalIsSpeaking,
  isThinking = false,
  isEvaluating = false,
  statusLabel,
  agentName = "Dr. Nova (AI Lead Interviewer)",
  onToggleSpeak,
  compact = false
}) {
  const mountRef = useRef(null);
  const [internalSpeaking, setInternalSpeaking] = useState(false);
  const isSpeaking = externalIsSpeaking !== undefined ? externalIsSpeaking : internalSpeaking;
  const isBusy = isThinking || isEvaluating;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 320;
    const height = mount.clientHeight || 240;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // AI Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Center Core Sphere (Icosahedron)
    const coreGeom = new THREE.IcosahedronGeometry(4.2, 3);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    coreGroup.add(coreMesh);

    // Inner Solid Glowing Sphere
    const innerGeom = new THREE.SphereGeometry(2.4, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x1E40AF
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerMesh);

    // Outer Orbiting Rings (Reasoning Layers)
    const ringGeom = new THREE.TorusGeometry(6.2, 0.08, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06B6D4,
      transparent: true,
      opacity: 0.6
    });

    const ring1 = new THREE.Mesh(ringGeom, ringMat);
    const ring2 = new THREE.Mesh(ringGeom, ringMat);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;

    coreGroup.add(ring1);
    coreGroup.add(ring2);

    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Dynamic color shifts
      if (isSpeaking) {
        coreMat.color.setHex(0x22D3EE); // vibrant cyan
        innerMat.color.setHex(0x0284C7);
      } else if (isBusy) {
        coreMat.color.setHex(0xF59E0B); // amber reasoning
        innerMat.color.setHex(0xD97706);
      } else {
        coreMat.color.setHex(0x38BDF8); // default calm blue
        innerMat.color.setHex(0x1E40AF);
      }

      // Dynamic rotation
      const rotSpeed = isSpeaking ? 0.9 : isBusy ? 0.6 : 0.3;
      coreMesh.rotation.y = elapsed * rotSpeed;
      coreMesh.rotation.x = elapsed * (rotSpeed * 0.5);

      ring1.rotation.z = elapsed * (rotSpeed * 1.2);
      ring2.rotation.y = elapsed * (rotSpeed * 0.9);

      // Pulse scaling when speaking or evaluating
      const pulseSpeed = isSpeaking ? 7 : isBusy ? 4 : 1.8;
      const pulseAmp = isSpeaking ? 0.14 : isBusy ? 0.08 : 0.03;
      const scale = 1 + Math.sin(elapsed * pulseSpeed) * pulseAmp;
      coreGroup.scale.setScalar(scale);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeom.dispose();
      innerGeom.dispose();
      ringGeom.dispose();
      coreMat.dispose();
      innerMat.dispose();
      ringMat.dispose();
    };
  }, [isSpeaking, isBusy]);

  // Speech Synthesis Trigger
  const handleInternalSpeakToggle = () => {
    if (onToggleSpeak) {
      onToggleSpeak();
      return;
    }

    if (!('speechSynthesis' in window) || !currentQuestionText) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setInternalSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentQuestionText);
      utterance.rate = 1.0;
      utterance.pitch = 1.05;
      utterance.onstart = () => setInternalSpeaking(true);
      utterance.onend = () => setInternalSpeaking(false);
      utterance.onerror = () => setInternalSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const currentLabel = statusLabel || (
    isSpeaking 
      ? '● Speaking Voice Response' 
      : isBusy 
      ? '● Calibrating Rubrics & Next Question' 
      : '● Adaptive Voice Listener Active'
  );

  return (
    <div className={`w-full flex flex-col items-center justify-center relative ${compact ? '' : 'p-2'}`}>
      {/* 3D Hologram Avatar Canvas */}
      <div 
        ref={mountRef} 
        className="w-full h-48 sm:h-56 cursor-pointer relative" 
        onClick={handleInternalSpeakToggle}
        title={isSpeaking ? "Click to Pause Speech" : "Click to Read Aloud"}
      />

      {/* Voice Status Indicator Pill */}
      <div className="mt-2 flex items-center justify-between w-full px-2 z-10">
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
          <Brain className={`w-3.5 h-3.5 ${isBusy ? 'text-amber-400 animate-spin' : isSpeaking ? 'text-cyan-400' : 'text-slate-500'}`} />
          <span>{agentName}</span>
        </div>

        <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border transition-all ${
          isSpeaking 
            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40 animate-pulse'
            : isBusy
            ? 'bg-amber-500/20 text-amber-300 border-amber-400/40 animate-pulse'
            : 'bg-blue-500/10 text-slate-400 border-slate-700'
        }`}>
          {currentLabel}
        </span>
      </div>
    </div>
  );
}
