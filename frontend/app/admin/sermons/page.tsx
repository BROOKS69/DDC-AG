'use client'

import { useAuth } from '../../../contexts/AuthContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Sermon {
  _id: string
  title: string
  speaker: string
  date: string
  summary: string
  audio_url?: string
}

export default function AdminSermonsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [sermons, setSermons] = useState<Sermon[]>([])
  const [formData, setFormData] = useState({
    title: '',
    speaker: '',
    date: '',
    summary: '',
    audio_url: '',
  })
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      router.push('/admin')
      return
    }
    fetchSermons()
  }, [user, router])

  const fetchSermons = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sermons`)
    const data = await res.json()
    setSermons(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const method = editingId ? 'PUT' : 'POST'
    const url = editingId
      ? `${process.env.NEXT_PUBLIC_API_URL}/sermons/${editingId}`
      : `${process.env.NEXT_PUBLIC_API_URL}/sermons`

    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user?.id}`, // Assuming token is user.id or get from session
      },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      fetchSermons()
      setFormData({ title: '', speaker: '', date: '', summary: '', audio_url: '' })
      setEditingId(null)
    }
  }

  const handleEdit = (sermon: Sermon) => {
    setFormData({
      title: sermon.title,
      speaker: sermon.speaker,
      date: sermon.date,
      summary: sermon.summary,
      audio_url: sermon.audio_url || '',
    })
    setEditingId(sermon._id)
  }

  const handleDelete = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sermons/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user?.id}`,
      },
    })
    if (res.ok) {
      fetchSermons()
    }
  }

  if (!user) return null

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Manage Sermons</h2>
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Speaker</label>
          <input
            type="text"
            value={formData.speaker}
            onChange={(e) => setFormData({ ...formData, speaker: e.target.value })}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Summary</label>
          <textarea
            value={formData.summary}
            onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
            required
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Audio URL</label>
          <input
            type="url"
            value={formData.audio_url}
            onChange={(e) => setFormData({ ...formData, audio_url: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">
          {editingId ? 'Update Sermon' : 'Add Sermon'}
        </button>
      </form>
      <ul>
        {sermons.map((sermon) => (
          <li key={sermon._id} className="mb-4 border-b pb-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{sermon.title}</h3>
              <p>By {sermon.speaker} on {new Date(sermon.date).toLocaleDateString()}</p>
            </div>
            <div>
              <button
                onClick={() => handleEdit(sermon)}
                className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(sermon._id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
