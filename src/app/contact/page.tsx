"use client";

import { Phone, Mail, MapPin, Send, Pen, PhoneCall } from "lucide-react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const contactData = { name, email, phone, message };

    setLoading(true);
    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!", { id: toastId });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error("Failed to send message", { id: toastId });
      }
    } catch {
      toast.error("Network error. Try again later.", { id: toastId });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen page-container pt-28 pb-20 px-6 md:px-20">
      {/* Header */}
      <section className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-accent">Us</span>
        </h1>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          Have questions or want to make a reservation? We’re happy to help —
          reach out anytime.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card p-6 flex gap-4 items-start">
            <Phone className="text-accent w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-muted">+91 75175 12640 / +91 93701 19683</p>
            </div>
          </div>

          <div className="card p-6 flex gap-4 items-start">
            <Mail className="text-accent w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-muted">
                courtyardvalleyvilla@gmail.com
              </p>
            </div>
          </div>

          <div className="card p-6 flex gap-4 items-start">
            <MapPin className="text-accent w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-muted">
                Courtyard Valley Villa, Panchgani–Mahabaleshwar Road,
                Bhilar, Panchgani
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />

            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email
              </label>
               <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-background px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Mobile Number
              </label>
               <div className="relative">
              <PhoneCall className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-border bg-background px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Message
              </label>
              <div className="relative">
              <Pen className="absolute left-3 top-1/8 -translate-y-1/8 text-muted-foreground" size={18} />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Write your message"
                className="w-full rounded-xl border border-border bg-background px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              </div>
            </div>

           <button
              type="submit"
              disabled={loading}
              className={`
                w-full
                flex items-center justify-center gap-2
                py-3 rounded-full
                font-semibold text-lg
                transition-all duration-200
                ${
                  loading
                    ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                    : "bg-[#F4C15D] text-[#0A1A2F] hover:bg-[#d9a645] active:scale-[0.98]"
                }
              `}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}
