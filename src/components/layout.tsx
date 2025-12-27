// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       {/* <nav className="bg-white shadow-md fixed w-full z-50"> */}
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <Link href="/">
//             <h1 className="text-xl font-bold">SkyVille Resort</h1>
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden md:flex gap-6">
//             <Link href="/rooms">Rooms</Link>
//             <Link href="/booking">Booking</Link>
//             <Link href="/contact">Contact</Link>
//             <Button size="sm">Book Now</Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4"
//             >
//               <Link href="/rooms" onClick={() => setMenuOpen(false)}>
//                 Rooms
//               </Link>
//               <Link href="/booking" onClick={() => setMenuOpen(false)}>
//                 Booking
//               </Link>
//               <Link href="/contact" onClick={() => setMenuOpen(false)}>
//                 Contact
//               </Link>
//               <Button size="sm">Book Now</Button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Page Content */}
//       <main className="flex-1 pt-24">{children}</main>
//     </div>
//   );
// }
