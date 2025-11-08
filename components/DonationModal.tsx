"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Wallet } from "lucide-react";
import { useState } from "react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = [50, 100, 250, 500, 1000, 5000];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-2xl z-50 p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold mb-2">Make a Donation</h2>
            <p className="text-gray-600 mb-6">
              Your generosity helps us save more K-9 heroes
            </p>

            {/* Preset Amounts */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setAmount(preset.toString())}
                  className={`py-3 rounded-lg font-semibold transition-all ${
                    amount === preset.toString()
                      ? "btn-modern text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  ${preset}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount("");
                  }}
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Donation Options */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-3 py-3 btn-modern text-white rounded-lg font-semibold">
                <CreditCard size={20} />
                Donate with Card
              </button>
              <button className="w-full flex items-center justify-center gap-3 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                <Wallet size={20} />
                Other Payment Methods
              </button>
            </div>

            <p className="text-xs text-center text-gray-500">
              90¢ of every dollar goes directly to supporting our K-9 heroes
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
