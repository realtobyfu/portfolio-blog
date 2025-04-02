import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tobias’s Creative Corner',
    description: 'Thoughts, Projects, and Everything In-Between.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <nav className="container">
            <a href="/">Home</a>
            <a href="#">Blog</a>
            <a href="#">About Me</a>
            <a href="#">Projects</a>
        </nav>
        {children}
        </body>
        </html>
    )
}
