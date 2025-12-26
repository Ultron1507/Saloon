import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ChangeLooks from './components/ChangeLooks';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <ChangeLooks />
            <WhyChoose />
            <Testimonials />
            <Blog />
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;