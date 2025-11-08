"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-6"
        >
          Building a Legacy for Our K-9 Heroes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-center mb-8 max-w-3xl"
        >
          Our $8.67M multi-phase facility plan is underway — see where we are
          and how you can help
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <DonateButton amount={10000} />
          <DonateButton amount={5000} />
          <DonateButton amount={1000} />
          <DonateButton amount={500} />
          <DonateButton amount={250} />
          <DonateButton amount="Other" />
        </motion.div>

        <motion.a
          href="#phases"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 animate-bounce"
        >
          <ArrowDown size={40} />
        </motion.a>
      </div>
    </section>
  );
}

function DonateButton({ amount }: { amount: number | string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 btn-modern text-white rounded-lg font-semibold text-lg"
    >
      {typeof amount === "number" ? `$${amount.toLocaleString()}` : amount}
    </motion.button>
  );
}
