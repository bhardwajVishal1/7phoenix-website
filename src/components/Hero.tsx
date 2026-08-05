import { ArrowRight, PlayCircle } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center"
    >
      {/* Content */}

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <span className="inline-block px-4 py-2 border border-orange-500 rounded-full text-orange-400 uppercase tracking-widest text-xs">
            Digital Marketing Agency
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white">
            Grow Your
            <br />
            <span className="text-orange-500">
              Business Online
            </span>
          </h1>

          <p className="mt-8 text-white/70 max-w-2xl text-lg leading-8">
            7PHOENIX helps startups and businesses dominate the digital world through SEO,
            Social Media Marketing, Branding, Paid Advertising, Website Development,
            Content Creation and Performance Marketing.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#contact"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-semibold"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </a>

            <a
              href="#portfolio"
              className="flex items-center gap-2 border border-white text-white hover:border-orange-500 hover:text-orange-500 transition px-8 py-4 rounded-full"
            >
              View Portfolio
              <PlayCircle size={20} />
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            <div>
              <h2 className="text-5xl font-bold text-orange-500">500+</h2>
              <p className="mt-2 text-white/70">Projects Completed</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-orange-500">300+</h2>
              <p className="mt-2 text-white/70">Happy Clients</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-orange-500">98%</h2>
              <p className="mt-2 text-white/70">Client Satisfaction</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-orange-500">24/7</h2>
              <p className="mt-2 text-white/70">Support</p>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>

    </section>
  );
}

export default Hero;