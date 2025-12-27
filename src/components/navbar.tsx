"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-primary/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 md:gap-3 md:flex-row text-center md:text-left"
        >
          <Image
            src="/images/courtyardVilla_logo.png"
            alt="Courtyard Valley Resort"
            width={55}
            height={50}
            className="md:w-12 md:h-12"
          />

          <span className="text-primary-foreground font-semibold tracking-wide text-sm md:text-lg leading-tight">
            Courtyard Valley Resort
          </span>
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-primary-foreground font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`pb-1 transition-all duration-300 ${
                    isActive
                      ? "text-accent border-b-2 border-accent"
                      : "hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-primary border-t border-border">
          <ul className="flex flex-col items-center gap-6 py-8 text-lg font-medium text-primary-foreground">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.name} className="w-full text-center">
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`block py-3 transition ${
                      isActive
                        ? "text-accent font-semibold"
                        : "hover:text-accent"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}

            {/* Optional CTA */}
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold shadow-md"
            >
              Book Now
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
