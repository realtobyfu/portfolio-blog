'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { type PostData } from '@/lib/posts';

interface HomePageContentProps {
  featuredPosts: PostData[];
}

export default function HomePageContent({ featuredPosts }: HomePageContentProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="container mx-auto px-4 max-w-6xl">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center py-16 md:py-24">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl mb-4 text-gray-800 font-playwrite"
            style={{ fontFamily: "'Playwrite AU SA', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I&apos;m Tobias.
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Photographer, developer, and creative thinker.
            <br />Capturing moments and building digital experiences.
          </motion.p>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/work" 
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 border border-secondary-light rounded-md hover:bg-neutral-light transition-colors"
            >
              About Me
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/T1002267.jpeg"
              alt="Tobias Fu"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured work section with hover effect */}
      <motion.section 
        className="py-16 border-t border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl text-gray-800 font-playwrite">Featured Work</h2>
          <Link href="/work" className="text-gray-800 hover:underline">
            View all projects →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'Photography', 
              image: '/placeholder.jpg',
              href: '/gallery',
              description: 'Travel and location photography' 
            },
            { 
              title: 'Web Development', 
              image: '/placeholder.jpg',
              href: '/work',
              description: 'Modern, responsive websites' 
            },
            { 
              title: 'Design Projects', 
              image: '/placeholder.jpg',
              href: '/work',
              description: 'UI/UX and visual design work' 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="group relative h-64 overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
              whileHover={{ y: -5 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-white/90 mb-3">{item.description}</p>
                <Link 
                  href={item.href} 
                  className="inline-block py-1 border-b border-white hover:border-white/50 transition-colors"
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Blog Posts */}
      {featuredPosts.length > 0 && (
        <motion.section 
          className="py-16 border-t border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl text-gray-800 font-playwrite">From the Blog</h2>
            <Link href="/gallery" className="text-gray-800 hover:underline">
              View all posts →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/posts/${post.id}`}
                className="block group"
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.coverImage || '/placeholder.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-gray-600 transition-colors">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </Link>
            ))}
          </div>
        </motion.section>
      )}
    </main>
  );
} 