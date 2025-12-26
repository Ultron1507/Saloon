const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"></textarea>
            </div>
            <button type="submit" className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact