import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome to Our Church</h1>
              <p className="text-xl mb-8">Join us in worship and community</p>
              <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                To spread the word of God, build a loving community, and serve those in need.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Us This Sunday</h2>
            <p className="text-xl text-blue-100 mb-8">Service at 10:00 AM</p>
            <Link href="/events" className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
              View Events
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
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
