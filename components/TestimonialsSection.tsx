"use client";

import TestimonialCard from "./TestimonialCard";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Officer Mike Johnson",
    role: "K-9 Handler",
    image: "/testimonial1.jpg",
    k9Name: "Rex",
    quote:
      "Project K9 Hero saved Rex from euthanasia and gave him the retirement he deserved. Their dedication to our four-legged partners is unmatched.",
  },
  {
    name: "Sarah Mitchell",
    role: "Adopter",
    image: "/testimonial2.jpg",
    k9Name: "Bruno",
    quote:
      "Adopting Bruno through PK9H was the best decision of my life. He served his country with honor, and now we get to give him the peaceful life he earned.",
  },
  {
    name: "Sergeant David Chen",
    role: "Retired K-9 Handler",
    image: "/testimonial3.jpg",
    k9Name: "Luna",
    quote:
      "The medical care and support PK9H provided for Luna when she needed it most was incredible. They truly understand the bond between handler and K-9.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="stories" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl font-bold text-center mb-4">Hero Stories</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Real stories from handlers, adopters, and the K-9 heroes we&apos;ve
            helped
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
