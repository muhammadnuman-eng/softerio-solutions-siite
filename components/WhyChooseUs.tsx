'use client';

import {
  Monitor,
  Settings,
  Lightbulb,
  Truck,
  Users,
  Headphones,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Monitor,
    title: "Experience",
    description:
      "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "bg-blue-500",
  },
  {
    icon: Settings,
    title: "Pricing",
    description:
      "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "bg-red-500",
  },
  {
    icon: Lightbulb,
    title: "Products",
    description:
      "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "bg-gray-600",
  },
  {
    icon: Truck,
    title: "Delivery",
    description:
      "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "bg-yellow-500",
  },
  {
    icon: Users,
    title: "Approach",
    description:
      "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "bg-green-600",
  },
  {
    icon: Headphones,
    title: "Support",
    description:
      "Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "bg-teal-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Image on Right Side */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0">
        <Image
          src="/images/tech-pattern2.png"
          alt="Technology pattern background"
          fill
          className="object-cover opacity-20 dark:opacity-30"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Lorem ipsum dolor sit amet
          </p>
        </div>

        {/* Centered Content */}
        <div className="flex justify-center">
          <div className="max-w-6xl space-y-12">
            {/* First Row - 2 Icons */}
            <div className="flex items-center gap-8">
              {/* Left Description + Icon */}
              <div className="flex items-center gap-4">
                <div className="max-w-xs">
                  <h3 className="text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300 flex item-end">
                    Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Right Icon + Description */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div className="max-w-xs">
                  <h3 className="text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300">
                    Pricing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row - 2 Icons */}
            <div className="flex items-center gap-8">
              {/* Left Description + Icon */}
              <div className="flex items-center gap-4">
                <div className="max-w-xs">
                  <h3 className="text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300">
                    Products
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Right Icon + Description */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div className="max-w-xs">
                  <h3 className="text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300">
                    Delivery
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Row - 2 Icons */}
            <div className="flex items-center gap-8">
              {/* Left Description + Icon */}
              <div className="flex items-center gap-4">
                <div className="max-w-xs">
                  <h3 className="text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300">
                    Approach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Right Icon + Description */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <div className="max-w-xs">
                  <h3 className="text-xl font-bold text-teal-500 dark:text-teal-400 mb-2 transition-colors duration-300">
                    Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                    Ronsectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}