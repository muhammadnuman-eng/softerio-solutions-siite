'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Globe, 
  Users,
  ArrowRight,
  Play,
  CheckCircle,
  Code,
  BarChart3,
  Settings,
  Rocket
} from 'lucide-react';


export default function AIPage() {
  const [mounted, setMounted] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    setMounted(true);
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
  
    const heroSection = document.getElementById("ai-hero");
    if (heroSection) observer.observe(heroSection);
  
    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  const aiServices = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms tailored to your business needs",
      features: ["Predictive Analytics", "Pattern Recognition", "Data Classification"]
    },
    {
      icon: Cpu,
      title: "AI-Powered Automation",
      description: "Streamline operations with intelligent automation systems",
      features: ["Process Automation", "Workflow Optimization", "Smart Decision Making"]
    },
    {
      icon: Zap,
      title: "Natural Language Processing",
      description: "Advanced text analysis and language understanding capabilities",
      features: ["Sentiment Analysis", "Text Classification", "Language Translation"]
    },
    {
      icon: Target,
      title: "Computer Vision",
      description: "Image and video analysis for enhanced business insights",
      features: ["Object Detection", "Facial Recognition", "Quality Control"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions",
      features: ["Market Analysis", "Risk Assessment", "Performance Prediction"]
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Protect your systems with intelligent threat detection",
      features: ["Anomaly Detection", "Fraud Prevention", "Security Monitoring"]
    }
  ];

  const aiTechnologies = [
    { name: "TensorFlow", icon: Code, color: "from-orange-500 to-red-600" },
    { name: "PyTorch", icon: Brain, color: "from-red-500 to-orange-600" },
    { name: "OpenAI GPT", icon: Globe, color: "from-blue-500 to-purple-600" },
    { name: "Computer Vision", icon: Target, color: "from-green-500 to-blue-600" },
    { name: "NLP", icon: Zap, color: "from-purple-500 to-pink-600" },
    { name: "Deep Learning", icon: Cpu, color: "from-indigo-500 to-purple-600" }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and boost productivity by up to 300%"
    },
    {
      icon: BarChart3,
      title: "Better Insights",
      description: "Gain deeper understanding of your data and customer behavior"
    },
    {
      icon: Users,
      title: "Enhanced Customer Experience",
      description: "Personalize interactions and provide 24/7 intelligent support"
    },
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation"
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate", icon: Target },
    { number: "300%", label: "Efficiency Boost", icon: TrendingUp },
    { number: "24/7", label: "Availability", icon: Settings },
    { number: "50%", label: "Cost Reduction", icon: TrendingUp }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section 
        id="ai-hero"
        className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 dark:from-black dark:via-gray-900 dark:to-teal-900 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900"></div>
        </div>

        {/* Particles Container */}
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          {isHeroVisible && (   
            <Particles
              id="tsparticles"
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

        <div className="container mx-auto px-6 pt-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-6 md:pr-8 lg:pr-14 max-w-2xl pt-20 ml-16">
              <h1 className="text-[30px] sm:text-[38px] md:text-[40px] lg:text-[45px] font-semibold leading-tight animate-fade-in-up [animation-delay:100ms]">
                <span className="text-white">Artificial </span>
                <span className="text-teal-400">Intelligence</span>
                  </h1>
              <p className="text-lg text-white animate-fade-in-up [animation-delay:300ms]">
                  Transform your business with cutting-edge AI solutions. From machine learning to automation, we deliver intelligent systems that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:500ms]">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 flex items-center gap-2">
                    Explore AI Solutions
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </button>
              </div>
              </div>

            {/* Right Content - AI Visualization */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
              <div className="relative w-96 h-96 mx-auto">
                {/* Central AI Core */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-teal-500/50">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                </motion.div>

                {/* Orbiting Elements */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.div
                    key={index}
                    animate={{ 
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 15 + index * 2, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute inset-0"
                    style={{
                      transformOrigin: 'center'
                    }}
                  >
                    <div 
                      className="absolute w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px)`
                      }}
                    />
                  </motion.div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <motion.circle
                    cx="192"
                    cy="192"
                    r="120"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    animate={{ 
                      strokeDashoffset: [0, 20]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of artificial intelligence services designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We leverage the latest advancements in artificial intelligence to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${tech.color} rounded-2xl p-8 text-center text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-white/80 text-sm">
                    Advanced implementation and optimization
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose AI Solutions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of artificial intelligence in your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 dark:from-black dark:to-teal-900">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI Success Metrics
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real results from our AI implementations across various industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-teal-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how artificial intelligence can revolutionize your operations and drive unprecedented growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/services'}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 flex items-center gap-2"
              >
                Start AI Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.location.href = '/quotes'}
                className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </main>
  );
}
