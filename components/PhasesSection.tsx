"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhaseCard from "./PhaseCard";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    phase: 1,
    title: "Site Preparation & Foundation",
    description:
      "Land acquisition, site development, and infrastructure planning",
    goal: 1200000,
    raised: 850000,
    isActive: true,
    imageSrc: "/Phase1.jpg",
    details:
      "Secure property, complete environmental assessments, site grading, utility connections, and lay foundation for our state-of-the-art K-9 facility.",
  },
  {
    phase: 2,
    title: "Main Facility Construction",
    description: "Building the core veterinary and rehabilitation center",
    goal: 2500000,
    raised: 450000,
    isActive: true,
    imageSrc: "/Phase2.jpg",
    details:
      "Construct main building with advanced veterinary clinic, surgical suites, rehabilitation pools, kennels, and administrative offices to serve our heroes.",
  },
  {
    phase: 3,
    title: "Training & Exercise Areas",
    description: "Outdoor agility courses and specialized training grounds",
    goal: 1800000,
    raised: 0,
    isActive: false,
    imageSrc: "/Phase3.jpg",
    details:
      "Build professional-grade agility courses, scent detection training areas, obedience fields, and secure exercise yards for active and retired K-9s.",
  },
  {
    phase: 4,
    title: "Rehabilitation & Therapy Center",
    description: "Advanced medical care and physical therapy facilities",
    goal: 1500000,
    raised: 0,
    isActive: false,
    imageSrc: "/Phase4.jpg",
    details:
      "Install underwater treadmills, laser therapy equipment, and specialized rehabilitation tools to help injured and aging K-9 heroes recover and thrive.",
  },
  {
    phase: 5,
    title: "Adoption & Community Center",
    description: "Meet-and-greet spaces and adoption coordination offices",
    goal: 1000000,
    raised: 0,
    isActive: false,
    imageSrc: "/Phase5.jpg",
    details:
      "Create welcoming spaces where retired K-9s can meet potential adopters, plus offices for adoption coordinators and community education programs.",
  },
  {
    phase: 6,
    title: "Memorial Garden & Heritage Museum",
    description: "Honoring the service and sacrifice of our K-9 heroes",
    goal: 670000,
    raised: 0,
    isActive: false,
    imageSrc: "/Phase6.jpg",
    details:
      "Establish a peaceful memorial garden and interactive museum showcasing the history and heroism of working K-9s who served our nation.",
  },
];

export default function PhasesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;

    if (!container || !timeline) return;

    // Calculate total scroll distance
    const scrollDistance = timeline.scrollWidth - window.innerWidth;

    // Create horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        // FIXED: Changed to true to reserve proper space
        pinSpacing: true,
        invalidateOnRefresh: true,
        anticipatePin: 1, // Helps prevent flashing
      },
    });

    tl.to(timeline, {
      x: -scrollDistance,
      ease: "none",
    });

    const scrollTriggerInstance = tl.scrollTrigger;

    return () => {
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
    };
  }, []);

  return (
    <section
      id="phases"
      ref={containerRef}
      className="relative bg-gradient-to-b from-white to-primary-50 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* FIXED: Added proper background to prevent hero video showing through */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary-50 z-0" />

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Header - Fixed at top */}
        <div className="pt-12 pb-8 text-center shrink-0">
          <h2 className="text-5xl font-bold mb-4 text-secondary-500">
            Our Journey
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Follow our multi-phase approach to building a world-class facility
            for our K-9 heroes
          </p>
        </div>

        {/* Horizontal scrolling timeline */}
        <div className="relative flex-1 flex items-center overflow-hidden px-24">
          <div
            ref={timelineRef}
            className="flex gap-8 px-8"
            style={{ width: `${phases.length * 400 + 200}px` }}
          >
            {/* Left spacer */}
            <div className="shrink-0 w-[2vw]" />

            {phases.map((phase) => (
              <div key={phase.phase} className="shrink-0 w-96">
                <PhaseCard {...phase} />
              </div>
            ))}
            {/* Right spacer */}
            <div className="shrink-0 w-[15vw]" />
          </div>
        </div>

        {/* Scroll hint */}
        {/* <div className="text-center pb-8 shrink-0">
          <p className="text-gray-500 text-sm">
            ← Scroll to explore all phases →
          </p>
        </div> */}
      </div>
    </section>
  );
}
