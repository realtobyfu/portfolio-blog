'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { type PhotoItem } from '../data/gallery';

interface PhotoGalleryProps {
  photos: PhotoItem[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Function to determine if a photo should be large (span 2 columns)
  const isLargePhoto = (index: number) => {
    // Make every 3rd and 5th photo large
    return index % 8 === 2 || index % 8 === 4;
  };

  // Function to determine if a photo should be tall (span 2 rows)
  const isTallPhoto = (index: number) => {
    // Make every 4th and 7th photo tall
    return index % 8 === 3 || index % 8 === 6;
  };

  return (
    <div className="photo-gallery">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
        {photos.map((photo, index) => (
          <motion.div 
            key={photo.id} 
            className={`cursor-pointer overflow-hidden ${
              isLargePhoto(index) ? 'md:col-span-2' : ''
            } ${
              isTallPhoto(index) ? 'md:row-span-2' : ''
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className={`relative ${isTallPhoto(index) ? 'aspect-[3/4]' : isLargePhoto(index) ? 'aspect-[16/9]' : 'aspect-square'} w-full`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:opacity-90 transition-opacity duration-500"
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{photo.location}</h3>
                  <p className="text-sm opacity-80">{photo.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full h-[85vh] relative"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-medium mb-1">{selectedPhoto.location}</h3>
                <p className="text-gray-300 mb-2">{selectedPhoto.date}</p>
                {selectedPhoto.description && (
                  <p className="text-gray-200 max-w-3xl">{selectedPhoto.description}</p>
                )}
              </div>
              <button 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                onClick={() => setSelectedPhoto(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 