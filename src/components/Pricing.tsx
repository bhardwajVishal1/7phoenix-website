import { Check, Star } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "₹9,999",
    description: "Perfect for startups and small businesses.",
    featured: false,
    features: [
      "Social Media Management",
      "10 Creative Posts",
      "Basic SEO",
      "Monthly Report",
      "Email Support",
    ],
  },
  {
    title: "Professional",
    price: "₹24,999",
    description: "Best for growing businesses.",
    featured: true,
    features: [
      "Everything in Starter",
      "Facebook & Instagram Ads",
      "Advanced SEO",
      "Website Optimization",
      "Google Business Profile",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Complete digital marketing solution.",
    featured: false,
    features: [
      "Unlimited Campaigns",
      "Dedicated Marketing Team",
      "Google & Meta Ads",
      "Content Marketing",
      "Website Development",
      "24/7 Support",
    ],
  },
];

function Pricing() {
  return (
   <section
  id="pricing"
  className="bg-transparent py-24"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="text-orange-500 uppercase tracking-[5px] text-sm">
            Pricing Plans
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Choose Your
            <span className="text-orange-500"> Perfect Plan</span>
          </h2>

          <p className="mt-6 text-white/70 max-w-3xl mx-auto leading-8">
            Flexible pricing designed for startups, growing brands,
            and enterprises.
          </p>

        </div>

        {/* Pricing Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`relative rounded-3xl p-10 transition duration-300 ${
                plan.featured
                  ? "bg-orange-500 text-black scale-105"
                  : "bg-neutral-900 hover:border hover:border-orange-500"
              }`}
            >

              {plan.featured && (

                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2 rounded-full flex items-center gap-2">

                  <Star size={16} />

                  Most Popular

                </div>

              )}

              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>

              <p className="mt-3 opacity-80">
                {plan.description}
              </p>

              <div className="mt-8 text-5xl font-black">
                {plan.price}
              </div>

              <div className="mt-10 space-y-4">

                {plan.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <Check
                      className={
                        plan.featured
                          ? "text-black"
                          : "text-orange-500"
                      }
                    />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <button
                className={`w-full mt-10 py-4 rounded-full font-bold transition ${
                  plan.featured
                    ? "bg-black text-white hover:bg-neutral-900"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                Get Started
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;