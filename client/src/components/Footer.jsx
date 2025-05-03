import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700 text-center py-8 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto px-4 gap-4">
        <div className="flex items-center gap-2 justify-center mb-2 md:mb-0">
          <span className="font-bold text-2xl tracking-tight text-blue-700">FileFlow</span>
          <span className="text-xs bg-blue-100 rounded px-2 py-1 ml-2 text-blue-700">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-4 justify-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200 text-blue-400">
            <FaFacebook size={28} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200 text-blue-400">
            <FaTwitter size={28} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors duration-200 text-pink-400">
            <FaInstagram size={28} />
          </a>
        </div>
        <div className="text-sm text-gray-500 mt-2 md:mt-0">
          Made with <span className="text-pink-400">♥</span> by sonikumari
        </div>
      </div>
    </footer>
  )
}

export default Footer
