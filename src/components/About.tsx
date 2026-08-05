import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Globe,
} from "lucide-react";

function About() {
  return (
   <section
  id="about"
  className="bg-transparent py-24"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="text-orange-500 uppercase tracking-[5px] text-sm">
            About 7PHOENIX
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            We Build Brands
            <span className="text-orange-500"> That Grow.</span>
          </h2>

          <p className="text-white/70 mt-8 max-w-3xl mx-auto leading-8">
            7PHOENIX is a modern digital marketing agency helping
            startups, local businesses and enterprises establish a
            powerful online presence through strategy, creativity,
            and technology.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Who We Are
            </h3>

            <p className="text-white/70 leading-8 mb-6">
              We believe every business deserves to be seen online.
              Our team creates high-converting marketing campaigns,
              engaging social media content, SEO strategies,
              branding, and websites that drive real business
              growth.
            </p>

            <p className="text-white/70 leading-8">
              Whether you're launching a startup or scaling an
              established company, 7PHOENIX helps you attract
              customers, increase revenue, and build a lasting
              digital presence.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-neutral-900 rounded-2xl p-8 hover:border hover:border-orange-500 transition">

              <Target className="text-orange-500 mb-4" size={40} />

              <h4 className="text-2xl font-bold mb-3">
                Mission
              </h4>

              <p className="text-white/60">
                Helping businesses achieve sustainable digital
                growth through innovative marketing.
              </p>

            </div>

            <div className="bg-neutral-900 rounded-2xl p-8 hover:border hover:border-orange-500 transition">

              <Eye className="text-orange-500 mb-4" size={40} />

              <h4 className="text-2xl font-bold mb-3">
                Vision
              </h4>

              <p className="text-white/60">
                Becoming one of India's most trusted digital
                marketing agencies.
              </p>

            </div>

            <div className="bg-neutral-900 rounded-2xl p-8 hover:border hover:border-orange-500 transition">

              <Users className="text-orange-500 mb-4" size={40} />

              <h4 className="text-2xl font-bold mb-3">
                Team
              </h4>

              <p className="text-white/60">
                Creative marketers, designers and developers
                delivering measurable results.
              </p>

            </div>

            <div className="bg-neutral-900 rounded-2xl p-8 hover:border hover:border-orange-500 transition">

              <Award className="text-orange-500 mb-4" size={40} />

              <h4 className="text-2xl font-bold mb-3">
                Excellence
              </h4>

              <p className="text-white/60">
                Every project is built with quality, creativity,
                and long-term success in mind.
              </p>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-8 mt-24">

          <div className="text-center">

            <TrendingUp
              className="mx-auto text-orange-500 mb-3"
              size={42}
            />

            <h3 className="text-5xl font-bold">500+</h3>

            <p className="text-white/60 mt-2">
              Campaigns Delivered
            </p>

          </div>

          <div className="text-center">

            <Users
              className="mx-auto text-orange-500 mb-3"
              size={42}
            />

            <h3 className="text-5xl font-bold">300+</h3>

            <p className="text-white/60 mt-2">
              Happy Clients
            </p>

          </div>

          <div className="text-center">

            <Globe
              className="mx-auto text-orange-500 mb-3"
              size={42}
            />

            <h3 className="text-5xl font-bold">20+</h3>

            <p className="text-white/60 mt-2">
              Industries Served
            </p>

          </div>

          <div className="text-center">

            <Award
              className="mx-auto text-orange-500 mb-3"
              size={42}
            />

            <h3 className="text-5xl font-bold">98%</h3>

            <p className="text-white/60 mt-2">
              Client Satisfaction
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;