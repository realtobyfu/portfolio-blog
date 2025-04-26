'use client';

import { galleryPhotos } from '@/data/gallery';
import GalleryTabs from '../../components/GalleryTabs';

export default function GalleryPage() {
  return (
    <main className="bg-black text-white min-h-screen -mt-24 pt-24">
      <div className="container relative z-0 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center font-playwrite">Gallery</h1>
        
        <GalleryTabs photos={galleryPhotos} />
      </div>
    </main>
  );
} 