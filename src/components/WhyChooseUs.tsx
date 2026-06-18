/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, Shield, Clock, HelpCircle, HardDrive } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Resguardo y Disponibilidad 24/7",
      desc: "Servidores y redes monitoreadas constantemente para prevenir pérdidas operativas en su negocio.",
    },
    {
      title: "Diagnóstico Preventivo Previo",
      desc: "No adivinamos. Realizamos estudios exhaustivos de carga de red, estado térmico e integridad de disco duro.",
    },
    {
      title: "Soporte Remoto Veloz",
      desc: "Atendemos incidencias graves en minutos a través de canales seguros unificados (AnyDesk, TeamViewer).",
    },
    {
      title: "Soluciones de Desarrollo a Medida",
      desc: "Codificamos herramientas modulares limpias fáciles de integrar con sus bases de datos SQL o Power BI.",
    },
  ];

  return (
    <section className="py-24 bg-[#0f2745] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,182,122,0.06),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold text-[#00b67a] uppercase tracking-widest block mb-2">
              Ingeniería con Respaldo Real
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              ¿Por qué elegir a Manager APP para su infraestructura?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              En el ecosistema tecnológico moderno, la improvisación se traduce en pérdidas. Proporcionamos un servicio técnico certificado, orden lógico en cableado, y desarrollo de software con código limpio y seguro.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                <Shield className="w-5 h-5 text-[#00b67a] shrink-0" />
                <span className="text-slate-200 text-sm font-semibold">Garantía Real por Escrito en Racks y Cableado</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                <Clock className="w-5 h-5 text-[#00b67a] shrink-0" />
                <span className="text-slate-200 text-sm font-semibold">Tiempos de Respuesta Menores a 2 Horas en Emergencias</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                <HardDrive className="w-5 h-5 text-[#00b67a] shrink-0" />
                <span className="text-slate-200 text-sm font-semibold">Partes y Componentes de Fabricantes Líderes</span>
              </div>
            </div>
          </div>

          {/* Right points grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((pt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center text-[#00b67a] mb-4">
                  <Check className="w-4 h-4 shrink-0" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{pt.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}

            {/* Corporate promise badge */}
            <div className="sm:col-span-2 bg-[#00b67a] p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
              <div>
                <h4 className="font-bold text-white text-lg">¿Requiere un proyecto a gran escala?</h4>
                <p className="text-teal-50 text-xs">
                  Suministramos e instalamos equipamiento tecnológico completo para oficinas, sucursales y bodegas.
                </p>
              </div>
              <a
                href="#contacto"
                className="bg-[#0f2745] hover:bg-[#183a63] text-[#00b67a] hover:text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-lg text-center transition-colors shrink-0"
              >
                Hablar con Ingeniero
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
