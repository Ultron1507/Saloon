const services = [
  { title: 'Haircut & Style', desc: 'Transform your look with precision cuts and expert styling tailored to your unique features.', img: 'https://images.unsplash.com/photo-1750263147723-ebd447918d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 60 },
  { title: 'Hair Color', desc: 'Discover vibrant, personalized shades that enhance your natural beauty and reflect your personality.', img: 'https://images.unsplash.com/photo-1707812343087-c9ff9e5abb43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 120 },
  { title: 'Shampoo & Conditioning', desc: 'Indulge in revitalizing treatments with premium products for nourished, salon-fresh hair.', img: 'https://plus.unsplash.com/premium_photo-1661382105286-9370220b86b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 40 },
  { title: 'Full Highlights', desc: 'Elevate your style with seamless dimension and luminous highlights crafted by our specialists.', img: 'https://images.unsplash.com/photo-1750263239815-407b9bf7d52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 180 },
  { title: 'Blow Dry Style', desc: 'Achieve effortless, red-carpet elegance with our signature blowout techniques.', img: 'https://media.istockphoto.com/id/1326454050/photo/hairdresser-straightening-womans-hair-at-beauty-salon.webp?a=1&b=1&s=612x612&w=0&k=20&c=qkwxe2j263usFG83JPDQoMLwSux0jcPYLGwfKs1m1FY=', price: 50 },
  { title: 'Wash & Blow Dry', desc: 'A quick yet luxurious refresh to keep you looking polished on the go.', img: 'https://images.unsplash.com/photo-1750263160581-d332256293bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 45 },
]

const Services = () => {
  return (
    <section className="py-12 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-cormorant font-bold text-gray-800 mb-3">Our Signature Services</h2>
          <p className="text-base font-inter text-gray-600 max-w-xl mx-auto">Experience professional care designed to elevate your natural beauty.</p>
        </div>
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 break-inside-avoid mb-4"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3">
                <h4 className="font-cormorant font-bold text-base text-gray-800 mb-1 leading-tight">{service.title}</h4>
                <p className="font-inter text-gray-600 mb-2 leading-tight text-xs">{service.desc}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-cormorant text-lg font-bold text-gray-800">${service.price}</span>
                </div>
                <button className="font-inter text-xs font-semibold text-gray-700 border border-gray-500 px-2 py-1 rounded hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 flex items-center justify-center gap-1 w-full">
                  Book Now
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services