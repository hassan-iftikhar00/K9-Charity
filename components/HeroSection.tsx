"use client";

import { motion } from "framer-motion";
import { ArrowDown, Megaphone, Volume2, VolumeX } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createPortal } from "react-dom";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted in timeout to avoid cascading renders
    const timeoutId = setTimeout(() => setIsMounted(true), 0);

    // Set up user interaction listeners to enable sound
    const enableSoundOnInteraction = () => {
      if (videoRef.current && isMuted) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
        setIsMuted(false);
        setShowUnmutePrompt(false);
        console.log("🔊 Sound enabled via user interaction!");
      }
    };

    // Listen for any user interaction to enable sound
    const events = ["click", "touchstart", "keydown", "scroll"];
    events.forEach((event) => {
      document.addEventListener(event, enableSoundOnInteraction, {
        once: true,
      });
    });

    // Simple, fast scroll animation without smooth scroll libraries
    const ctx = gsap.context(() => {
      const section = containerRef.current;
      const content = contentRef.current;

      if (!section || !content) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1, // Direct 1:1 scroll mapping for instant response
            pin: true,
            invalidateOnRefresh: true,
          },
        })
        .fromTo(
          content,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, ease: "none" }
        );
    });

    return () => {
      ctx.revert();
      clearTimeout(timeoutId);
      // Clean up event listeners
      events.forEach((event) => {
        document.removeEventListener(event, enableSoundOnInteraction);
      });
    };
  }, [isMuted]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setShowUnmutePrompt(false);
    }
  };

  const videoBackground = isMounted
    ? createPortal(
        <div className="fixed inset-0 -z-10">
          <Image
            src="/Dog-unscreen.gif"
            alt="K9 Hero Background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>,
        document.body
      )
    : null;

  return (
    <>
      {videoBackground}

      <section
        ref={containerRef}
        className="relative h-screen flex items-center justify-center text-center text-white"
      >
        <div ref={contentRef}>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
            Building a Legacy for Our K-9 Heroes
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Our $8.67M multi-phase facility plan is underway — see where we are
            and how you can help
          </p>

          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto mb-8">
            <DonateButton amount={10000} />
            <DonateButton amount={5000} />
            <DonateButton amount={1000} />
            <DonateButton amount={500} />
            <DonateButton amount={250} />
            <DonateButton amount="Custom Amount" />
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center"
          >
            <ArrowDown size={32} className="text-white drop-shadow-lg" />
          </motion.div>
        </div>

        <button
          onClick={toggleMute}
          className="fixed top-6 right-6 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm z-50"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}

          {showUnmutePrompt && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-none text-white px-4 py-2 rounded-lg text-sm font-medium shadow-xl border-2 border-primary-400 flex items-center gap-2"
            >
              <Megaphone size={18} className="inline-block" />
              {isMuted ? "Click to unmute!" : "Click to mute sound"}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-primary-600" />
            </motion.div>
          )}
        </button>
      </section>
    </>
  );
}

function DonateButton({ amount }: { amount: number | string }) {
  return (
    <button className="px-6 md:px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 border border-primary-500/50 hover:-translate-y-0.5 active:translate-y-0">
      {typeof amount === "number" ? `$${amount.toLocaleString()}` : amount}
    </button>
  );
}
