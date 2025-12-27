"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-foreground border-t border-border">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-accent">
            Courtyard Valley Resort
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A premium 4-BHK valley-view villa offering luxury, comfort, and a
            serene retreat for families & groups. Experience nature, privacy,
            and unforgettable sunrises.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-accent">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Gallery", path: "/gallery" },
              { name: "Booking", path: "/booking" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-accent">
            Contact Us
          </h2>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent mt-0.5" />
              Panchgani–Mahabaleshwar Road, Bhilar, Panchgani
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent" />
              +91 75175 12640 / +91 93701 19683
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              courtyardvalleyresort@gmail.com
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-4 pt-3">
            <a
              aria-label="Instagram"
              className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition"
            >
              <Instagram size={18} />
            </a>
            <a
              aria-label="Facebook"
              className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Courtyard Valley Resort. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
