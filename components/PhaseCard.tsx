"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { DollarSign } from "lucide-react";

interface PhaseCardProps {
  phase: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
  isActive: boolean;
  imageSrc: string;
  details?: string;
}

export default function PhaseCard({
  phase,
  title,
  description,
  goal,
  raised,
  isActive,
  imageSrc,
  details,
}: PhaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const percentage = (raised / goal) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      onViewportEnter={() => setHasAnimated(true)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
        isActive
          ? "opacity-100 hover:shadow-2xl"
          : "opacity-60 hover:opacity-80"
      }`}
    >
      {/* Image Background */}
      <div className="relative h-80 overflow-hidden bg-gray-800">
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div
          className={`absolute inset-0 bg-linear-to-t from-black/80 to-transparent`}
        />

        {/* Animated border glow */}
        {isActive && (
          <motion.div
            className="absolute inset-0 border-2 border-primary-500"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <motion.div
          className="flex items-center gap-2 mb-2"
          animate={hasAnimated ? { x: [0, 5, 0] } : {}}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <span className="text-3xl font-bold">Phase {phase}</span>
          {!isActive && (
            <motion.span
              className="text-sm bg-yellow-500 px-3 py-1 rounded-full"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Coming Soon
            </motion.span>
          )}
        </motion.div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4 line-clamp-2">{description}</p>

        {isActive && (
          <div className="space-y-2">
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full relative"
                style={{
                  background: "linear-gradient(to right, #0ea5e9, #f59e0b)",
                }}
              >
                {/* Shimmer effect on progress bar */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["200% 0", "-200% 0"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>

            <motion.div
              className="flex justify-between text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="flex items-center gap-1">
                <DollarSign size={16} />${raised.toLocaleString()} raised
              </span>
              <span>${goal.toLocaleString()} goal</span>
            </motion.div>
          </div>
        )}
      </div>

      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/90 p-6 flex items-center justify-center backdrop-blur-sm"
      >
        <motion.div
          className="text-white text-center"
          initial={{ scale: 0.9, y: 20 }}
          animate={isHovered ? { scale: 1, y: 0 } : { scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-2xl font-bold mb-4">{title}</h4>
          <p className="text-sm leading-relaxed">
            {details || "More information coming soon..."}
          </p>
          {isActive && (
            <motion.button
              className="mt-6 px-6 py-3 btn-modern text-white rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
