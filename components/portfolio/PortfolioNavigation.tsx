'use client';

import { useState, useEffect } from 'react';

export default function PortfolioNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact', 'blog'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation */}
      <div id="navigation" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isMenuOpen ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="text-2xl font-bold text-teal-500">
              Daniel
            </div>

            {/* Navigation Trigger */}
            <button
              className="navigation-trigger relative z-50 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-gray-900 dark:bg-white my-1.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}></div>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav id="main-navigation" className={`absolute top-full left-0 w-full transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}>
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-6 py-8">
              <ul className="space-y-6">
                <li>
                  <a
                    href="#home"
                    onClick={() => scrollToSection('home')}
                    className={`link-page link-home flex items-center space-x-3 text-lg font-medium transition-all duration-300 ${
                      activeSection === 'home'
                        ? 'text-teal-500'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400'
                    }`}
                  >
                    <span className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </span>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => scrollToSection('about')}
                    className={`link-page link-about flex items-center space-x-3 text-lg font-medium transition-all duration-300 ${
                      activeSection === 'about'
                        ? 'text-teal-500'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400'
                    }`}
                  >
                    <span className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    onClick={() => scrollToSection('work')}
                    className={`link-page link-work flex items-center space-x-3 text-lg font-medium transition-all duration-300 ${
                      activeSection === 'work'
                        ? 'text-teal-500'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400'
                    }`}
                  >
                    <span className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => scrollToSection('contact')}
                    className={`link-page flex items-center space-x-3 text-lg font-medium transition-all duration-300 ${
                      activeSection === 'contact'
                        ? 'text-teal-500'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400'
                    }`}
                  >
                    <span className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    onClick={() => scrollToSection('blog')}
                    className={`link-page flex items-center space-x-3 text-lg font-medium transition-all duration-300 ${
                      activeSection === 'blog'
                        ? 'text-teal-500'
                        : 'text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400'
                    }`}
                  >
                    <span className="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
