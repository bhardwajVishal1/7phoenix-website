import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "RS Fashion",
    review:
      "7PHOENIX completely transformed our online presence. Within three months our sales increased by over 250%. Their team is creative, professional, and always available.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Priya Verma",
    company: "FitLife Gym",
    review:
      "The social media campaigns created by 7PHOENIX generated amazing engagement and helped us attract hundreds of new customers.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Amit Patel",
    company: "Patel Builders",
    review:
      "From website development to Google Ads, everything was handled professionally. We now receive quality leads every single day.",
    image: "https://i.pravatar.cc/150?img=15",
  },
];

function Testimonials() {
  return (
    <section
  id="testimonials"
  className="bg-transparent py-24"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-orange-500 text-sm">
            Testimonials
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            What Our
            <span className="text-orange-500"> Clients Say</span>
          </h2>

          <p className="mt-6 text-white/70 max-w-3xl mx-auto">
            We believe long-term relationships are built on trust,
            transparency and measurable business growth.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((client, index) => (

            <div
              key={index}
              className="bg-neutral-900 rounded-3xl p-8 hover:border hover:border-orange-500 transition duration-300 hover:-translate-y-2"
            >

              <Quote
                className="text-orange-500 mb-6"
                size={40}
              />

              <p className="text-white/70 leading-8">
                "{client.review}"
              </p>

              <div className="flex mt-6">

                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    className="text-yellow-400 fill-yellow-400"
                    size={18}
                  />
                ))}

              </div>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={client.image}
                  alt={client.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                />

                <div>

                  <h3 className="text-xl font-bold">
                    {client.name}
                  </h3>

                  <p className="text-orange-500">
                    {client.company}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 bg-orange-500 rounded-3xl p-12 text-center text-black">

          <h3 className="text-4xl font-bold">
            Ready to Become Our Next Success Story?
          </h3>

          <p className="mt-5 max-w-2xl mx-auto text-lg">
            Join hundreds of businesses that trust 7PHOENIX to grow
            their online presence and generate real business results.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-full hover:bg-neutral-900 transition"
          >
            Start Your Journey
          </a>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;