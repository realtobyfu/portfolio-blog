// src/components/NavBar.tsx (example)
import '../app/globals.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="container flex justify-end gap-6 mb-8 text-[1.1rem] font-normal">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/about" className="hover:underline">About Me</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
        </nav>
    )
}