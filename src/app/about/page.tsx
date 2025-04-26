'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';

// Timeline data from user's resume
const timeline = [
  // {
  //   year: 'September 2024 - Current',
  //   title: 'Course Assistant - Tufts University (CS 40)',
  //   description: 'Lead weekly labs, host office hours, grade programming assignments for Machine Structures & Programming course.'
  // },
  {
    year: 'November 2024 - Current',
    title: 'Founding Software Engineer - Karma Farm, LLC',
    description: 'Leading a team of 3 to design and develop an iOS application using Swift, SwiftUI, and AWS.'
  },
  {
    year: 'May 2024 - August 2024',
    title: 'Software Engineer - Develop for Good',
    description: 'Led a team of 7 engineers to develop and deploy a therapist profile and admin portal using React.js, SQL, and Node.js.'
  },
  {
    year: 'July 2024 - August 2024',
    title: 'Course Assistant - Tufts Coding Academy',
    description: 'Supported 45 students with programming in Python, Pygame, web scraping, and mobile app development.'
  },
  {
    year: 'September 2021 - May 2025',
    title: 'B.S. in Computer Science - Tufts University',
    description: 'GPA: 3.55. Relevant coursework includes Programming Languages, Algorithms, Machine Learning, Web Programming, and more.'
  }
];

export default function AboutPage() {
    return (
    <main className="container relative z-0">
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left column - Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl mb-4 text-gray-800 font-playwrite">About Me</h1>
          
          <div className="mb-8 relative w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/T1002267.jpeg"
              alt="Tobias Fu"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg">
              Hello! I'm Toby Fu, a Computer Science student and software engineer based in Medford, MA.
            </p>
            
            <p>
              I blend technical expertise with creative problem-solving to develop meaningful software solutions.
              My work spans from mobile app development to web applications, with a passion for creating intuitive user experiences.
            </p>
            
            <p>
              When I'm not coding, you can find me working with Tufts Electric Racing on the Sensors & Microcontrollers team
              or participating in CS Student Council activities.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                <FiFileText /> Download CV
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="inline-flex items-center gap-2 px-4 py-2 border border-secondary-light rounded-md hover:bg-neutral-light transition-colors"
              >
                <FiMail /> Contact Me
              </a>
              <a 
                href="https://github.com/realtobyfu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-secondary-light rounded-md hover:bg-neutral-light transition-colors"
              >
                <FiGithub /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-secondary-light rounded-md hover:bg-neutral-light transition-colors"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Right column - Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl mb-6 text-gray-800 font-playwrite">Experience & Education</h2>
          
          <div className="space-y-8 relative">
            <div className="absolute left-3 top-2 bottom-10 w-0.5 bg-secondary-light opacity-50"></div>
            
            {/* Timeline items */}
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>

                <div className="relative left-10">
                  <div className="text-sm text-gray-500 mb-1 font-medium">{item.year}</div>
                  <h3 className="text-lg text-gray-800 mb-2 font-playwrite">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl mb-6 text-gray-800 font-playwrite">Skills</h2>
            
            <div className="flex flex-wrap gap-3">
              {[
                'C', 'C++', 'Swift', 'Java', 'Python', 'JavaScript', 'TypeScript', 
                'HTML/CSS', 'ARM Assembly', 'React.js', 'Flask', 'SwiftUI', 
                'Express.js', 'Node.js', 'MongoDB', 'MySQL', 'Git', 'AWS'
              ].map(skill => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-neutral-light text-secondary-dark rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}