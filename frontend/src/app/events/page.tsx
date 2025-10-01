import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "2023-12-17",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Join us for our weekly worship service with music, prayer, and a message from God's word."
    },
    {
      id: 2,
      title: "Community Potluck Dinner",
      date: "2023-12-20",
      time: "6:00 PM",
      location: "Fellowship Hall",
      description: "Bring your favorite dish and join us for fellowship and food. All are welcome!"
    },
    {
      id: 3,
      title: "Christmas Eve Service",
      date: "2023-12-24",
      time: "7:00 PM",
      location: "Main Sanctuary",
      description: "A special Christmas Eve service celebrating the birth of Jesus Christ."
    },
    {
      id: 4,
      title: "New Year's Prayer Service",
      date: "2023-12-31",
      time: "9:00 PM",
      location: "Main Sanctuary",
      description: "Ring in the new year with prayer, reflection, and hope for the future."
    }
  ];

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Events & Calendar</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Stay connected with our community through upcoming events and services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg mr-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-sm text-gray-600 uppercase">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600">{event.time}</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    Add to Calendar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Weekly Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Sunday</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>9:00 AM - Sunday School</li>
                  <li>10:00 AM - Worship Service</li>
                  <li>11:30 AM - Fellowship Time</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Wednesday</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>7:00 PM - Prayer Meeting</li>
                  <li>7:30 PM - Bible Study</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
