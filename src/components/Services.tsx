import {
  Megaphone,
  Search,
  Globe,
  PenTool,
  Palette,
  BarChart3,
  Camera,
  MonitorSmartphone,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Grow your audience and build brand awareness with engaging social media campaigns.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Rank higher on Google and increase organic traffic with advanced SEO strategies.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Responsive, modern, and high-converting business websites tailored to your brand.",
  },
  {
    icon: BarChart3,
    title: "Google & Meta Ads",
    description:
      "Generate quality leads and maximize ROI with paid advertising campaigns.",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description:
      "Creative content that builds trust, engagement, and customer loyalty.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Professional logo design, brand strategy, and complete visual identity.",
  },
  {
    icon: Camera,
    title: "Photography & Video",
    description:
      "Professional photos, reels, and promotional videos for your business.",
  },
  {
    icon: MonitorSmartphone,
    title: "UI/UX Design",
    description:
      "Beautiful and user-friendly interfaces that improve customer experience.",
  },
];

function Services() {
  return (
    <section
  id="services"
  className="bg-transparent text-white py-24 px-6 lg:px-12"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="text-orange-500 uppercase tracking-[5px] text-sm">
            Our Services
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Everything Your
            <span className="text-orange-500">
              {" "}Business Needs
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-white/70 leading-8">
            We provide complete digital marketing solutions to help
            businesses grow faster, attract more customers and build
            a powerful online presence.
          </p>

        </div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-neutral-900 rounded-3xl p-8 hover:border hover:border-orange-500 transition-all duration-300 hover:-translate-y-3"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">

                  <Icon
                    size={34}
                    className="text-orange-500"
                  />

                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition">
                  {service.title}
                </h3>

                <p className="text-white/60 leading-7">
                  {service.description}
                </p>

                <button
                  className="mt-8 flex items-center gap-2 text-orange-500 font-semibold"
                >
                  Learn More

                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  />
                </button>
              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 text-center">

          <h3 className="text-4xl font-bold">
            Ready to Grow Your Business?
          </h3>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Let's create a customized digital marketing strategy
            that helps your business stand out and achieve real
            results.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition"
          >
            Get Free Consultation

            <ArrowUpRight size={20} />

          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;