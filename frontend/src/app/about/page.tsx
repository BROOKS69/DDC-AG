import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Our Church</h1>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our church is dedicated to spreading the word of God, building a loving community,
              and serving those in need. We believe in creating a welcoming environment where
              everyone can grow in their faith and connect with others.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our History</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in 1950, our church has been serving the community for over 70 years.
              What started as a small gathering has grown into a vibrant congregation committed
              to making a difference in people's lives.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-center mb-2">Pastor John Smith</h3>
                <p className="text-gray-600 text-center">Senior Pastor</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-center mb-2">Pastor Sarah Johnson</h3>
                <p className="text-gray-600 text-center">Associate Pastor</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-center mb-2">Elder Michael Brown</h3>
                <p className="text-gray-600 text-center">Church Elder</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">What We Believe</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>We believe in the Trinity: Father, Son, and Holy Spirit</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>We believe in the Bible as the inspired word of God</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>We believe in salvation through faith in Jesus Christ</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span>We believe in the importance of community and fellowship</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
