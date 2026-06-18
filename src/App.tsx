/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./components/Logo";

export default function App() {
  const [chatPrompt, setChatPrompt] = useState<string>("");

  const handleConsultationTrigger = () => {
    // Focus or scroll to the Contact section
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceSelectedInChat = (keyword: string) => {
    setChatPrompt(`Disculpe, me gustaría recibir asesoría y cotizar el servicio relacionado a: ${keyword}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-800 antialiased flex flex-col justify-between">
      {/* Structural Header Navigation */}
      <Navbar onOpenConsultation={handleConsultationTrigger} />

      {/* Main Sections flow */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero
          onQuoteClick={handleConsultationTrigger}
          onServicesClick={() => {
            const servicesSec = document.getElementById("servicios");
            if (servicesSec) {
              servicesSec.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />

        {/* Nosotros (Who We Are) */}
        <About />

        {/* Servicios (Interactive Portfolio) */}
        <Services onServiceSelect={handleServiceSelectedInChat} />

        {/* Why Choose Us (Indicators & Value Prompts) */}
        <WhyChooseUs />

        {/* Clientes nos Respaldan (Real Testimonials) */}
        <Clients />

        {/* Cotizar y Enlace (Contact and Map) */}
        <Contact />

      </main>

      {/* Corporate Serious Footer */}
      <footer className="bg-[#0f2745] text-slate-300 border-t border-slate-900 py-16 px-4 sm:px-6 lg:px-8 select-none relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand block */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Empresa líder en desarrollo de software, auditoría de redes, cableado estructurado certificado, videovigilancia CCTV y soporte IT especializado para negocios y hogares en Bogotá y Colombia.
            </p>
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/20 text-[#00b67a] text-[10px] uppercase font-bold px-2.5 py-1 rounded font-mono">
                <ShieldCheck className="w-3 h-3" />
                <span>Ingeniería 24/7</span>
              </span>
            </div>
          </div>

          {/* Location details */}
          <div className="md:col-span-5">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-5">
              Ubicación y Área de Coberturas
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#00b67a] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs text-slate-200">Sede Administrativa</h5>
                  <p className="text-slate-400 text-xs sm:text-sm">Bogotá D.C., Colombia (Presencial en Bogotá y Sabana de Bogotá)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-4 h-4 text-[#00b67a] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs text-slate-200">Clientes Cobertura Remota</h5>
                  <p className="text-slate-400 text-xs sm:text-sm">Soporte remoto y despliegue a nivel nacional (Medellín, Cali, Barranquilla) e Internacional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fast channels link list */}
          <div className="md:col-span-3">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider mb-5">
              Enlaces de Contacto
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00b67a] shrink-0" />
                <a href="https://wa.me/573003939349" className="hover:text-white font-semibold transition-colors">+57 300 393 9349</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00b67a] shrink-0" />
                <a href="https://wa.me/573214295956" className="hover:text-white font-semibold transition-colors">+57 321 429 5956</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00b67a] shrink-0" />
                <a href="mailto:appmanagercolombia@outlook.com" className="hover:text-white font-semibold transition-colors">appmanagercolombia@outlook.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom signature block */}
        <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Manager APP. Todos los derechos reservados. Nit registrado en Bogotá, Colombia.</p>
          <div className="flex space-x-6">
            <a href="#inicio" className="hover:text-slate-300">Inicio</a>
            <a href="#servicios" className="hover:text-slate-300">Servicios</a>
            <a href="#contacto" className="hover:text-slate-300">Contacto</a>
          </div>
        </div>
      </footer>

      {/* Smart Generative Conversational Chatbot */}
      <Chatbot
        externalPrompt={chatPrompt}
        onClearExternalPrompt={() => setChatPrompt("")}
      />
    </div>
  );
}
