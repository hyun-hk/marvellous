'use client'

import React from 'react'
import { ChevronDown, Play, Twitch, Youtube, Twitter, Instagram, Facebook } from 'lucide-react'
import Footer from '@/app/components/footer'
import Header from '@/app/components/header'  // Import the new Header component

// NavItem component (unchanged)
const NavItem: React.FC<{ children: React.ReactNode; active?: boolean }> = ({ children, active = false }) => (
  <a
    href="#"
    className={`px-4 py-2 rounded-lg transition-colors duration-200 text-white ${
      active
        ? 'bg-indigo-500 bg-opacity-50 relative'
        : 'hover:bg-indigo-500 hover:bg-opacity-30'
    }`}
  >
    {active && (
      <span className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full"></span>
    )}
    {children}
  </a>
)

// Button component (unchanged)
const Button: React.FC<{ children: React.ReactNode; primary?: boolean; onClick?: () => void }> = ({ children, primary = false, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
      primary
        ? 'bg-white text-indigo-600 hover:bg-gray-100 shadow-md hover:shadow-sm transform translate-y-[-4px] hover:translate-y-[-2px] active:translate-y-0'
        : 'bg-indigo-500 bg-opacity-30 text-white hover:bg-opacity-50'
    }`}
  >
    {children}
  </button>
)

// StreamerCard component (unchanged)
const StreamerCard: React.FC<{ name: string; image: string; description: string }> = ({ name, image, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
)

// Home component: Define the overall structure of the main page
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Use the new Header component */}
      <Header />
      {/* Footer component */}
      <Footer />
    </div>
  )
}