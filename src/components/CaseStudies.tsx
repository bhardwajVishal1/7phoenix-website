import { TrendingUp, Users, MousePointerClick, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    company: "Luxury Fashion Brand",
    service: "Social Media Marketing",
    growth: "+350%",
    leads: "+1,200",
    roi: "5.4x ROI",
    description:
      "Increased engagement and online sales through Instagram and Meta Ads campaigns.",
  },
  {
    company: "Restaurant Chain",
    service: "Local SEO + Google Ads",
    growth: "+220%",
    leads: "+800",
    roi: "4.1x ROI",
    description:
      "Improved local search rankings and generated more reservations through targeted advertising.",
  },
  {
    company: "Real Estate Agency",
    service: "Performance Marketing",
    growth: "+480%",
    leads: "+2,300",
    roi: "7.8x ROI",
    description:
      "Generated high-quality property inquiries using Meta and Google advertising campaigns.",
  },
];

function CaseStudies() {
  return (
  <section
  id="case-studies"
  className="bg-transparent py-24"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-orange-500 text-sm">
            Case Studies
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Real Results.
            <span className="text-orange-500"> Real Growth.</span>
          </h2>

          <p className="mt-6 text-white/70 max-w-3xl mx-auto leading-8">
            Every campaign is built around measurable business growth.
            Here are a few examples of what we have achieved for our clients.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {caseStudies.map((item, index) => (

            <div
              key={index}
              className="bg-neutral-900 rounded-3xl p-8 border border-transparent hover:border-orange-500 transition-all duration-300 hover:-translate-y-2"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-orange-500 uppercase text-sm">
                    {item.service}
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    {item.company}
                  </h3>

                </div>

                <ArrowUpRight className="text-orange-500" />

              </div>

              <p className="mt-6 text-white/60 leading-7">
                {item.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">

                <div className="text-center">

                  <TrendingUp
                    className="mx-auto text-orange-500 mb-2"
                    size={28}
                  />

                  <h4 className="font-bold text-xl">
                    {item.growth}
                  </h4>

                  <p className="text-xs text-white/50">
                    Growth
                  </p>

                </div>

                <div className="text-center">

                  <Users
                    className="mx-auto text-orange-500 mb-2"
                    size={28}
                  />

                  <h4 className="font-bold text-xl">
                    {item.leads}
                  </h4>

                  <p className="text-xs text-white/50">
                    Leads
                  </p>

                </div>

                <div className="text-center">

                  <MousePointerClick
                    className="mx-auto text-orange-500 mb-2"
                    size={28}
                  />

                  <h4 className="font-bold text-xl">
                    {item.roi}
                  </h4>

                  <p className="text-xs text-white/50">
                    ROI
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Statistics */}

        <div className="grid md:grid-cols-4 gap-8 mt-24 text-center">

          <div>
            <h3 className="text-5xl font-bold text-orange-500">500+</h3>
            <p className="mt-2 text-white/60">Campaigns Managed</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-orange-500">₹10Cr+</h3>
            <p className="mt-2 text-white/60">Revenue Generated</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-orange-500">98%</h3>
            <p className="mt-2 text-white/60">Client Satisfaction</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-orange-500">24/7</h3>
            <p className="mt-2 text-white/60">Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CaseStudies;