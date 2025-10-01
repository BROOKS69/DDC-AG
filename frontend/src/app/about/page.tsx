import React from "react";
import Link from "next/link";
import Header from "../../components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Our Church</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our mission, leadership, and history as we strive to serve our community with faith and love.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to share the love of Christ through worship, service, and community outreach.
              We strive to be a welcoming place for all people, fostering spiritual growth and building
              meaningful relationships within our congregation and beyond.
            </p>
          </section>

          {/* Leadership Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">Pastor John Doe</h3>
                <p className="text-gray-600">Senior Pastor</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">Associate Pastor Jane Smith</h3>
                <p className="text-gray-600">Associate Pastor</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">Michael Johnson</h3>
                <p className="text-gray-600">Music Director</p>
              </div>
            </div>
          </section>
        </div>

        {/* History Section */}
        <section className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Founded in 1980, our church began as a small group of believers meeting in a local community center.
              Over the years, we have grown into a vibrant community dedicated to serving the local area with faith and love.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Through decades of ministry, we have witnessed countless lives transformed by the power of God's grace.
              Our commitment to outreach, education, and fellowship continues to guide us as we build a stronger,
              more compassionate community for generations to come.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community and discover how you can make a difference.
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
