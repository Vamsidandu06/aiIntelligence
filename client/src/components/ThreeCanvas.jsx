import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeCanvas({ className = "h-80 w-full" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Dimensions
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 38;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group to hold all 3D graph objects
    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    // Nodes (Competencies in 3D Space)
    const nodeData = [
      { name: "ML Pipelines", pos: [-12, 6, 2], color: 0x3B82F6, size: 1.4 },
      { name: "SQL & DB", pos: [10, 8, -4], color: 0x06B6D4, size: 1.3 },
      { name: "Full-Stack", pos: [8, -7, 4], color: 0x10B981, size: 1.2 },
      { name: "System Design", pos: [-9, -8, -2], color: 0x8B5CF6, size: 1.5 },
      { name: "Integrity", pos: [0, 11, 6], color: 0xF59E0B, size: 1.1 },
      { name: "Problem Solving", pos: [0, -11, -5], color: 0xEC4899, size: 1.3 },
      { name: "Adaptive Core", pos: [0, 0, 0], color: 0x38BDF8, size: 2.0 }
    ];

    const sphereGeom = new THREE.SphereGeometry(1, 24, 24);
    const nodes = [];

    nodeData.forEach(item => {
      const mat = new THREE.MeshBasicMaterial({
        color: item.color,
        wireframe: false
      });
      const mesh = new THREE.Mesh(sphereGeom, mat);
      mesh.position.set(item.pos[0], item.pos[1], item.pos[2]);
      mesh.scale.setScalar(item.size);
      graphGroup.add(mesh);

      // Add a wireframe glow ring around the node
      const ringGeom = new THREE.RingGeometry(item.size * 1.2, item.size * 1.35, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: item.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.position.copy(mesh.position);
      graphGroup.add(ring);

      nodes.push({ mesh, ring, speed: Math.random() * 0.02 + 0.01 });
    });

    // Connecting Lines (Adaptive Decision Edges)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x60A5FA,
      transparent: true,
      opacity: 0.35
    });

    const linesGroup = new THREE.Group();
    graphGroup.add(linesGroup);

    for (let i = 0; i < nodeData.length; i++) {
      for (let j = i + 1; j < nodeData.length; j++) {
        const p1 = new THREE.Vector3(...nodeData[i].pos);
        const p2 = new THREE.Vector3(...nodeData[j].pos);
        if (p1.distanceTo(p2) < 22) {
          const points = [p1, p2];
          const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(lineGeom, lineMat);
          linesGroup.add(line);
        }
      }
    }

    // Floating Ambient Data Particles
    const particleCount = 200;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 80;
      positions[i + 1] = (Math.random() - 0.5) * 60;
      positions[i + 2] = (Math.random() - 0.5) * 40;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x93C5FD,
      size: 0.4,
      transparent: true,
      opacity: 0.5
    });
    const particleSystem = new THREE.Points(particleGeom, particleMat);
    scene.add(particleSystem);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = (y / rect.height) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Window Resize
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      graphGroup.rotation.y = elapsedTime * 0.15 + mouseX;
      graphGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 + mouseY;

      particleSystem.rotation.y = elapsedTime * 0.04;

      // Animate rings
      nodes.forEach((item, idx) => {
        item.ring.rotation.z += item.speed;
        item.ring.rotation.x += item.speed * 0.5;
        // subtle pulse
        const s = 1 + Math.sin(elapsedTime * 2 + idx) * 0.08;
        item.mesh.scale.setScalar(nodeData[idx].size * s);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeom.dispose();
      particleGeom.dispose();
      lineMat.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2 right-3 pointer-events-none text-[10px] font-mono text-cyan-400/80 bg-slate-900/60 px-2 py-0.5 rounded backdrop-blur-xs border border-cyan-500/20">
        3D Adaptive Graph Engine • Three.js WebGL
      </div>
    </div>
  );
}
