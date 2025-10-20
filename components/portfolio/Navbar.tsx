import Image from "next/image";
import React from "react";
import Link from "next/link";
import PortfolioLogo from "@/public/icons/portfolio-logo.svg";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 py-12 lg:px-52 md:px-28 px-20 flex justify-between items-center w-full">
      <Image
        className="w-12 h-12"
        src={PortfolioLogo}
        width={100}
        height={100}
        alt="logo"
      />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex items-center space-x-16"
      >
        <Link
          href="#about"
          className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-300 hover:scale-105"
        >
          About me
        </Link>
        <Link
          href="#skills"
          className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-300 hover:scale-105"
        >
          Skills
        </Link>
        <Link
          href="#portfolio"
          className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-300 hover:scale-105"
        >
          Portfolio
        </Link>
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          CONTACT ME
        </button>
      </motion.nav>
    </div>
  );
};
