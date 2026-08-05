import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

function Contact() {
  return (
   <section
  id="contact"
  className="bg-transparent py-24"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-orange-500 text-sm">
            Contact Us
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Let's Grow Your
            <span className="text-orange-500"> Business</span>
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Ready to take your business to the next level?
            Contact our team today for a FREE consultation.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}

          <div>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="bg-orange-500 p-4 rounded-xl">
                  <Phone />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Phone
                  </h3>

                  <p className="text-white/70">
                    +91 98765 43210
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-orange-500 p-4 rounded-xl">
                  <Mail />
                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Email
                  </h3>

                  <p className="text-white/70">
                    info@7phoenix.in
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-orange-500 p-4 rounded-xl">
                  <MapPin />
                </div>

                <div>

                  <h3 className="font-bold text-xl">
                    Address
                  </h3>

                  <p className="text-white/70">
                    Jaipur, Rajasthan, India
                  </p>

                </div>

              </div>

            </div>

            {/* Social */}

            <div className="flex gap-5 mt-12">

              <button className="bg-neutral-900 p-4 rounded-full hover:bg-orange-500 transition">
                <Facebook />
              </button>

              <button className="bg-neutral-900 p-4 rounded-full hover:bg-orange-500 transition">
                <Instagram />
              </button>

              <button className="bg-neutral-900 p-4 rounded-full hover:bg-orange-500 transition">
                <Linkedin />
              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-neutral-900 rounded-3xl p-10">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black border border-neutral-700 focus:border-orange-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-black border border-neutral-700 focus:border-orange-500 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl bg-black border border-neutral-700 focus:border-orange-500 outline-none"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-4 rounded-xl bg-black border border-neutral-700 focus:border-orange-500 outline-none"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full p-4 rounded-xl bg-black border border-neutral-700 focus:border-orange-500 outline-none"
              />

              <button
                className="w-full bg-orange-500 hover:bg-orange-600 transition rounded-xl py-4 font-bold flex justify-center items-center gap-3"
              >
                Send Message

                <Send size={20} />

              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;