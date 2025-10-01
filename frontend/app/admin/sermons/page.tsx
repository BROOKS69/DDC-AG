'use client'

import { useState, useEffect, FormEvent } from 'react'

interface Sermon {
  id: number
  title: string
  summary: string
  audioUrl: string
}

export default function AdminSermons() {
  const [sermons, setSermons] = useState<Sermon[]>([])
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [audioUrl, setAudioUrl] = useState('')

  useEffect(() => {
    // TODO: Fetch sermons from backend API
    setSermons([
      { id: 1, title: 'Faith and Hope', summary: 'A sermon about faith.', audioUrl: '/sermons/faith-and-hope.mp3' },
    ])
  }, [])

  const handleAddSermon = (e: FormEvent) => {
    e.preventDefault()
    // TODO: Post new sermon to backend API
    const newSermon: Sermon = { id: Date.now(), title, summary, audioUrl }
    setSermons([...sermons, newSermon])
    setTitle('')
    setSummary('')
    setAudioUrl('')
  }

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Manage Sermons</h2>
      <form onSubmit={handleAddSermon} className="mb-8 space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            className="w-full border border-gray-300 rounded p-2"
            rows={3}
          />
        </div>
        <div>
          <label className="block mb-1">Audio URL</label>
          <input
            type="text"
            value={audioUrl}
            onChange={(e) => setAudioUrl(e.target.value)}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Add Sermon
        </button>
      </form>
      <ul>
        {sermons.map((sermon) => (
          <li key={sermon.id} className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold">{sermon.title}</h3>
            <p>{sermon.summary}</p>
            <audio controls src={sermon.audioUrl} className="w-full mt-2" />
          </li>
        ))}
      </ul>
    </section>
  )
}
