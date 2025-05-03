import React from 'react'
import { SiSharex } from 'react-icons/si'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isUploadOrPreview = location.pathname === "/upload" || location.pathname === "/preview";

  return (
    <header className="bg-white border-b border-gray-200 text-gray-800 shadow-sm py-4 px-4 lg:px-20 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <Link to={'/'} className="flex items-center group">
          <SiSharex className="lg:h-8 lg:w-8 w-6 h-6 mr-2 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
          <span className="lg:text-2xl text-lg font-serif font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">FileFlow</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/upload">
          <button className="bg-blue-50 text-blue-600 py-2 px-6 rounded-full font-semibold shadow-sm border border-blue-100 hover:bg-blue-100 transition-colors duration-200">
            Upload
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Header
