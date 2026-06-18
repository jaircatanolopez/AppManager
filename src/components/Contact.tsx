/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Briefcase } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "software",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission to a server
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "software",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50 scroll-mt-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-mono text-[#00b67a] uppercase tracking-widest block mb-2">
            Canales de Ingeniería Listos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2745] tracking-tight">
            Solicite su Auditoría o Cotización
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
            Escríbanos hoy mismo sobre sus requerimientos de cableado estructurado, mantenimiento de computadores en Bogotá, circuito cerrado de televisión, o cotización de desarrollo de software Colombia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Box 1: Core contacts */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm flex-grow">
              <h3 className="font-extrabold text-xl text-[#0f2745] mb-6 border-b border-slate-100 pb-3">
                Información de Enlace Directo
              </h3>

              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 text-[#00b67a] rounded-xl font-bold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">Sede Principal y Laboratorio</h4>
                    <p className="text-slate-500 text-sm font-medium">Bogotá, Colombia</p>
                    <p className="text-slate-400 text-xs mt-0.5">Atención presencial y coberturas de obra</p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 text-[#00b67a] rounded-xl font-bold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">Líneas de Atención & WhatsApp</h4>
                    <p className="text-slate-500 text-sm">
                      <a href="https://wa.me/573003939349" className="hover:text-[#00b67a] font-semibold transition-colors">+57 300 393 9349</a>
                    </p>
                    <p className="text-slate-500 text-sm mt-0.5">
                      <a href="https://wa.me/573214295956" className="hover:text-[#00b67a] font-semibold transition-colors">+57 321 429 5956</a>
                    </p>
                    <p className="text-slate-400 text-xs">Atención al cliente de Lunes a Sábado de 8:00 AM a 6:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 text-[#00b67a] rounded-xl font-bold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">Correo Electrónico Oficial</h4>
                    <p className="text-slate-500 text-sm font-semibold">
                      <a href="mailto:appmanagercolombia@outlook.com" className="hover:text-[#00b67a] transition-colors">
                        appmanagercolombia@outlook.com
                      </a>
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">Reciba presupuestos formalizados en menos de 24 horas</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Box 2: Quick buttons and map representation wrapper */}
            <div className="bg-[#0f2745] text-white p-8 rounded-2xl shadow-md">
              <h4 className="font-bold text-lg text-white mb-2">¿Necesita asistencia inmediata?</h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                Chatee directamente con nuestro equipo de ingeniería. Realizamos un agendamiento express para visitas de soporte correctivo o diagnóstico térmico de servidores.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/573003939349"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25d366] hover:bg-[#20ba5a] text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md text-center flex items-center justify-center space-x-2 flex-grow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Escribir WhatsApp 1</span>
                </a>
                <a
                  href="https://wa.me/573214295956"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-transparent hover:bg-white/10 text-slate-100 hover:text-white border border-slate-600 font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl text-center flex-grow transition-colors"
                >
                  Línea Alterna
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Professional Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl shadow-md p-8 md:p-10 flex flex-col justify-between">
            <h3 className="font-extrabold text-xl text-[#0f2745] mb-6">
              Enviar su Solicitud
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5 flex items-center">
                    <span>Nombre completo</span>
                    <span className="text-[#00b67a] ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-slate-200 outline-none focus:border-[#00b67a] rounded-xl px-4 py-3 text-slate-800 text-sm bg-slate-50 focus:bg-white transition-all shadow-inner"
                    placeholder="Ej. Juan Carlos Pérez"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="company" className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5 flex items-center">
                    <span>Empresa</span>
                    <span className="text-xs text-slate-400 font-normal ml-1">(Opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="border border-slate-200 outline-none focus:border-[#00b67a] rounded-xl px-4 py-3 text-slate-800 text-sm bg-slate-50 focus:bg-white transition-all shadow-inner"
                    placeholder="Ej. ConstructSoluciones S.A.S"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5 flex items-center">
                    <span>Correo Corporativo</span>
                    <span className="text-[#00b67a] ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-slate-200 outline-none focus:border-[#00b67a] rounded-xl px-4 py-3 text-slate-800 text-sm bg-slate-50 focus:bg-white transition-all shadow-inner"
                    placeholder="Ej. jperez@empresa.com"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5 flex items-center">
                    <span>WhatsApp / Celular</span>
                    <span className="text-[#00b67a] ml-0.5">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-slate-200 outline-none focus:border-[#00b67a] rounded-xl px-4 py-3 text-slate-800 text-sm bg-slate-50 focus:bg-white transition-all shadow-inner"
                    placeholder="Ej. 300 393 9349"
                  />
                </div>
              </div>

              {/* Row 3: Service Selector */}
              <div className="flex flex-col">
                <label htmlFor="service" className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5 flex items-center">
                  <span>Área de Requerimiento Técnico</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-slate-200 outline-none focus:border-[#00b67a] rounded-xl px-4 py-3 text-slate-800 text-sm bg-slate-50 focus:bg-white transition-all shadow-inner appearance-none pointer-events-auto"
                  >
                    <option value="software">Desarrollo de Software y Dashboards Power BI</option>
                    <option value="redes">Redes Empresariales y Cableado Estructurado</option>
                    <option value="seguridad">CCTV e Instalación de Cámaras de Seguridad</option>
                    <option value="soporte">Mantenimiento de Computadores y Soporte Técnico</option>
                    <option value="marketing">Marketing Digital y Posicionamiento SEO</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-1.5 flex items-center">
                  <span>Descripción del Requerimiento</span>
                  <span className="text-[#00b67a] ml-0.5">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="border border-slate-200 outline-none focus:border-[#00b67a] rounded-xl px-4 py-3 text-slate-800 text-sm bg-slate-50 focus:bg-white transition-all shadow-inner resize-none"
                  placeholder="Detalle brevemente las especificaciones de su proyecto o los problemas que presentan sus equipos tecnológicos..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0d9488] hover:bg-teal-700 text-white font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Procesando envío...</span>
                  ) : (
                    <>
                      <span>Enviar Formulario Oficial</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>

            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-xl flex items-center space-x-3 text-teal-800 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00b67a] shrink-0" />
                  <div>
                    <strong className="font-bold">¡Mensaje enviado con éxito!</strong> Un ingeniero especialista se pondrá en contacto con usted por correo o WhatsApp para agendar la auditoría inicial de diagnóstico tecnológico.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
