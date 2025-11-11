"use client";

import { useState, useEffect, useRef } from "react";
import { DollarSign } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const cardRef = useRef<HTMLDivElement>(null);
  const percentage = (raised / goal) * 100;

  useEffect(() => {
    // GSAP Parallax Effect - Interaction #2
    // Alternate parallax directions based on phase number
    const yMovement = phase % 2 === 0 ? -20 : 20;

    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: yMovement,
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [phase]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ${
        isActive
          ? "opacity-100 hover:shadow-2xl"
          : "opacity-60 hover:opacity-80"
      }`}
    >
      {/* Image Background */}
      <div className="relative h-80 overflow-hidden bg-gray-800">
        <img
          src={imageSrc}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-400 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div
          className={`absolute inset-0 bg-linear-to-t from-black/80 to-transparent`}
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl font-bold">Phase {phase}</span>
          {!isActive && (
            <span className="text-sm bg-primary-500 text-white px-3 py-1 rounded-full font-semibold">
              Coming Soon
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4 line-clamp-2">{description}</p>

        {isActive && (
          <div className="space-y-2">
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden relative">
              <div
                className="h-full bg-linear-to-r from-primary-500 to-accent-500 transition-all duration-1500 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-1">
                <DollarSign size={16} />${raised.toLocaleString()} raised
              </span>
              <span>${goal.toLocaleString()} goal</span>
            </div>
          </div>
        )}
      </div>

      {/* Hover Overlay - Keep this as it's one of the main interactions */}
      <div
        className={`absolute inset-0 bg-black/90 p-6 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-white text-center">
          <h4 className="text-2xl font-bold mb-4">{title}</h4>
          <p className="text-sm leading-relaxed">
            {details || "More information coming soon..."}
          </p>
          {isActive && (
            <button className="mt-6 px-6 py-3 btn-modern text-white rounded-lg font-semibold">
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
