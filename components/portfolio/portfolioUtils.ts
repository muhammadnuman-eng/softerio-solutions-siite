// Portfolio utility functions converted from JavaScript to TypeScript

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  client?: string;
  languages: string;
  duration: string;
  budget: string;
  previewUrl: string;
  dataSize: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

// Portfolio filtering functions
export const filterPortfolioByCategory = (
  items: PortfolioItem[], 
  category: string
): PortfolioItem[] => {
  if (category === 'All') {
    return items;
  }
  return items.filter(item => item.category === category);
};

export const getUniqueCategories = (items: PortfolioItem[]): string[] => {
  return ['All', ...Array.from(new Set(items.map(item => item.category)))];
};

// Contact form validation
export const validateContactForm = (data: ContactFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push('Name is required');
  }

  if (!data.email.trim()) {
    errors.push('Email is required');
  } else if (!isValidEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!data.message.trim()) {
    errors.push('Message is required');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Email validation helper
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Portfolio hover effects
export const calculateHoverPosition = (
  event: React.MouseEvent,
  offset: { x: number; y: number } = { x: 10, y: -60 }
) => {
  return {
    x: event.clientX + offset.x,
    y: event.clientY + offset.y
  };
};

// Smooth scrolling utility
export const scrollToSection = (sectionId: string, behavior: ScrollBehavior = 'smooth'): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior });
  }
};

// Active section detection
export const getActiveSection = (sections: string[], offset: number = 100): string => {
  const scrollPosition = window.scrollY + offset;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return section;
      }
    }
  }

  return 'home';
};

// Portfolio grid utilities
export const getPortfolioGridClass = (dataSize: string): string => {
  const sizeMap: Record<string, string> = {
    '960x640': 'col-span-1',
    '793x1080': 'col-span-1',
    '800x600': 'col-span-1',
    '1200x800': 'col-span-2',
    '600x800': 'col-span-1',
    '900x600': 'col-span-1'
  };

  return sizeMap[dataSize] || 'col-span-1';
};

// Animation utilities
export const createStaggeredAnimation = (
  elements: HTMLElement[],
  delay: number = 100
): void => {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('animate-fade-in-up');
    }, index * delay);
  });
};

// Responsive breakpoints
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Check if viewport matches breakpoint
export const isViewportSize = (size: keyof typeof breakpoints): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints[size];
};

// Debounce utility for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Local storage utilities
export const saveToLocalStorage = <T>(key: string, value: T): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
};

export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window !== 'undefined') {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  }
  return defaultValue;
};
