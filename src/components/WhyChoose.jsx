const whyItems = [
  { icon: 'brush-2-line', title: 'Custom Solutions', desc: 'Every hair type gets personalized attention.' },
  { icon: 'leaf-line', title: 'Premium Products', desc: 'Professional grade for lasting results.' },
  { icon: 'scissors-line', title: 'Cutting Edge Technology', desc: 'Innovative tools for flawless finishes.' },
]

const WhyChoose = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whyItems.map((item, index) => (
            <div key={index} className="text-center space-y-4 group cursor-default">
              <div className="mx-auto w-16 h-16  from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <i className={`ri-${item.icon} text-2xl text-gray-700 transition-colors duration-200 group-hover:text-black`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1564141696939-9eb6e957ccfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Expert stylists" 
              className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair text-gray-800">Expert Stylists & Colorists</h3>
            <p className="text-gray-600 leading-relaxed">Our team brings years of experience to every consultation.</p>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 shadow-sm hover:shadow-md">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose