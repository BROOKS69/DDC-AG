import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Welcoming New Members to Our Community",
      excerpt: "We're excited to welcome several new families who have joined our church community this month. Learn about our newcomer orientation program.",
      author: "Pastor Sarah Johnson",
      date: "2023-12-15",
      category: "Community"
    },
    {
      id: 2,
      title: "Holiday Food Drive Success",
      excerpt: "Thanks to our generous congregation, we were able to provide over 500 meals to families in need during the holiday season.",
      author: "Elder Michael Brown",
      date: "2023-12-12",
      category: "Outreach"
    },
    {
      id: 3,
      title: "Youth Group Mission Trip Planning",
      excerpt: "Our youth group is planning an exciting mission trip next summer. Learn how you can support this important outreach effort.",
      author: "Youth Pastor David Lee",
      date: "2023-12-08",
      category: "Youth"
    },
    {
      id: 4,
      title: "New Bible Study Series Starting Soon",
      excerpt: "Join us for our new series on the Book of Philippians, exploring themes of joy, faith, and community.",
      author: "Pastor John Smith",
      date: "2023-12-05",
      category: "Bible Study"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Church News & Updates</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Stay informed about our latest activities, announcements, and community news.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-4">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
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

          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Stay up-to-date with all our latest news and announcements.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
