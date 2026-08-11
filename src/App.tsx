import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

import Pricing from "./components/Pricing";

import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/bg.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      {/* Website */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
      
        <Pricing />
        
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
