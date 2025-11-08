"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  k9Name?: string;
}

export default function TestimonialCard({
  name,
  role,
  image,
  quote,
  k9Name,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-xl p-8 relative"
    >
      <Quote className="absolute top-4 right-4 text-primary-200" size={48} />

      <div className="flex items-start gap-4 mb-6">
        <div className="relative w-16 h-16 shrink-0 bg-primary-100 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover ring-4 ring-primary-100"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement!.innerHTML =
                '<span class="text-2xl">👤</span>';
            }}
          />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          {k9Name && (
            <span className="inline-block mt-1 text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full font-semibold">
              K-9: {k9Name}
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed italic">
        &quot;{quote}&quot;
      </p>
    </motion.div>
  );
}
