import './globals.css'
import { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import NavBar from '@/components/NavBar'

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: "Tobias Fu | Photography & Development",
  description: 'Personal portfolio showcasing photography, web development, and creative work.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-white text-gray-800 flex flex-col min-h-screen">
        <NavBar />
        {/* Add padding for fixed navbar */}
        <div className="pt-24">
        {children}
        </div>
        </body>
        </html>
    )
}
