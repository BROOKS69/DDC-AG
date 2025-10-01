'use client'

import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'

export default function AdminPage() {
  const { user, signIn, signOut } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signIn(email, password)
      setError('')
    } catch (err: any) {
      setError(err.message)
    }
  }

  if (!user) {
    return (
      <section className="max-w-md mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">
            Login
          </button>
        </form>
      </section>
    )
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <p className="mb-4">Welcome, {user.email}!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Sermons</h3>
          <a href="/admin/sermons" className="text-blue-600 hover:underline">Go to Sermons</a>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Events</h3>
          <a href="/admin/events" className="text-blue-600 hover:underline">Go to Events</a>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Manage News</h3>
          <a href="/admin/news" className="text-blue-600 hover:underline">Go to News</a>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Donations</h3>
          <a href="/admin/donations" className="text-blue-600 hover:underline">Go to Donations</a>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Users</h3>
          <a href="/admin/users" className="text-blue-600 hover:underline">Go to Users</a>
        </div>
      </div>
      <button
        onClick={signOut}
        className="mt-6 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </section>
  )
}
