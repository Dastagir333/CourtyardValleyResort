"use client";

import Image from "next/image";
import { BedDouble, Bath, Wifi, Coffee } from "lucide-react";

export default function RoomsPage() {
  const rooms = [
    {
      title: "Deluxe Suite",
      description:
        "A spacious suite designed for comfort and elegance, featuring stunning interiors and premium amenities.",
      image: "/images/Room1-L.jpeg",
      price: "₹4,999 / Night",
      amenities: [BedDouble, Bath, Wifi],
    },
    {
      title: "Luxury Villa Room",
      description:
        "Perfect for families and couples, this villa room offers privacy, modern furnishings, and a serene ambience.",
      image: "/images/Room2-L.jpeg",
      price: "₹6,499 / Night",
      amenities: [BedDouble, Bath, Wifi, Coffee],
    },
    {
      title: "Premium Garden View Room",
      description:
        "Wake up to beautiful greenery with a cozy room offering warmth, comfort, and style.",
      image: "/images/Room3-L.jpeg",
      price: "₹5,299 / Night",
      amenities: [BedDouble, Wifi, Coffee],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1A2F] text-white pt-32 pb-20 px-6 md:px-20">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-[#F4C15D]">Rooms</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Experience premium comfort wrapped in luxury. Each room is designed
          to offer an unforgettable stay filled with elegance and relaxation.
        </p>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-[#102238] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={room.image}
              alt={room.title}
              width={500}
              height={350}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-[#F4C15D]">
                {room.title}
              </h2>
              <p className="text-gray-300 text-sm">{room.description}</p>

              {/* Amenities */}
              <div className="flex space-x-4 mt-3">
                {room.amenities.map((AmenityIcon, idx) => (
                  <AmenityIcon
                    key={idx}
                    className="text-[#F4C15D] w-6 h-6"
                  />
                ))}
              </div>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-6">
                <p className="text-lg font-semibold">{room.price}</p>
                <button className="bg-[#F4C15D] text-[#0A1A2F] px-4 py-2 rounded-lg font-medium hover:bg-[#d9a645] transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
