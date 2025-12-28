"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "917517512640"; // your WhatsApp number
  const message = encodeURIComponent(
    "Hi, I would like to book a room. Please share availability and pricing."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-2
        rounded-full px-4 py-3
        bg-[#25D366] text-white
        shadow-lg
        hover:scale-105 hover:shadow-xl
        transition-all duration-300
      "
    >
      <MessageCircle size={20} />
      <span className="font-medium">
      {/* <span className="inline sm:hidden">Book</span> */}
      <span className="inline sm:inline">Book on WhatsApp</span>
    </span>
    </a>
  );
}
