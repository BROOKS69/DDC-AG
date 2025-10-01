import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Church Website',
  description: 'Welcome to our Church Website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="bg-blue-700 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Church Website</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/sermons" className="hover:underline">Sermons</a></li>
                <li><a href="/events" className="hover:underline">Events</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
                <li><a href="/blog" className="hover:underline">Blog</a></li>
                <li><a href="/admin" className="hover:underline">Admin</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-100 text-center p-4 mt-8">
          &copy; {new Date().getFullYear()} Church Website. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
