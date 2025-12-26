const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="https://media.istockphoto.com/id/511777075/photo/teacher-helping-students-training-to-become-hairdressers.webp?a=1&b=1&s=612x612&w=0&k=20&c=TJD-90GMtQYY7xFEiKb8Wrwq5bvqc3B6h1ZDaAFbXcM=" 
            alt="Stylist at work" 
            className="w-full rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-playfair">We are more than a</h2>
          <h3 className="text-3xl md:text-4xl font-playfair text-black">hair salon</h3>
          <p className="text-gray-600 leading-relaxed">Experience unparalleled expertise in hair care. Our dedicated team transforms your vision into reality with precision and passion.</p>
          <button className="bg-black text-white px-6 py-2 rounded-md">Book Services</button>
        </div>
      </div>
    </section>
  )
}

export default About