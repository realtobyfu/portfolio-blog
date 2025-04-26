'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProjectsList } from '@/components/ProjectsList';

export default function ProjectsPage() {
    return (
        <main className="container py-12">
            <h1 className="text-3xl mb-8 text-gray-800 font-playwrite">My Projects</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ProjectsList.map((project, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="relative h-64 w-full">
                            <img 
                                src={project.image} 
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        <div className="p-6">
                            <h2 className="text-2xl font-playwrite mb-2 text-gray-800">{project.name}</h2>
                            
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            
                            <div className="mb-4">
                                <h3 className="text-sm text-gray-500 mb-2">Technologies:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.split(', ').map((skill, i) => (
                                        <span 
                                            key={i} 
                                            className="px-3 py-1 bg-neutral-light text-secondary-dark rounded-full text-xs"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex gap-4 mt-4">
                                {project.link !== '#' && (
                                    <a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer" 
                                        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-sm"
                                    >
                                        View Live
                                    </a>
                                )}
                                
                                {project.github !== '#' && (
                                    <a 
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer" 
                                        className="px-4 py-2 border border-secondary-light rounded-md hover:bg-neutral-light transition-colors text-sm"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
