"use client";

import PhaseCard from "./PhaseCard";
import AnimatedSection from "./AnimatedSection";

const phases = [
  {
    phase: 1,
    title: "Site Preparation & Foundation",
    description: "Laying the groundwork for our K-9 hero facility",
    goal: 1200000,
    raised: 850000,
    isActive: true,
    imageSrc: "/phase1.jpg",
    details:
      "Complete site preparation, grading, utilities installation, and foundation work for the main facility building.",
  },
  {
    phase: 2,
    title: "Main Facility Construction",
    description: "Building the core structure and veterinary center",
    goal: 2500000,
    raised: 450000,
    isActive: true,
    imageSrc: "/phase2.jpg",
    details:
      "Construction of the main building including veterinary clinic, training areas, and administrative offices.",
  },
  {
    phase: 3,
    title: "Training & Exercise Areas",
    description: "Specialized training grounds for our heroes",
    goal: 1800000,
    raised: 0,
    isActive: false,
    imageSrc: "/phase3.jpg",
  },
  {
    phase: 4,
    title: "Rehabilitation Center",
    description: "Advanced care for retired K-9s",
    goal: 1500000,
    raised: 0,
    isActive: false,
    imageSrc: "/phase4.jpg",
  },
  {
    phase: 5,
    title: "Adoption & Community Center",
    description: "Connecting heroes with loving homes",
    goal: 1000000,
    raised: 0,
    isActive: false,
    imageSrc: "/phase5.jpg",
  },
  {
    phase: 6,
    title: "Memorial Garden & Museum",
    description: "Honoring our fallen heroes",
    goal: 670000,
    raised: 0,
    isActive: false,
    imageSrc: "/phase6.jpg",
  },
];

export default function PhasesSection() {
  return (
    <section id="phases" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl font-bold text-center mb-4">Our Journey</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Follow our multi-phase approach to building a world-class facility
            for our K-9 heroes
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <PhaseCard key={phase.phase} {...phase} />
          ))}
        </div>
      </div>
    </section>
  );
}
