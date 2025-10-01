import React from "react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Finding Peace in a Busy World",
      excerpt: "In today's fast-paced society, finding moments of peace and reflection is more important than ever. Discover how to cultivate inner peace through faith and mindfulness.",
      author: "Pastor John Doe",
      date: "2023-10-01",
      category: "Spirituality",
    },
    {
      id: "2",
      title: "The Power of Community",
      excerpt: "Explore the importance of building strong community relationships and how our church family supports one another through life's challenges and celebrations.",
      author: "Jane Smith",
      date: "2023-09-24",
      category: "Community",
    },
    {
      id: "3",
      title: "Serving Others: A Path to Joy",
      excerpt: "Learn how acts of service not only help others but also bring fulfillment and joy to those who serve. Discover volunteer opportunities in our community.",
      author: "Michael Johnson",
      date: "2023-09-17",
      category: "Service",
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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
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
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Church Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, reflections, and stories from our church community. Discover inspiration for your faith journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <time dateTime={post.date} className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">By {post.author}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest blog posts, event updates, and church news directly in your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
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
