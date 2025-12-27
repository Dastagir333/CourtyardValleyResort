"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const images = [
  "dji_0344.jpg",
  "DJI_0341.jpg",
  "Dji_0348.jpg",
  "1.jpg",
  "2.jpg",
  "4.jpg",
  "Room1-L.jpeg",
  "Room2-L.jpeg",
  "Room3-L.jpeg",
  "Room4-L.jpeg",
  "ValleyView.jpeg",
  "Room4-L2.jpeg",
  "valleyView-zoomed.jpeg",
  "Room2-L.jpeg",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-background text-foreground min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[40vh] md:h-[45vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ValleyView.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-white">
              Villa <span className="text-accent">Gallery</span>
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base">
              Explore the spaces, views, and details that make Courtyard Valley a
              perfect private getaway.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={`/images/${img}`}
                alt="Courtyard Valley Villa"
                width={600}
                height={400}
                className="w-full h-[240px] sm:h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay (Desktop) */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-accent font-semibold tracking-wide">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

     {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* CLOSE BUTTON (FIXED & ALWAYS VISIBLE) */}
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed top-4 right-4 z-50 rounded-full bg-black/70 p-2 text-white hover:bg-black/90 transition"
              aria-label="Close image"
            >
              <X size={26} />
            </button>

            {/* IMAGE CONTAINER */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/${selectedImage}`}
                alt="Expanded Villa View"
                width={1400}
                height={900}
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-14 text-center">
        <div className="bg-card rounded-2xl p-8 shadow">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Experience Courtyard Valley in Person
          </h2>
          <p className="text-muted-foreground mb-6">
            Book the entire villa and enjoy privacy, luxury and breathtaking views.
          </p>
          <Button size="lg">Book Your Stay</Button>
        </div>
      </section>

    </main>
  );
}
