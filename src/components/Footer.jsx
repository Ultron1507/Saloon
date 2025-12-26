const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-playfair mb-4">aXure</h3>
          <p className="text-gray-400">Elevating hair experiences since 2018.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Offers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Hair Care</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Shampoo & Conditioning</a></li>
            <li><a href="#" className="hover:text-white">Hair Color</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <p className="text-gray-400 mb-2">Manchester, UK</p>
          <p className="text-gray-400 mb-4">+44 161 123 4567</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="ri-facebook-line"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="ri-instagram-line"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="ri-twitter-line"></i></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 aXure Hair Salon. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer