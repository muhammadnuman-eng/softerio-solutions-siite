'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PortfolioItem, filterPortfolioByCategory, getUniqueCategories } from './portfolio/portfolioUtils';

// Portfolio data based on template
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'ExactFlow',
    category: 'web development',
    image: '/images/projects/exactflow.jpg',
    languages: 'next.js, typescript, python',
    duration: '5 months',
    budget: '$48000',
    previewUrl: 'https://preview_of_project.com',
    dataSize: '1200x800'
  },
  {
    id: 2,
    title: 'BigSystema',
    category: 'web development',
    image: '/images/projects/bigsystema.jpg',
    languages: 'vue.js, nuxt 3, typescript, laravel',
    duration: '6 months',
    budget: '$58000',
    previewUrl: 'https://preview_of_project.com',
    dataSize: '1200x800'
  },
  {
    id: 3,
    title: 'FormBrick',
    category: 'web development',
    image: '/images/projects/formbricks.png',
    languages: 'next.js, typescript, prisma, tailwind',
    duration: '7 months',
    budget: '$65000',
    previewUrl: 'https://preview_of_project.com',
    dataSize: '1200x800'
  },
  {
    id: 4,
    title: 'Autumn Papers',
    category: 'mobile application',
    image: '/images/tech-pattern.jpg',
    client: 'Envato',
    languages: 'html, css, js',
    duration: '3 months',
    budget: '$33000',
    previewUrl: 'https://preview_of_project.com',
    dataSize: '960x640'
  },
  {
    id: 5,
    title: 'Globe',
    category: 'website design',
    image: '/images/tech-pattern2.png',
    client: 'Envato',
    languages: 'html, css, js',
    duration: '3 months',
    budget: '$33000',
    previewUrl: 'https://preview_of_project.com',
    dataSize: '793x1080'
  },
  {
    id: 6,
    title: 'Creative Design',
    category: 'branding',
    image: '/images/hero-bg.png',
    client: 'Creative Agency',
    languages: 'figma, photoshop',
    duration: '2 months',
    budget: '$25000',
    previewUrl: 'https://preview_of_project.com',
    dataSize: '800x600'
  },
  {
    id: 7,
    title: 'E-commerce Platform',
    category: 'web development',
    image: '/images/tech-pattern2.png',
    client: 'Tech Startup',
    languages: 'react, node.js, mongodb',
    duration: '6 months',
    budget: '$45000',
    previewUrl: 'https://preview_of_project.com',
    dataSize: '1200x800'
  },
  {
    id: 8,
    title: 'Mobile App',
    category: 'mobile development',
    image: '/images/tech-pattern.jpg',
    client: 'App Company',
    languages: 'react native, firebase',
    duration: '4 months',
    budget: '$35000',
    previewUrl: 'https://preview_of_project.com',
    dataSize: '600x800'
  },
  {
    id: 9,
    title: 'UI/UX Design',
    category: 'design',
    image: '/images/hero-bg.png',
    client: 'Design Studio',
    languages: 'figma, principle',
    duration: '3 months',
    budget: '$28000',
    previewUrl: 'https://preview_of_project.com',
    dataSize: '900x600'
  }
];

export default function Portfolio() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Filter projects by category
  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    const filtered = filterPortfolioByCategory(portfolioItems, category);
    setFilteredItems(filtered);
  };

  // Navigate to portfolio page projects section
  const handleLoadMore = () => {
    router.push('/portfolio#work');
  };

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get unique categories
  const categories = getUniqueCategories(portfolioItems);

  // Show 6 different items for home page (2 rows - all unique cards)
  const homePageItems = [
    // First row - 3 unique cards
    {
      id: 1,
      title: "ExactFlow",
      category: "web development",
      image: "/images/projects/exactflow.jpg",
      client: "ExactFlow Corp",
      languages: "next.js, typescript, python",
      duration: "5 months",
      budget: "$48000",
      previewUrl: "https://www.exact-solutions.com/",
      dataSize: "1200x800"
    },
    {
      id: 2,
      title: "BigSystema",
      category: "web development",
      image: "/images/projects/bigsystema.jpg",
      client: "BigSystema Inc",
      languages: "vue.js, nuxt 3, typescript, laravel",
      duration: "6 months",
      budget: "$58000",
      previewUrl: "https://preview_of_project.com",
      dataSize: "1200x800"
    },
    {
      id: 3,
      title: "FormBrick",
      category: "web development",
      image: "/images/projects/formbricks.png",
      client: "FormBrick Ltd",
      languages: "next.js, typescript, prisma, tailwind",
      duration: "7 months",
      budget: "$65000",
      previewUrl: "https://formbricks.com/",
      dataSize: "1200x800"
    },
    // Second row - 3 different cards
    {
      id: 4,
      title: "BehindWords",
      category: "web development",
      image: "/images/projects/behindwords.png",
      client: "BehindWords Corp",
      languages: "react, node.js, typescript, postgresql",
      duration: "6 months",
      budget: "$52000",
      previewUrl: "https://preview_of_project.com",
      dataSize: "1200x800"
    },
    {
      id: 5,
      title: "HackerNews Clone",
      category: "web development",
      image: "/images/projects/SebastienChopin.png",
      client: "HackerNews Inc",
      languages: "nuxt.js, vue.js, typescript",
      duration: "4 months",
      budget: "$42000",
      previewUrl: "https://preview_of_project.com",
      dataSize: "1200x800"
    },
    {
      id: 6,
      title: "Nuxt DevTools",
      category: "development tools",
      image: "/images/projects/devTTools.webp",
      client: "Nuxt Corp",
      languages: "nuxt.js, vue.js, typescript, unoCSS",
      duration: "6 months",
      budget: "$55000",
      previewUrl: "https://preview_of_project.com",
      dataSize: "1200x800"
    }
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-all duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-left md:text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white  mb-8 transition-colors duration-300 leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 dark:from-white dark:to-white">Portfolio</span>
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-start md:justify-center gap-3 sm:gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gray-800 dark:bg-teal-600 text-white shadow-lg shadow-gray-800/25 dark:shadow-teal-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid Container */}
        <div className="portfolio-container">
          {/* Portfolio Grid - Responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {homePageItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Portfolio Item Card */}
                <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-800/20 dark:group-hover:shadow-teal-600/20 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  {/* Project Main Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to a default image if the original fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/tech-pattern.jpg';
                      }}
                    />
                    
                    {/* Hover Overlay with Details */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent transition-all duration-500 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                    } flex items-end justify-center`}>
                      <div className="text-white text-center p-6 w-full">
                        <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                        
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="font-medium text-gray-200">Client:</span>
                            <span className="text-gray-300 font-semibold">{item.client}</span>
                          </div>
                          <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="font-medium text-gray-200">Tech:</span>
                            <span className="text-gray-300 font-semibold text-right max-w-[120px]">{item.languages}</span>
                          </div>
                          <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="font-medium text-gray-200">Duration:</span>
                            <span className="text-gray-300 font-semibold">{item.duration}</span>
                          </div>
                          <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <span className="font-medium text-gray-200">Budget:</span>
                            <span className="text-gray-300 font-semibold">{item.budget}</span>
                          </div>
                        </div>
                        
                        {/* View Project Button */}
                        <button className="mt-4 bg-gray-800 dark:bg-teal-600 hover:bg-gray-700 dark:hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform">
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Footer */}
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '900ms' }}>
          <button 
            onClick={handleLoadMore}
            className="bg-gray-800 dark:bg-teal-600 hover:bg-gray-700 dark:hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-gray-800/25 dark:shadow-teal-600/25 transform"
          >
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}
