// src/components/ProjectsList.ts

// Using placeholder images from the placeholder directory
const placeholderImage1 = '/images/placeholder/placeholder1.svg';
const placeholderImage2 = '/images/placeholder/placeholder2.svg';
const placeholderImage3 = '/images/placeholder/placeholder3.svg';
const placeholderImage4 = '/images/placeholder/placeholder1.svg';

export const ProjectsList = [
    {
        name: 'Write-It-Down',
        image: placeholderImage1,
        skills: 'Swift, SwiftUI, Supabase, CoreData, XCUITest',
        description: 'An offline-first note-taking iOS application that enables users to create, categorize, and customize notes with location and date metadata.',
        link: 'https://apps.apple.com/us/app/write-it-down/id6742731898?platform=iphone',
        github: '#',
    },
    {
        name: 'Project Board',
        image: placeholderImage2,
        skills: 'Node.js, Express, React, Vite, Supabase, Vercel, Render',
        description: 'A web platform that connects CS students and recent graduates for collaborative projects using Express.js backend and React frontend.',
        link: '#',
        github: 'https://github.com/realtobyfu/project-board',
    },
    {
        name: 'ProustGPT',
        image: placeholderImage3,
        skills: 'HTML, CSS, TypeScript, React.js, Flask, Python, Llama-cpp',
        description: 'An interactive chatbot simulating conversations inspired by Marcel Proust\'s style using the LLaMA model.',
        link: '#',
        github: 'https://github.com/realtobyfu/proust-gpt',
    },
    {
        name: 'SubTranslate',
        image: placeholderImage4,
        skills: 'HTML, CSS, JavaScript, React.js, Flask',
        description: 'A tool for translating SRT subtitles with Flask backend and React.js frontend.',
        link: '#',
        github: 'https://github.com/realtobyfu/sub-translate',
    },
];
