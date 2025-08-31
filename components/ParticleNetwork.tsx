'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulse: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  pulse: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 80; // Header height
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = 20;

      const colors = [
        'rgba(20, 184, 166, ', // teal
        'rgba(59, 130, 246, ', // blue
        'rgba(255, 255, 255, ', // white
        'rgba(34, 197, 94, ', // green
      ];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1.5,
          opacity: Math.random() * 0.6 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2,
        });
      }
      particlesRef.current = particles;
    };

    // Initialize connections
    const initConnections = () => {
      const connections: Connection[] = [];
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (Math.random() < 0.4) { // 40% chance of connection
            connections.push({
              from: i,
              to: j,
              opacity: Math.random() * 0.4 + 0.1,
              pulse: Math.random() * Math.PI * 2,
            });
          }
        }
      }
      connectionsRef.current = connections;
    };

    // Update particles
    const updateParticles = () => {
      const particles = particlesRef.current;
      timeRef.current += 0.02;
      
      particles.forEach((particle, index) => {
        // Add some wavey movement
        particle.x += particle.vx + Math.sin(timeRef.current + index) * 0.3;
        particle.y += particle.vy + Math.cos(timeRef.current + index) * 0.3;
        
        // Update pulse
        particle.pulse += 0.05;

        // Bounce off edges with some randomness
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx *= -1.1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy *= -1.1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Keep particles within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Add some gravity effect
        particle.vy += 0.001;
      });
    };

    // Draw everything
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const connections = connectionsRef.current;

      // Draw connections with pulsing effect
      connections.forEach(connection => {
        const from = particles[connection.from];
        const to = particles[connection.to];
        const distance = Math.sqrt(
          Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2)
        );

        if (distance < 120) { // Increased connection range
          const pulseOpacity = connection.opacity * (1 + Math.sin(connection.pulse) * 0.3);
          const distanceOpacity = pulseOpacity * (1 - distance / 120);
          
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.strokeStyle = `rgba(20, 184, 166, ${distanceOpacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Add connection glow
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.strokeStyle = `rgba(20, 184, 166, ${distanceOpacity * 0.3})`;
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      });

      // Draw particles with enhanced effects
      particles.forEach(particle => {
        const pulseSize = particle.size * (1 + Math.sin(particle.pulse) * 0.2);
        const pulseOpacity = particle.opacity * (1 + Math.sin(particle.pulse) * 0.3);

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize + 4, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${pulseOpacity * 0.2})`);
        ctx.fill();

        // Draw main particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${pulseOpacity})`);
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${pulseOpacity + 0.2})`);
        ctx.fill();
      });
    };

    // Animation loop
    const animate = () => {
      updateParticles();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    initConnections();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      style={{ zIndex: -1 }}
    />
  );
}
