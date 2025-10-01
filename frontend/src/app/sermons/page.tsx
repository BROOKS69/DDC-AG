import React from "react";
import Link from "next/link";

interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  summary: string;
  audioUrl: string;
}

export default function Sermons() {
  const sermons: Sermon[] = [
    {
      id: "1",
      title: "Faith in Action",
      speaker: "Pastor John Doe",
      date: "2023-10-01",
      summary: "Exploring how faith translates into everyday actions.",
      audioUrl: "/sermons/faith-in-action.mp3",
    },
    {
      id: "2",
      title: "Love Thy Neighbor",
      speaker: "Pastor Jane Smith",
      date: "2023-09-24",
      summary: "Understanding the commandment to love our neighbors.",
      audioUrl: "/sermons/love-thy-neighbor.mp3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Church Name
              </Link>
            </div>
            <div className="flex space-x-8">
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </Link>
              <Link href="/sermons" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Sermons
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Events
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Sermons</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Listen to our latest sermons and be inspired by the word of God.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sermons.map((sermon) => (
            <article key={sermon.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{sermon.title}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="font-medium">{sermon.speaker}</span>
                  <span className="mx-2">•</span>
                  <time dateTime={sermon.date}>{new Date(sermon.date).toLocaleDateString()}</time>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{sermon.summary}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <audio controls className="w-full">
                    <source src={sermon.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Sermons</h2>
          <p className="text-lg text-gray-600 mb-8">
            Stay updated with our latest sermons and teachings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/events"
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              View Events
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Church Name</h3>
              <p className="text-gray-300">123 Church Street<br />City, State 12345</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link href="/sermons" className="text-gray-300 hover:text-white">Sermons</Link></li>
                <li><Link href="/events" className="text-gray-300 hover:text-white">Events</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-gray-300">Phone: (123) 456-7890<br />Email: info@church.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; 2023 Church Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
