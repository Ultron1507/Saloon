import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenuLine, RiCloseLine, RiWhatsappLine } from 'react-icons/ri'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const phoneNumber = '1234567890' // Replace with your actual WhatsApp number (e.g., '15551234567' for US)
  const message = encodeURIComponent('Hi! I\'d like to book an appointment at aXure Hair Salon.')

  return (
    <header className="bg-white shadow-md  top-0 z-50 relative">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-cormorant text-gray-800">aXure</div>
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="text-gray-600 hover:text-black transition font-inter">Home</Link></li>
          <li><Link to="/contact" className="text-gray-600 hover:text-black transition font-inter">Contact</Link></li>
          <li><Link to="/services" className="text-gray-600 hover:text-black transition font-inter">Services</Link></li>
          <li><Link to="/blog" className="text-gray-600 hover:text-black transition font-inter">Blog</Link></li>
          <li><Link to="/about" className="text-gray-600 hover:text-black transition font-inter">About</Link></li>
        </ul>
        <button className="bg-black text-white px-6 py-2 rounded-md hidden md:block hover:bg-gray-800 transition font-inter">Book Now</button>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-gray-600 hover:text-black"
        >
          {mobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          <ul className="space-y-4">
            <li><Link to="/" className="block text-gray-600 hover:text-black py-2 transition font-inter" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/contact" className="block text-gray-600 hover:text-black py-2 transition font-inter" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/services" className="block text-gray-600 hover:text-black py-2 transition font-inter" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
            <li><Link to="/blog" className="block text-gray-600 hover:text-black py-2 transition font-inter" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/about" className="block text-gray-600 hover:text-black py-2 transition font-inter" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          </ul>
          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-inter">Book Now</button>
        </div>
      )}
      
      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center gap-2 transition-all duration-300 hover:shadow-xl hover:scale-105"
        aria-label="WhatsApp Us Now"
      >
        <RiWhatsappLine size={24} />
        <span className="hidden md:block text-sm font-inter font-semibold">WhatsApp Us Now</span>
      </a>
    </header>
  )
}

export default Header