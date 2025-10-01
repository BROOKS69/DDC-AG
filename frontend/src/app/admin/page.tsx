import React from "react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-8">
        Use the links below to manage church content and users.
      </p>
      <ul className="space-y-4">
        <li>
          <Link
            href="/admin/sermons"
            className="text-blue-600 hover:underline font-semibold"
          >
            Manage Sermons
          </Link>
        </li>
        <li>
          <Link
            href="/admin/events"
            className="text-blue-600 hover:underline font-semibold"
          >
            Manage Events
          </Link>
        </li>
        <li>
          <Link
            href="/admin/news"
            className="text-blue-600 hover:underline font-semibold"
          >
            Manage News
          </Link>
        </li>
        <li>
          <Link
            href="/admin/donations"
            className="text-blue-600 hover:underline font-semibold"
          >
            Manage Donations
          </Link>
        </li>
        <li>
          <Link
            href="/admin/users"
            className="text-blue-600 hover:underline font-semibold"
          >
            Manage Users
          </Link>
        </li>
      </ul>
    </div>
  );
}
