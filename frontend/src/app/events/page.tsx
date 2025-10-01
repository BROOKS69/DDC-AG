import React from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export default function Events() {
  const events: Event[] = [
    {
      id: "1",
      title: "Sunday Service",
      date: "2023-10-08",
      location: "Main Sanctuary",
      description: "Join us for our weekly Sunday worship service.",
    },
    {
      id: "2",
      title: "Community Potluck",
      date: "2023-10-15",
      location: "Fellowship Hall",
      description: "Bring a dish and enjoy fellowship with the community.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Events Calendar</h1>
      <ul className="space-y-6">
        {events.map((event) => (
          <li key={event.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-1">{event.title}</h2>
            <p className="text-gray-600 mb-1">{event.date} - {event.location}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
