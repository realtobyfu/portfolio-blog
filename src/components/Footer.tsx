'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/', icon: FiGithub },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/', icon: FiLinkedin },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-6 mt-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo/Name and Short Bio */}
          <div>
            <h3 className="text-2xl text-gray-800 mb-4 font-playwrite">Tobias Fu</h3>
            <p className="text-gray-600 mb-4 max-w-sm">
              Photographer, developer, and creative thinker. Capturing moments and building digital experiences.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-playwrite text-gray-800 mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
              <Link href="/work" className="text-gray-600 hover:text-primary transition-colors">Work</Link>
              <Link href="/gallery" className="text-gray-600 hover:text-primary transition-colors">Gallery</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
            </nav>
          </div>
          
          {/* Column 3: Social Links */}
          <div>
            <h4 className="font-playwrite text-gray-800 mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-neutral-light"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-neutral mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Tobias Fu. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Made with Next.js and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
} 