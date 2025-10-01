import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Church Name
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/sermons" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sermons
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-gray-700 hover:text-blue-600 transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
