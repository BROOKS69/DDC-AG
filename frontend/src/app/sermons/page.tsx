import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Sermons() {
  const sermons = [
    {
      id: 1,
      title: "Walking in Faith",
      speaker: "Pastor John Smith",
      date: "2023-12-10",
      summary: "An inspiring message about trusting God in difficult times.",
      audioUrl: "#"
    },
    {
      id: 2,
      title: "Love Your Neighbor",
      speaker: "Pastor Sarah Johnson",
      date: "2023-12-03",
      summary: "Exploring the commandment to love our neighbors as ourselves.",
      audioUrl: "#"
    },
    {
      id: 3,
      title: "The Power of Prayer",
      speaker: "Elder Michael Brown",
      date: "2023-11-26",
      summary: "Understanding the importance and impact of prayer in our lives.",
      audioUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Sermons</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Listen to our recent sermons and be inspired by God's word.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{sermon.title}</h3>
                  <p className="text-gray-600 mb-2">By {sermon.speaker}</p>
                  <p className="text-sm text-gray-500 mb-4">{new Date(sermon.date).toLocaleDateString()}</p>
                  <p className="text-gray-700 mb-4">{sermon.summary}</p>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Listen Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subscribe to Our Podcast</h2>
            <p className="text-gray-600 mb-6">
              Never miss a sermon! Subscribe to our podcast on your favorite platform.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-colors">
                Apple Podcasts
              </button>
              <button className="bg-orange-600 text-white py-2 px-6 rounded-md hover:bg-orange-700 transition-colors">
                Spotify
              </button>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                Google Podcasts
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
