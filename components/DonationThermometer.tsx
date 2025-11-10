"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

interface ThermometerProps {
  goal: number;
  raised: number;
}

export default function DonationThermometer({
  goal,
  raised,
}: ThermometerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const percentage = (raised / goal) * 100;

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative h-64 w-20 mx-auto bg-gray-200 rounded-full overflow-hidden">
        {/* Main liquid fill */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isVisible ? `${percentage}%` : 0 }}
          transition={{
            duration: 2.5,
            ease: [0.43, 0.13, 0.23, 0.96],
            type: "tween",
          }}
          className="absolute bottom-0 w-full bg-linear-to-t from-primary-600 to-primary-400"
        >
          {/* Liquid wave effect on top - SVG waves */}
          <div
            className="absolute top-0 left-0 w-[200%] h-12 overflow-visible"
            style={{
              animation: "liquid-wave 4s linear infinite",
              transform: "translateY(-50%)",
            }}
          >
            <svg
              viewBox="0 0 2400 60"
              preserveAspectRatio="none"
              className="w-full h-full"
              style={{ display: "block" }}
            >
              <path
                d="M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30 T1500,30 T1800,30 T2100,30 T2400,30 V60 H0 Z"
                fill="#C8B494"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Second wave for depth */}
          <div
            className="absolute top-0 left-0 w-[200%] h-10 overflow-visible"
            style={{
              animation: "liquid-wave 3s linear infinite",
              animationDelay: "-1.5s",
              transform: "translateY(-40%)",
            }}
          >
            <svg
              viewBox="0 0 2400 60"
              preserveAspectRatio="none"
              className="w-full h-full"
              style={{ display: "block" }}
            >
              <path
                d="M0,35 Q100,20 200,35 T400,35 T600,35 T800,35 T1000,35 T1200,35 T1400,35 T1600,35 T1800,35 T2000,35 T2200,35 T2400,35 V60 H0 Z"
                fill="#B69968"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Bubbles effect */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                bottom: "10%",
                animation: `bubble-rise ${3 + i * 0.5}s ease-in infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}
        </motion.div>

        {/* Animated dog icon - Video/GIF */}
        <motion.div
          initial={{ bottom: 0 }}
          animate={{ bottom: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2 w-16 h-16 z-10 filter drop-shadow-lg"
        >
          <img
            src="/Dog-unscreen.gif"
            alt="Running dog"
            className="w-full h-full object-contain "
          />
        </motion.div>
      </div>

      <div className="mt-4 text-center">
        <div className="text-3xl font-bold text-primary-600">
          $<CountUp end={raised} duration={2} separator="," />
        </div>
        <div className="text-sm text-gray-600">
          of ${goal.toLocaleString()} goal
        </div>
        <div className="text-lg font-semibold mt-2">
          {percentage.toFixed(1)}% Complete
        </div>
      </div>
    </div>
  );
}
