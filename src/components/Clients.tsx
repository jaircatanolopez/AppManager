/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, ShieldCheck, Quote, Briefcase, ThumbsUp, Building2, Sparkles, Truck, Printer, Phone, MessageSquare, Mail, MapPin, Clock } from "lucide-react";
import { Testimonial } from "../types";
import { Logo } from "./Logo";

export default function Clients() {
  const testimonials: Testimonial[] = [
    {
      id: "construct",
      clientName: "ConstructSoluciones",
      logoText: "CS",
      author: "Carlos Méndez",
      role: "Gerente General",
      rating: 5,
      text: "AppManager nos ayudó con la instalación de nuestra red empresarial, configuración de equipos y cámaras de seguridad. El servicio fue rápido, profesional y con excelente atención 24/7.",
    },
    {
      id: "beauty",
      clientName: "Beauty Studio",
      logoText: "BS",
      author: "Laura Gómez",
      role: "Propietaria",
      rating: 5,
      text: "El sistema de cámaras de seguridad que instalaron nos da tranquilidad y control total desde el celular. Muy recomendados por su responsabilidad y conocimiento.",
    },
    {
      id: "logitrack",
      clientName: "LogiTrack",
      logoText: "LT",
      author: "Juan Camilo R.",
      role: "Director de Operaciones",
      rating: 5,
      text: "Desarrollaron nuestro sistema a la medida y ahora tenemos el control total de operaciones, reportes y análisis de datos. Excelente trabajo y soporte continuo.",
    },
    {
      id: "ofimax",
      clientName: "OfiMax",
      logoText: "OM",
      author: "Natalia Romero",
      role: "Administradora",
      rating: 5,
      text: "Siempre que tenemos problemas con nuestros equipos o impresoras, ellos responden de inmediato. Servicio técnico confiable y personal muy capacitado.",
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono text-[#00b67a] uppercase tracking-widest block mb-2">
            Respaldados por Líderes de Mercado
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2745] tracking-tight">
            Nuestros Clientes nos Respaldan
          </h2>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            Consulte las valoraciones de medianas y grandes empresas en Bogotá y Colombia que han confiado su infraestructura IT, redes corporativas y desarrollos de software a Manager APP.
          </p>
        </div>

        {/* Visual Showcase: Testimonial Image Collage in Premium frame */}
        <div className="mb-20 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden"
          >
            {/* Header of the Banner */}
            <div className="p-6 sm:p-8 bg-slate-900 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Logo on Left */}
              <div className="flex items-center space-x-3">
                <Logo size="md" className="text-white" />
              </div>
              
              {/* Main Banner Title on Right */}
              <div className="md:text-right">
                <span className="text-[#00b67a] font-mono text-xs tracking-widest uppercase font-bold block mb-1">
                  Soluciones tecnológicas que generan confianza
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight uppercase font-sans">
                  NUESTROS CLIENTES <span className="text-[#00b67a] block sm:inline font-black">NOS RESPALDAN</span>
                </h3>
              </div>
            </div>

            {/* Testimonials 2x2 Grid */}
            <div className="p-4 sm:p-8 bg-slate-950 grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Card 1: ConstructSoluciones */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col sm:flex-row border border-slate-100 min-h-[220px]">
                {/* Photo Column */}
                <div className="w-full sm:w-[38%] min-h-[220px] sm:min-h-full relative bg-slate-100 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80"
                    alt="Carlos Méndez - Gerente"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/40 to-transparent pointer-events-none" />
                </div>
                {/* Content Column */}
                <div className="w-full sm:w-[62%] p-6 flex flex-col justify-between">
                  <div>
                    {/* Client logo / header */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="p-1 rounded-md bg-slate-900 text-white leading-none">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="font-extrabold text-[#0f2745] text-sm tracking-tight">ConstructSoluciones</span>
                    </div>
                    {/* Quote */}
                    <div className="relative">
                      <span className="text-emerald-500 font-serif text-3xl leading-none absolute -top-1 -left-2 opacity-35">“</span>
                      <p className="text-slate-600 text-xs leading-relaxed pl-3 italic mb-3">
                        AppManager nos ayudó con la instalación de nuestra red empresarial, configuración de equipos y cámaras de seguridad. El servicio fue rápido, profesional y con excelente atención 24/7.
                      </p>
                    </div>
                  </div>
                  
                  {/* Stars + Author */}
                  <div className="pt-2 border-t border-slate-100 mt-2">
                    <div className="flex space-x-0.5 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
                      ))}
                    </div>
                    <h5 className="font-bold text-slate-800 text-xs leading-none">Carlos Méndez</h5>
                    <span className="text-[10px] text-slate-400">Gerente General</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Beauty Studio */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col sm:flex-row border border-slate-100 min-h-[220px]">
                {/* Photo Column */}
                <div className="w-full sm:w-[38%] min-h-[220px] sm:min-h-full relative bg-slate-100 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
                    alt="Laura Gómez - Propietaria"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/40 to-transparent pointer-events-none" />
                </div>
                {/* Content Column */}
                <div className="w-full sm:w-[62%] p-6 flex flex-col justify-between">
                  <div>
                    {/* Client logo / header */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="p-1 rounded-md bg-pink-600 text-white leading-none">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <span className="font-extrabold text-[#0f2745] text-sm tracking-tight">Beauty Studio</span>
                    </div>
                    {/* Quote */}
                    <div className="relative">
                      <span className="text-emerald-500 font-serif text-3xl leading-none absolute -top-1 -left-2 opacity-35">“</span>
                      <p className="text-slate-600 text-xs leading-relaxed pl-3 italic mb-3">
                        El sistema de cámaras de seguridad que instalaron nos da tranquilidad y control total desde el celular. Muy recomendados por su responsabilidad y conocimiento.
                      </p>
                    </div>
                  </div>
                  
                  {/* Stars + Author */}
                  <div className="pt-2 border-t border-slate-100 mt-2">
                    <div className="flex space-x-0.5 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
                      ))}
                    </div>
                    <h5 className="font-bold text-slate-800 text-xs leading-none">Laura Gómez</h5>
                    <span className="text-[10px] text-slate-400">Propietaria</span>
                  </div>
                </div>
              </div>

              {/* Card 3: LogiTrack */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col sm:flex-row border border-slate-100 min-h-[220px]">
                {/* Photo Column */}
                <div className="w-full sm:w-[38%] min-h-[220px] sm:min-h-full relative bg-slate-100 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80"
                    alt="Juan Camilo R. - Director"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/40 to-transparent pointer-events-none" />
                </div>
                {/* Content Column */}
                <div className="w-full sm:w-[62%] p-6 flex flex-col justify-between">
                  <div>
                    {/* Client logo / header */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="p-1 rounded-md bg-indigo-600 text-white leading-none">
                        <Truck className="w-4 h-4" />
                      </div>
                      <span className="font-extrabold text-[#0f2745] text-sm tracking-tight">LogiTrack</span>
                    </div>
                    {/* Quote */}
                    <div className="relative">
                      <span className="text-emerald-500 font-serif text-3xl leading-none absolute -top-1 -left-2 opacity-35">“</span>
                      <p className="text-slate-600 text-xs leading-relaxed pl-3 italic mb-3">
                        Desarrollaron nuestro sistema a la medida y ahora tenemos el control total de operaciones, reportes y análisis de datos. Excelente trabajo y soporte continuo.
                      </p>
                    </div>
                  </div>
                  
                  {/* Stars + Author */}
                  <div className="pt-2 border-t border-slate-100 mt-2">
                    <div className="flex space-x-0.5 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
                      ))}
                    </div>
                    <h5 className="font-bold text-slate-800 text-xs leading-none">Juan Camilo R.</h5>
                    <span className="text-[10px] text-slate-400">Director de Operaciones</span>
                  </div>
                </div>
              </div>

              {/* Card 4: OfiMax */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col sm:flex-row border border-slate-100 min-h-[220px]">
                {/* Photo Column */}
                <div className="w-full sm:w-[38%] min-h-[220px] sm:min-h-full relative bg-slate-100 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80"
                    alt="Natalia Romero - Administradora"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/40 to-transparent pointer-events-none" />
                </div>
                {/* Content Column */}
                <div className="w-full sm:w-[62%] p-6 flex flex-col justify-between">
                  <div>
                    {/* Client logo / header */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="p-1 rounded-md bg-cyan-600 text-white leading-none">
                        <Printer className="w-4 h-4" />
                      </div>
                      <span className="font-extrabold text-[#0f2745] text-sm tracking-tight">OfiMax</span>
                    </div>
                    {/* Quote */}
                    <div className="relative">
                      <span className="text-emerald-500 font-serif text-3xl leading-none absolute -top-1 -left-2 opacity-35">“</span>
                      <p className="text-slate-600 text-xs leading-relaxed pl-3 italic mb-3">
                        Siempre que tenemos problemas con nuestros equipos o impresoras, ellos responden de inmediato. Servicio técnico confiable y personal muy capacitado.
                      </p>
                    </div>
                  </div>
                  
                  {/* Stars + Author */}
                  <div className="pt-2 border-t border-slate-100 mt-2">
                    <div className="flex space-x-0.5 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
                      ))}
                    </div>
                    <h5 className="font-bold text-slate-800 text-xs leading-none">Natalia Romero</h5>
                    <span className="text-[10px] text-slate-400">Administradora</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom corporate text section */}
            <div className="pb-8 bg-slate-950 text-center px-4">
              <span className="text-slate-300 text-xs sm:text-sm font-medium block">
                Gracias a todos nuestros clientes por confiar en <span className="text-[#00b67a] font-bold">AppManager</span>.
              </span>
              
              {/* Badge lists */}
              <div className="mt-6 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[10px] sm:text-xs">
                <div className="flex items-center space-x-1.5 text-slate-300">
                  <Clock className="w-4 h-4 text-[#00b67a]" />
                  <span className="font-bold">ATENCIÓN 24/7</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">Siempre disponibles para ti</span>
                </div>
                <div className="hidden sm:inline text-slate-700">|</div>
                <div className="flex items-center space-x-1.5 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#00b67a]" />
                  <span className="font-bold">EXPERIENCIA</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">Más de 4 años brindando soluciones</span>
                </div>
                <div className="hidden sm:inline text-slate-700">|</div>
                <div className="flex items-center space-x-1.5 text-slate-300">
                  <ThumbsUp className="w-4 h-4 text-[#00b67a]" />
                  <span className="font-bold">GARANTÍA</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">Compromiso con la calidad</span>
                </div>
              </div>
            </div>

            {/* Green Contact Bar below */}
            <div className="bg-gradient-to-r from-[#00b67a] to-[#009b68] text-white font-bold py-4 px-6 shrink-0 flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm text-center">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white fill-white/10" />
                <span>300 393 9349</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-white fill-white/10" />
                <span>321 429 5956</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white" />
                <span>appmanagercolombia@outlook.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-white" />
                <span>Colombia</span>
              </div>
            </div>

          </motion.div>
        </div>
        {/* Corporate badges statistics */}
        <div className="mt-16 bg-[#183a63] text-white rounded-2xl p-8 shadow-lg border border-slate-700/30 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-[#00b67a] mb-1">100%</span>
            <span className="text-slate-300 text-xs">Clientes Satisfechos</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-[#00b67a] mb-1">4+ Años</span>
            <span className="text-slate-300 text-xs">Experiencia IT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-[#00b67a] mb-1">24/7</span>
            <span className="text-slate-300 text-xs">Soporte Continuo</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-[#00b67a] mb-1">Bogotá</span>
            <span className="text-slate-300 text-xs font-medium">Sede Principal</span>
          </div>
        </div>

      </div>
    </section>
  );
}
