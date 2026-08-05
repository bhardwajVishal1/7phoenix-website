import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white border-t border-neutral-800">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-4xl font-bold">
              <span className="text-orange-500">7</span>PHOENIX
            </h2>

            <p className="mt-6 text-white/60 leading-8">
              We help businesses grow through Digital Marketing,
              Branding, Website Development, SEO and Paid Advertising.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="bg-neutral-900 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <Facebook />
              </a>

              <a
                href="#"
                className="bg-neutral-900 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <Instagram />
              </a>

              <a
                href="#"
                className="bg-neutral-900 p-3 rounded-full hover:bg-orange-500 transition"
              >
                <Linkedin />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/60">

              <li><a href="#home" className="hover:text-orange-500">Home</a></li>
              <li><a href="#about" className="hover:text-orange-500">About</a></li>
              <li><a href="#services" className="hover:text-orange-500">Services</a></li>
              <li><a href="#portfolio" className="hover:text-orange-500">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-orange-500">Pricing</a></li>
              <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-white/60">

              <li>SEO</li>
              <li>Social Media Marketing</li>
              <li>Google Ads</li>
              <li>Meta Ads</li>
              <li>Website Development</li>
              <li>Branding</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Phone className="text-orange-500" />

                <span className="text-white/60">
                  +91 98765 43210
                </span>

              </div>

              <div className="flex gap-4">

                <Mail className="text-orange-500" />

                <span className="text-white/60">
                  info@7phoenix.in
                </span>

              </div>

              <div className="flex gap-4">

                <MapPin className="text-orange-500" />

                <span className="text-white/60">
                  Jaipur, Rajasthan, India
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-neutral-800">

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-white/50 text-sm">
            © {currentYear} 7PHOENIX. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-4 md:mt-0 bg-orange-500 p-3 rounded-full hover:bg-orange-600 transition"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;