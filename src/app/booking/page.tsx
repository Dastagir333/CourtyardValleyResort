"use client";

import { useState } from "react";
import { Calendar, Users, Phone, Mail } from "lucide-react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useRef } from "react";


export default function BookingPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);



  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    const toastId = toast.loading("Sending booking request...");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          checkIn,
          checkOut,
          guests,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Booking request sent!", { id: toastId });
        setName("");
        setPhone("");
        setEmail("");
        setCheckIn("");
        setCheckOut("");
        setGuests(1);
      } else {
        toast.error("Failed to send booking request", { id: toastId });
      }
    } catch {
      toast.error("Network error. Try again later.", { id: toastId });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-28 pb-16 px-4 sm:px-6">
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Book Your <span className="text-accent">Stay</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Share your travel details and our team will contact you shortly.
        </p>
      </section>

      {/* FORM CARD */}
      <section className="max-w-2xl mx-auto bg-card rounded-2xl p-6 sm:p-8 shadow">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* CHECK-IN */}
          <div>
            <label className="block mb-2 text-sm font-medium">Check-In</label>
            <div className="relative cursor-pointer"
              onClick={() => {
                checkInRef.current?.focus();
                checkInRef.current?.showPicker?.();
              }}>
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="DD-MM-YYYY"
                className="w-full cursor-pointer rounded-xl border border-border bg-background px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
          </div>

          {/* CHECK-OUT */}
          <div>
            <label className="block mb-2 text-sm font-medium">Check-Out</label>
            <div className="relative cursor-pointer"
              onClick={() => {
                checkOutRef.current?.focus();
                checkOutRef.current?.showPicker?.();
              }}>
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                placeholder="DD-MM-YYYY"
                className="w-full cursor-pointer rounded-xl border border-border bg-background px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
          </div>

          {/* GUESTS */}
          <div>
            <label className="block mb-2 text-sm font-medium">Guests</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full rounded-xl border border-border bg-background px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
          </div>

          

          {/* NAME */}
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your Name"
              required
            />
          </div>

          {/* PHONE */}
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium">Contact Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="+91 98765 43210"
                required
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="sm:col-span-2 mt-2 rounded-full bg-accent py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" size={18} />
                Sending...
              </span>
            ) : (
              "Submit Booking Request"
            )}
          </button>

        </form>
      </section>
    </main>
  );
}
