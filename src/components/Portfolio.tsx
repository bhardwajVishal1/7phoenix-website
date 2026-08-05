import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Fashion Brand",
    category: "Social Media Marketing",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
  },
  {
    title: "Restaurant Marketing",
    category: "Branding & SEO",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
  },
  {
    title: "Real Estate Campaign",
    category: "Meta Ads",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
  },
  {
    title: "Fitness Company",
    category: "Website Development",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
  },
  {
    title: "Coffee Brand",
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200",
  },
  {
    title: "Education Startup",
    category: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200",
  },
];

function Portfolio() {
  return (
   <section
  id="portfolio"
  className="bg-transparent py-24"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-orange-500 text-sm">
            Our Portfolio
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Our Latest
            <span className="text-orange-500">
              {" "}Projects
            </span>
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto mt-6 leading-8">
            We have worked with startups, local businesses,
            restaurants, real estate companies, healthcare,
            education, and many growing brands.
          </p>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-neutral-900"
            >

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center">

                  <ArrowUpRight
                    size={40}
                    className="text-orange-500"
                  />

                </div>

              </div>

              <div className="p-6">

                <p className="text-orange-500 uppercase text-sm">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold mt-3">
                  {project.title}
                </h3>

                <button className="mt-6 text-orange-500 font-semibold hover:underline">
                  View Project →
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <h3 className="text-4xl font-bold">
            Want Your Brand Here?
          </h3>

          <p className="mt-6 text-white/70">
            Let's create your next success story.
          </p>

          <a
            href="#contact"
            className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-semibold"
          >
            Start Your Project
          </a>

        </div>

      </div>
    </section>
  );
}

export default Portfolio;