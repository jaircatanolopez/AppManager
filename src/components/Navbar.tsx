/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Menu, X, Phone, ShieldCheck, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0f2745] text-white border-b border-slate-800 shadow-md">
      {/* Top micro-bar for serious enterprise touch */}
      <div className="bg-[#183a63] text-slate-300 text-xs py-1 px-4 sm:px-8 flex justify-between items-center border-b border-slate-700/50">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00b67a]" />
            <span>Soporte e Ingeniería IT certificada en Colombia</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="mailto:appmanagercolombia@outlook.com" className="hover:text-[#00b67a] flex items-center space-x-1 transition-colors">
            <Mail className="w-3 h-3" />
            <span>appmanagercolombia@outlook.com</span>
          </a>
          <a href="https://wa.me/573003939349" target="_blank" rel="noreferrer" className="hover:text-[#00b67a] flex items-center space-x-1 transition-colors">
            <Phone className="w-3 h-3" />
            <span>+57 300 393 9349</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <a href="#inicio" className="block focus:outline-none">
          <Logo size="md" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-[#00b67a] tracking-wide transition-colors duration-200 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00b67a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={onOpenConsultation}
            className="bg-[#00b67a] hover:bg-[#009e69] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-lg hover:shadow-emerald-900/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Solicitar Auditoría
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-[#00b67a] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#183a63] border-t border-slate-700 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-[#0f2745] hover:text-[#00b67a] transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-700">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full text-center bg-[#00b67a] hover:bg-[#009e69] text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all block text-sm"
                >
                  Solicitar Auditoría Gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
