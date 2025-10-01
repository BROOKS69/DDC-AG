import React from "react";

interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  summary: string;
  audioUrl: string;
}

export default function Sermons() {
  const sermons: Sermon[] = [
    {
      id: "1",
      title: "Faith in Action",
      speaker: "Pastor John Doe",
      date: "2023-10-01",
      summary: "Exploring how faith translates into everyday actions.",
      audioUrl: "/sermons/faith-in-action.mp3",
    },
    {
      id: "2",
      title: "Love Thy Neighbor",
      speaker: "Pastor Jane Smith",
      date: "2023-09-24",
      summary: "Understanding the commandment to love our neighbors.",
      audioUrl: "/sermons/love-thy-neighbor.mp3",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Sermons</h1>
      <div className="space-y-6">
        {sermons.map((sermon) => (
          <div key={sermon.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">{sermon.title}</h2>
            <p className="text-gray-600 mb-2">
              {sermon.speaker} - {sermon.date}
            </p>
            <p className="mb-4">{sermon.summary}</p>
            <audio controls className="w-full">
              <source src={sermon.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}
