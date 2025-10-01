import './globals.css'
import { ReactNode } from 'react'
import { AuthProvider } from '../contexts/AuthContext'

export const metadata = {
  title: 'Church Website',
  description: 'Welcome to our Church Website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <header className="bg-blue-700 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">Church Website</h1>
              <nav>
                <a href="/" className="mr-4">Home</a>
                <a href="/about" className="mr-4">About</a>
                <a href="/sermons" className="mr-4">Sermons</a>
                <a href="/events" className="mr-4">Events</a>
                <a href="/contact" className="mr-4">Contact</a>
                <a href="/blog" className="mr-4">Blog</a>
                <a href="/admin">Admin</a>
              </nav>
            </div>
          </header>
          <main className="container mx-auto p-4">{children}</main>
          <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
              &copy; {new Date().getFullYear()} Church Website. All rights reserved.
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  )
}
