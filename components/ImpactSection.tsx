"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useState } from "react";
import { Heart, Shield, Home, Award } from "lucide-react";
import type { ComponentType } from "react";

const stats = [
  { icon: Heart, label: "K-9s Saved", value: 847, prefix: "" },
  { icon: Shield, label: "Active Heroes", value: 312, prefix: "" },
  { icon: Home, label: "Successful Adoptions", value: 523, prefix: "" },
  { icon: Award, label: "Cents to K-9s", value: 90, prefix: "", suffix: "¢" },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="py-20 px-4 bg-linear-to-br from-secondary-500 to-secondary-600 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Every dollar you donate makes a real difference in the lives of our
            K-9 heroes
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-primary-500/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-primary-500/30 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <Award size={64} className="text-primary-500" />
            </motion.div>
            <div className="text-left text-white">
              <h3 className="text-2xl font-bold mb-2 text-white">
                Charity Navigator 4-Star Rating
              </h3>
              <p className="text-sm opacity-90 text-white">
                Highest level of transparency and accountability
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
type StatCardProps = {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
};

function StatCard({
  icon: Icon,
  label,
  value,
  prefix = "",
  suffix = "",
  delay,
}: StatCardProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      onViewportEnter={() => setHasAnimated(true)}
      whileHover={{
        scale: 1.1,
        rotate: [0, -2, 2, 0],
        transition: { duration: 0.3 },
      }}
      className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer relative overflow-hidden group"
    >
      {/* Animated background pulse */}
      <motion.div
        className="absolute inset-0 bg-white/5 rounded-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      {/* Icon with floating animation */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Icon size={48} className="mx-auto mb-4 opacity-80 relative z-10" />
      </motion.div>

      <div className="text-4xl md:text-5xl font-bold mb-2 relative z-10">
        {prefix}
        {hasAnimated && <CountUp end={value} duration={2.5} />}
        {suffix}
      </div>
      <p className="text-lg opacity-90 relative z-10">{label}</p>

      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
}
