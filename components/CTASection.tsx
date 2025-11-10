"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gift } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-linear-to-r from-primary-500 to-primary-600">
      <div className="max-w-5xl mx-auto text-center text-secondary-500">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Gift size={64} className="mx-auto mb-6 text-secondary-500" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-500">
            Other Ways to Give
          </h2>
          <p className="text-xl mb-8 opacity-90 text-secondary-500">
            Support our mission through planned giving, legacy gifts, and more
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-secondary-500 text-white rounded-lg font-bold text-lg hover:bg-secondary-600 transition-colors flex items-center justify-center gap-2"
            >
              Planned Giving
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-secondary-500 text-secondary-500 rounded-lg font-bold text-lg hover:bg-secondary-500/10 transition-colors"
            >
              Donate a Brick
            </motion.button>
          </div>

          <p className="mt-8 text-sm opacity-80 text-secondary-500">
            Every contribution, no matter the size, helps us save more K-9
            heroes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
