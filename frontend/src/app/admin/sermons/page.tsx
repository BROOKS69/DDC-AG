"use client";

import React, { useState, useEffect } from "react";

interface Sermon {
  _id?: string;
  title: string;
  speaker: string;
  date: string;
  summary: string;
  audio_url: string;
}

export default function AdminSermons() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [form, setForm] = useState<Sermon>({
    title: "",
    speaker: "",
    date: "",
    summary: "",
    audio_url: "",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetchSermons();
  }, []);

  async function fetchSermons() {
    const res = await fetch("/api/sermons");
    const data = await res.json();
    setSermons(data);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (editingId) {
      // Update sermon
      await fetch(`/api/sermons/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } else {
      // Create sermon
      await fetch("/api/sermons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }
    setForm({ title: "", speaker: "", date: "", summary: "", audio_url: "" });
    setEditingId(null);
    fetchSermons();
  }

  async function handleEdit(id: string) {
    const sermon = sermons.find((s) => s._id === id);
    if (sermon) {
      setForm({
        title: sermon.title,
        speaker: sermon.speaker,
        date: sermon.date,
        summary: sermon.summary,
        audio_url: sermon.audio_url,
      });
      setEditingId(id);
    }
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this sermon?")) {
      await fetch(`/api/sermons/${id}`, { method: "DELETE" });
      fetchSermons();
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Manage Sermons</h1>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="speaker"
          placeholder="Speaker"
          value={form.speaker}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="summary"
          placeholder="Summary"
          value={form.summary}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="url"
          name="audio_url"
          placeholder="Audio URL"
          value={form.audio_url}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? "Update Sermon" : "Add Sermon"}
        </button>
      </form>

      <div>
        {sermons.map((sermon) => (
          <div
            key={sermon._id}
            className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{sermon.title}</h2>
              <p>
                {sermon.speaker} - {sermon.date}
              </p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(sermon._id!)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(sermon._id!)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
