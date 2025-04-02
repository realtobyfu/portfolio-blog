import './globals.css'
import { Metadata } from 'next'
import NavBar from '@/components/NavBar'
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
        <NavBar/>
        {children}
        </body>
        </html>
    )
}
