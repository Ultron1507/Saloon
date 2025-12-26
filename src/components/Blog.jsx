const blogPosts = [
  { title: 'Hair Care Tips for Winter', excerpt: 'Stay hydrated and protected this season.', img: 'https://images.unsplash.com/photo-1560264641-1b5191cc63e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: 'Sep 2025' },
  { title: 'Top Color Trends 2025', excerpt: 'Embrace bold shades for the new year.', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: 'Oct 2025' },
]

const Blog = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Our Blog</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="space-y-4">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
              <div className="text-sm text-gray-500">{post.date}</div>
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
              <button className="text-black underline">Read More</button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-md">View All</button>
        </div>
      </div>
    </section>
  )
}

export default Blog