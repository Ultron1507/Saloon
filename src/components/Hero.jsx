const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
      }}
    >
      {/* Dark overlay with backdrop blur for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
     <h1 className="text-4xl md:text-6xl font-cormorant font-bold text-white mb-4 drop-shadow-2xl">Hair Experience</h1>
<h2 className="text-2xl md:text-3xl font-cormorant font-bold text-white mb-6 drop-shadow-2xl">Like No Other</h2>
<p className="text-base md:text-lg font-inter text-white mb-8 max-w-2xl mx-auto drop-shadow-xl">Unlocking beauty with expert care and personalized style.</p>
<button className="bg-white text-black px-8 py-3 rounded-md text-lg font-inter font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
  Book Appointment
</button>
      </div>
    </section>
  )
}

export default Hero