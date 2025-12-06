import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-cream">
      {/* CTA Section */}
      <div className="bg-terracotta py-12">
        <div className="container-main text-center">
          <h2 className="heading-section text-cream mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-cream/80 max-w-xl mx-auto mb-8">
            Get a free, no-obligation estimate for your home improvement project.
            We'll visit your home and provide a detailed proposal within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+16194961364"
              className="inline-flex items-center gap-2 bg-cream text-charcoal font-semibold px-8 py-4 rounded-md hover:bg-cream/90 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              (619) 496-1364
            </a>
            <a
              href="tel:+18584298474"
              className="inline-flex items-center gap-2 bg-cream text-charcoal font-semibold px-8 py-4 rounded-md hover:bg-cream/90 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              (858) 429-8474
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <img src={logo} alt="2 Bros Construction" className="h-24 mb-4" />
              <p className="text-cream/70 mb-2">
                <span className="font-semibold text-cream">Jonathan Guerrero & Ulises Sotelo</span>
              </p>
              <p className="text-cream/70 mb-6 max-w-md">
                Family-owned residential construction and remodeling serving San
                Diego County since 2015. Licensed, insured, and committed to
                quality craftsmanship.
              </p>
              <div className="flex items-center gap-2 text-sm text-cream/60">
                <span className="bg-terracotta/20 text-terracotta px-2 py-1 rounded">
                  Licensed & Insured
                </span>
                <span>CA Contractor License #1117495</span>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-4">
                <a
                  href="tel:+16194961364"
                  className="flex items-start gap-3 text-cream/70 hover:text-cream transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>(619) 496-1364</span>
                </a>
                <a
                  href="tel:+18584298474"
                  className="flex items-start gap-3 text-cream/70 hover:text-cream transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>(858) 429-8474</span>
                </a>
                <a
                  href="mailto:info@2brosconstruction.com"
                  className="flex items-start gap-3 text-cream/70 hover:text-cream transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>info@2brosconstruction.com</span>
                </a>
                <div className="flex items-start gap-3 text-cream/70">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <address className="not-italic">
                    P.O. Box (Pending)<br />
                    San Diego, CA
                  </address>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Hours</h3>
              <div className="flex items-start gap-3 text-cream/70">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon – Fri: 7am – 5pm</p>
                  <p>Sat: 8am – 2pm</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10 py-6">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
          <p>© 2024 2 Bros Construction. All rights reserved.</p>
          <p>Proudly serving San Diego, La Jolla, Del Mar, Carlsbad & surrounding areas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
