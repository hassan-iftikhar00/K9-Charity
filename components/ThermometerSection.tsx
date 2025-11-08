"use client";

import DonationThermometer from "./DonationThermometer";
import AnimatedSection from "./AnimatedSection";

export default function ThermometerSection() {
  const totalGoal = 8670000;
  const totalRaised = 1300000;

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-5xl font-bold mb-4">Campaign Progress</h2>
          <p className="text-xl text-gray-600 mb-12">
            Help us reach our goal and build a legacy for our K-9 heroes
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <DonationThermometer goal={totalGoal} raised={totalRaised} />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                847
              </div>
              <p className="text-gray-600">K-9s Saved from Euthanasia</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                90¢
              </div>
              <p className="text-gray-600">Of Every Dollar Goes to K-9s</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                $2.3M+
              </div>
              <p className="text-gray-600">Long-term Savings from Facility</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
