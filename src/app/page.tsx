"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle } from "lucide-react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col bg-background text-foreground">

      {/* HERO */}
      <section
        className="relative h-[85vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ValleyView.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
          <div className="text-center max-w-3xl">

            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white"
            >
              Welcome to <br />
              <span className="text-accent">Courtyard Valley Resort</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-sm sm:text-base md:text-xl text-gray-200"
            >
              A luxury 4-BHK valley-view villa offering comfort, privacy,
              and breathtaking scenery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <Button
                size="lg"
                className="
                  px-10 py-6
                  rounded-full
                  bg-accent
                  text-accent-foreground
                  font-semibold
                  shadow-lg
                  transition-all duration-300

                  hover:bg-accent-soft
                  hover:text-accent-foreground
                  hover:scale-[1.10]

                  active:scale-[0.98]
                  focus-visible:ring-2
                  focus-visible:ring-accent
                  focus-visible:ring-offset-2
                "
              >
                <Link href="/booking" className="flex items-center gap-2">
                  Book Your Stay <ChevronRight />
                </Link>
              </Button>


            </motion.div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 md:py-20 px-4 md:px-20 bg-secondary">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Choose <span className="text-accent">Courtyard Valley?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Exclusive Full Villa",
              desc: "Entire 4-BHK villa for complete privacy.",
            },
            {
              title: "Luxury Interiors",
              desc: "Premium furnishings & spacious living.",
            },
            {
              title: "Scenic Valley Views",
              desc: "Peaceful mornings & stunning sunsets.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-6 md:p-8 text-center shadow-md"
            >
              <CheckCircle className="mx-auto text-accent w-10 h-10 mb-3" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 md:py-20 px-4 md:px-20 bg-background">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          A Glimpse of <span className="text-accent">Our Villa</span>
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {["1.jpg","5.jpg","6.jpg","8.jpg", "12.jpg", "21.jpg"].map(
            (img) => (
              <SwiperSlide key={img}>
                <img
                  src={`/images/${img}`}
                  className="w-full h-72 md:h-64 rounded-xl object-cover shadow-md"
                  alt="Villa"
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center bg-card px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Ready for a Memorable Stay?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
          Book the entire villa and enjoy a peaceful luxury getaway.
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
          "
        >
          <Link href="/booking">Check Availability</Link>
        </Button>

      </section>

    </main>
  );
}
