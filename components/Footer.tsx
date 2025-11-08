"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Project K9 Hero</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to providing veterinary care, financial assistance, and
              support for retired working K-9s across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                info@projectk9hero.org
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                123 Hero Lane, K9 City, ST 12345
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Charity Badges */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2">Accredited by:</p>
              <div className="flex gap-2">
                <img
                  src="/charity-navigator.png"
                  alt="Charity Navigator"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <img
                  src="/candid.png"
                  alt="Candid"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            © 2024 Project K9 Hero. All rights reserved. | 501(c)(3) Non-Profit
            Organization
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
          <div className="mt-4 text-xs text-gray-600 opacity-50 hover:opacity-100 transition-opacity">
            Designed & Developed with ❤️ by{" "}
            <span className="text-gray-500">
              <Link
                href="https://hassaniftikhar.vercel.app/"
                className="text-gray-500"
              >
                Hassan Iftikhar
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
