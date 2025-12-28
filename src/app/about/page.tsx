"use client";

import { motion } from "framer-motion";
import {
  Bed,
  MapPin,
  Wifi,
  Users,
  Coffee,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

export default function AboutPage() {

const reviews = [
  {
    text: "The villa is absolutely stunning with breathtaking valley views. Clean rooms, peaceful atmosphere, and very courteous staff. Perfect place to unwind.",
    author: "Amit R.",
    tag: "Family Stay"
  },
  {
    text: "We stayed here for a weekend with friends and loved every moment. Spacious rooms, beautiful sunset views, and great hospitality throughout our stay.",
    author: "Sneha P.",
    tag: "Group Stay"
  },
  {
    text: "Courtyard Valley Resort exceeded our expectations. The location is serene, rooms are well-maintained, and the overall experience was very relaxing.",
    author: "Rahul K.",
    tag: "Weekend Getaway"
  },
  {
    text: "A perfect blend of luxury and nature. The valley-facing view is mesmerizing, especially in the evening. Highly recommended for families.",
    author: "Neha S.",
    tag: "Verified Stay"
  },
  {
    text: "One of the best places to stay near Panchgani. Calm surroundings, premium interiors, and prompt service. Would definitely visit again.",
    author: "Vikas M.",
    tag: "Couple Stay"
  }
];


  return (
    <main className="bg-background text-foreground">

      {/* HERO */}
      <section
        className="relative h-[45vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ValleyView.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-extrabold text-white"
            >
              Welcome to Courtyard Valley Resort
            </motion.h1>
            <p className="mt-3 max-w-2xl text-gray-200 text-sm md:text-base">
              A private 4-BHK villa offering calm, comfort and breathtaking valley
              views — perfect for families and intimate gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT + QUICK FACTS */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* About */}
        <div className="lg:col-span-2 bg-card rounded-2xl p-6 md:p-8 shadow">
          <h2 className="text-2xl font-bold mb-4 text-accent">
            About Courtyard Valley Villa
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Courtyard Valley is a thoughtfully designed 4-BHK villa nestled in
            the valley, created to give you privacy, comfort and a strong
            connection with nature. Perfect for relaxed getaways and
            celebrations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-accent">What you get</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Entire 4-BHK villa</li>
                <li>• Spacious living & dining</li>
                <li>• Fully equipped kitchen</li>
                <li>• Private valley-view balconies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent">
                Safety & Comfort
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Professional housekeeping</li>
                <li>• Secure parking & caretaker</li>
                <li>• CCTV (outdoor areas)</li>
                <li>• High-speed Wi-Fi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <aside className="bg-card rounded-2xl p-6 shadow space-y-4">
          <h4 className="text-lg font-bold text-accent">Quick Facts</h4>

          {[
            { icon: Bed, title: "4 Luxury Bedrooms", desc: "Ensuite & plush bedding" },
            { icon: MapPin, title: "Valley Location", desc: "Peaceful & scenic views" },
            { icon: Wifi, title: "High-speed Wi-Fi", desc: "Work or stream easily" },
            { icon: Users, title: "Groups & Families", desc: "Ideal for getaways" },
            { icon: Coffee, title: "Equipped Kitchen", desc: "All essentials provided" },
            { icon: Star, title: "Highly Rated", desc: "Consistent 5★ care" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-3 items-start">
              <span className="p-2 rounded-lg bg-accent/10 text-accent-soft">
                <Icon size={18} />
              </span>
              <div>
                <div className="font-semibold text-sm">{title}</div>
                <div className="text-xs text-muted-foreground">{desc}</div>
              </div>
            </div>
          ))}
        </aside>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-accent mb-6">
          Why Choose Courtyard Valley?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            "Privacy & Exclusivity",
            "Family Friendly Spaces",
            "Scenic Valley Views",
          ].map((title) => (
            <div key={title} className="bg-card p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground">
                Designed for comfort, safety and memorable stays.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GUEST REVIEWS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
  <h3 className="text-2xl font-bold text-accent text-center mb-8">
    What Our Guests Say
  </h3>

  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    autoplay={{ delay: 4000 }}
    pagination={{ clickable: true }}
    navigation
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="review-swiper"
  >
    {reviews.map((review, index) => (
      <SwiperSlide key={index}>
        <div className="h-full">
          <div className="bg-card border border-border rounded-xl p-6 shadow
                          h-[220px] flex flex-col justify-between">
            
            {/* Review text */}
            <p className="text-muted-foreground text-sm leading-relaxed">
              “{review.text}”
            </p>

            {/* Author */}
            <div className="pt-4">
              <div className="font-semibold text-accent">
                — {review.author}
              </div>
              <div className="text-xs text-muted-foreground">
                {review.tag}
              </div>
            </div>

          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>



      {/* LOCATION */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-accent mb-6">
          Location & Directions
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map + Description */}
          <div className="lg:col-span-2 bg-card rounded-2xl p-6 shadow">
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Located in the peaceful hills near Panchgani, Courtyard Valley Resort
              offers a calm retreat away from city noise. The villa is easily
              accessible by road and surrounded by scenic viewpoints, waterfalls,
              and nature trails.
            </p>

            <div className="w-full h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border">
              <iframe 
              title="Courtyard Valley Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.254842395567!2d73.7647693749478!3d17.920263883060578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc269f71d2cad3d%3A0xc0493c6371c1f680!2sSkyville%20Resort!5e0!3m2!1sen!2sin!4v1766514339601!5m2!1sen!2sin" 
              className="w-full h-full border-0" 
              loading="lazy" 
              />
            </div>
          </div>

          {/* Contact Card */}
          <aside className="bg-card rounded-2xl p-6 shadow">
            <h4 className="font-semibold text-accent mb-4">
              Contact & Access
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span>📍</span>
                <span>Panchgani, Maharashtra</span>
              </li>
              <li className="flex gap-2">
                <span>🚗</span>
                <span>Approx. 2.5 hrs drive from Pune</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <span>+91 75175 12640 / +91 93701 19683</span>
              </li>
              <li className="flex gap-2">
                <span>✉</span>
                <span>courtyardvalley@gmail.com</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>



      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-14 text-center">
        <div className="bg-card rounded-2xl p-8 shadow">
          <h3 className="text-2xl font-bold mb-3">
            Ready to experience Courtyard Valley?
          </h3>
          <p className="text-muted-foreground mb-6">
            Book the entire villa for your next getaway.
          </p>
          <Button
          size="lg"
          className="
            px-8 py-5
            rounded-full
            bg-accent/90
            text-accent-foreground
            font-semibold
            shadow-md
            transition-all

            hover:bg-accent
            active:scale-[0.98]
            hover:scale-[1.05]
          "
        >
          <Link href="/booking">Book a Stay</Link>
        </Button>
        </div>
      </section>

    </main>
  );
}
