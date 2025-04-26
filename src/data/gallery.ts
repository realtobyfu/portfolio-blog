'use client';

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  location: string;
  date: string;
  description?: string;
}

// Sample gallery photos
export const galleryPhotos: PhotoItem[] = [
  {
    id: '1',
    src: '/images/placeholder/placeholder1.svg',
    alt: 'City Skyline at Dawn',
    location: 'Tokyo, Japan',
    date: 'March 2024',
    description: 'The iconic Tokyo skyline at dawn with Mt. Fuji visible in the distance.'
  },
  {
    id: '2',
    src: '/images/placeholder/placeholder2.svg',
    alt: 'Mountain Lake',
    location: 'Swiss Alps, Switzerland',
    date: 'August 2023',
    description: 'Crystal clear mountain lake reflecting the surrounding alpine peaks.'
  },
  {
    id: '3',
    src: '/images/placeholder/placeholder3.svg',
    alt: 'Desert Sunset',
    location: 'Sahara, Morocco',
    date: 'October 2023',
    description: 'The endless golden dunes of the Sahara Desert under a dramatic sunset.'
  },
  {
    id: '4',
    src: '/images/placeholder/placeholder1.svg',
    alt: 'Urban Architecture',
    location: 'New York, USA',
    date: 'December 2023',
    description: 'Modern architectural wonders in the heart of Manhattan.'
  },
  {
    id: '5',
    src: '/images/placeholder/placeholder2.svg',
    alt: 'Ancient Temple',
    location: 'Kyoto, Japan',
    date: 'April 2024',
    description: 'A serene moment at one of Kyoto\'s historical temples during cherry blossom season.'
  },
  {
    id: '6',
    src: '/images/placeholder/placeholder3.svg',
    alt: 'Coastal Sunset',
    location: 'Malibu, USA',
    date: 'July 2023',
    description: 'Golden hour along the Pacific Coast Highway.'
  },
  {
    id: '7',
    src: '/images/placeholder/placeholder1.svg',
    alt: 'Northern Lights',
    location: 'Tromsø, Norway',
    date: 'January 2024',
    description: 'The mesmerizing Aurora Borealis dancing across the night sky.'
  },
  {
    id: '8',
    src: '/images/placeholder/placeholder2.svg',
    alt: 'Historic Street',
    location: 'Paris, France',
    date: 'June 2023',
    description: 'A charming cobblestone street in the historic heart of Paris.'
  },
  {
    id: '9',
    src: '/images/placeholder/placeholder3.svg',
    alt: 'Tropical Beach',
    location: 'Bali, Indonesia',
    date: 'February 2024',
    description: 'Pristine white sands and crystal clear waters at a secluded beach.'
  },
  {
    id: '10',
    src: '/images/placeholder/placeholder1.svg',
    alt: 'Mountain Peak',
    location: 'Patagonia, Argentina',
    date: 'April 2023',
    description: 'The iconic peaks of Patagonia under dramatic clouds.'
  },
  {
    id: '11',
    src: '/images/placeholder/placeholder2.svg',
    alt: 'Urban Night Scene',
    location: 'Hong Kong, China',
    date: 'September 2023',
    description: 'The vibrant neon-lit streets of Hong Kong at night.'
  },
  {
    id: '12',
    src: '/images/placeholder/placeholder3.svg',
    alt: 'Autumn Forest',
    location: 'Vermont, USA',
    date: 'October 2023',
    description: 'A scenic forest path lined with trees in their autumn colors.'
  }
]; 