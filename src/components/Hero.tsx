/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Terminal, Server, Shield, Database } from "lucide-react";

interface HeroProps {
  onQuoteClick: () => void;
  onServicesClick: () => void;
}

export default function Hero({ onQuoteClick, onServicesClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(15, 39, 69, 0.94), rgba(15, 39, 69, 0.85)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Decorative backdrop mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,182,122,0.1),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Text and Core CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-[#00b67a] text-xs uppercase font-extrabold px-3.5 py-1.5 rounded-full mb-6 tracking-widest font-mono"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Infraestructura & Desarrollo Corporativo</span>
          </motion.div>

          {/* Strong SEO H1 headings */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-6 text-white"
          >
            Tecnología Robusta para el{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00b67a]">
              Éxito de tu Empresa
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-10"
          >
            Líderes en <strong className="text-white font-semibold">desarrollo de software colombia</strong>, 
            integración de <strong className="text-white font-semibold">redes empresariales</strong>, 
            monitoreo de CCTV, soporte IT y <strong className="text-white font-semibold">mantenimiento de computadores</strong> en Bogotá. Operamos bajo metodologías ágiles y estándares internacionales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
          >
            <button
              onClick={onQuoteClick}
              className="bg-[#00b67a] hover:bg-[#009e69] text-white font-bold text-sm uppercase px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-950/40 transition-all duration-300 flex items-center justify-center space-x-2 border border-emerald-500/10 hover:translate-y-[-2px]"
            >
              <span>Solicitar cotización</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onServicesClick}
              className="bg-transparent hover:bg-white/10 text-white font-bold text-sm uppercase px-8 py-4 rounded-xl border-2 border-slate-300 hover:border-white transition-all duration-300 flex items-center justify-center"
            >
              Nuestros Servicios
            </button>
          </motion.div>
        </div>

        {/* Right Side: Interactive Bento Blocks portraying seriousness */}
        <div className="lg:col-span-5 hidden lg:grid grid-cols-2 gap-4 relative z-10">
          <div className="absolute -inset-4 bg-emerald-500/5 filter blur-3xl rounded-full pointer-events-none" />

          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-colors"
          >
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-[#00b67a] mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-base mb-1">Software custom</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Desarrollo web Bogotá con integraciones de API e Inteligencia Artificial.
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-colors mt-6"
          >
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-[#00b67a] mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-base mb-1">Redes & Racks</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Infraestructura LAN/WAN estables, ordenadas y cableado estructurado.
            </p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-colors"
          >
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-[#00b67a] mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-base mb-1">Power BI dbs</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Análisis de datos Power BI y automatización empresarial de reportes.
            </p>
          </motion.div>

          {/* Box 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-colors mt-6"
          >
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-[#00b67a] mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-base mb-1">Soporte Express</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Soporte técnico empresarial preventivo y correctivo con ingenieros dedicados.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
