'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function PortfolioHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );
  
    const heroSection = document.getElementById("portfolio-hero");
    if (heroSection) observer.observe(heroSection);
  
    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  return (
    <div 
      id="portfolio-hero"
      className="home-section min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 dark:from-black dark:via-gray-900 dark:to-teal-900 transition-colors duration-300"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Particles Container */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        {isHeroVisible && (   
          <Particles
            id="tsparticles-portfolio"
            init={particlesInit}
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: { enable: true, mode: "push" },
                  onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                  push: { quantity: 1 },
                  repulse: { distance: 50, duration: 0.4 },
                },
              },
              particles: {
                color: { value: "#FFFFFF" },
                links: {
                  color: "#60A5FA",
                  distance: 120,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: { enable: true },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "bounce" },
                  random: false,
                  speed: 1.5,
                  straight: false,
                },
                number: {
                  density: { enable: true, area: 800 },
                  value: 80,
                },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 5 } },
              },
              detectRetina: true,
            }}
            className="absolute inset-0 h-full w-full"
          />
        )}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Blur Effects for Depth */}
      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl bg-blue-500/10"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl bg-indigo-500/10"></div>

      <div className="home-content relative z-10 flex items-center justify-center min-h-screen">
        {/* Hero Section */}
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className={`hero-section transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
                hi ! i'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Numan.</span>
              </h2>
              {/* <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                A passionate Full-Stack Developer and UI/UX Designer with expertise in modern web technologies. Specializing in creating innovative digital solutions that drive business growth and user engagement.
              </p> */}
              
              {/* Punch Line */}
              <p className="text-lg md:text-xl text-teal-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                "Transforming ideas into exceptional digital experiences that captivate users and deliver measurable business results."
              </p>
              
              <div className="buttons">
                <a 
                  href="#about" 
                  className="btn main-btn inline-block bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>more about me</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info - Smaller Size */}
        <div className="home-contact absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:block text-right">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <p className="text-white text-base font-medium mb-2">
              Let's work together
            </p>
            <a 
              className="block text-teal-400 hover:text-teal-300 text-base font-semibold mb-1 transition-colors duration-300" 
                             href="mailto:hr@softeriosolutions.com"
            >
                             hr@softeriosolutions.com
            </a>
            <span className="text-gray-300 text-sm font-medium">
              +92 3036057586
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
