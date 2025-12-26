const ChangeLooks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Subtle background pattern or overlay for depth */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Hero Text with accent */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            We will change your
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">out looks</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-80"></div>
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the transformation with our expert team of stylists who blend artistry and innovation for stunning results.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-16 max-w-md mx-auto">
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">7+</div>
            <div className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors">Years of Excellence</div>
            <div className="mt-2 text-xs text-gray-400">Crafting timeless styles</div>
          </div>
          <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">12+</div>
            <div className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors">Awards Won</div>
            <div className="mt-2 text-xs text-gray-400">Recognized for innovation</div>
          </div>
        </div>

        {/* Image with overlay and hover effect */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1700760934268-8aa0ef52ce0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Salon team" 
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] object-cover h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-white/90 text-sm md:text-base bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">Meet Our Passionate Team</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChangeLooks