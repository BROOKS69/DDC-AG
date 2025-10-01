import React from "react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About Our Church</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          Our mission is to share the love of Christ through worship, service,
          and community outreach. We strive to be a welcoming place for all.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Leadership</h2>
        <ul className="list-disc list-inside">
          <li>Pastor John Doe</li>
          <li>Associate Pastor Jane Smith</li>
          <li>Music Director Michael Johnson</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Our History</h2>
        <p>
          Founded in 1980, our church has grown from a small group of believers
          to a vibrant community serving the local area with faith and love.
        </p>
      </section>
    </div>
  );
}
