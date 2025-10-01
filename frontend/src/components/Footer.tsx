import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Church Name</h3>
            <p className="text-gray-300">
              Serving our community with faith, hope, and love.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="text-gray-300 hover:text-white transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-300 space-y-2">
              <p>123 Church Street</p>
              <p>City, State 12345</p>
              <p>(555) 123-4567</p>
              <p>info@church.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Times</h4>
            <div className="text-gray-300 space-y-2">
              <p>Sunday Service: 10:00 AM</p>
              <p>Wednesday Prayer: 7:00 PM</p>
              <p>Sunday School: 9:00 AM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Church Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
