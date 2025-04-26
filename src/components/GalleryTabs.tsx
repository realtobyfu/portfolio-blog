'use client';

import { useState } from 'react';
import PhotoGallery from './PhotoGallery';
import { type PhotoItem } from '../data/gallery';

interface GalleryTabsProps {
  photos: PhotoItem[];
}

export default function GalleryTabs({ photos }: GalleryTabsProps) {
  // Group photos by location
  const locations = [...new Set(photos.map(photo => photo.location.split(',')[0].trim()))];
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredPhotos = activeTab === 'all' 
    ? photos 
    : photos.filter(photo => photo.location.includes(activeTab));

  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center flex-wrap border-b border-gray-800 mb-10">
        <button
          onClick={() => setActiveTab('all')}
          className={`py-3 px-6 text-lg font-medium mr-4 border-b-2 ${
            activeTab === 'all'
              ? 'border-white text-white'
              : 'border-transparent text-gray-400 hover:text-gray-200'
          } transition-colors duration-300`}
        >
          All Photos
        </button>
        
        {locations.map(location => (
          <button
            key={location}
            onClick={() => setActiveTab(location)}
            className={`py-3 px-6 text-lg font-medium mr-4 border-b-2 ${
              activeTab === location
                ? 'border-white text-white'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            } transition-colors duration-300`}
          >
            {location}
          </button>
        ))}
      </div>

      {/* Content */}
      <PhotoGallery photos={filteredPhotos} />
    </>
  );
} 