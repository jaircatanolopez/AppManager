/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Users, Target, ShieldAlert, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Users className="w-6 h-6 text-[#00b67a]" />,
      title: "Ingenieros Certificados",
      description: "Contamos con un equipo de profesionales apasionados y certificados para garantizar estándares empresariales de alta calidad.",
    },
    {
      icon: <Target className="w-6 h-6 text-[#00b67a]" />,
      title: "Enfoque en Resultados",
      description: "Entendemos la importancia de la disponibilidad tecnológica. Eliminamos cuellos de botella para que su negocio no se detenga.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-[#00b67a]" />,
      title: "Cero Improvisaciones",
      description: "Diseñamos un diagnóstico inicial riguroso para asegurar que la inversión en tecnología sea óptima, duradera y rentable.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#00b67a]" />,
      title: "Experiencia Comprobada",
      description: "Más de 4 años diseñando arquitecturas de redes, desarrollo web y CCTV que respaldan a marcas de primer nivel.",
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Images Grid/Composition showing corporate setup */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <img
                src="/personal_soporte_bogota.png"
                alt="Personal corporativo de soporte y desarrollo en Bogotá"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.endsWith("/personal_soporte_bogota.png")) {
                    target.src = "/personal.png";
                  } else if (target.src.endsWith("/personal.png")) {
                    target.src = "/General.png";
                  } else if (target.src.endsWith("/General.png")) {
                    target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80";
                  }
                }}
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2745]/60 via-transparent to-transparent" />
            </motion.div>

            {/* Quick stats floating bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0f2745] text-white p-6 rounded-xl shadow-xl border border-slate-700/50 hidden sm:flex items-center space-x-4 max-w-xs"
            >
              <div className="text-4xl font-extrabold text-[#00b67a]">4+</div>
              <div className="text-slate-300 text-xs font-medium uppercase tracking-wider leading-snug">
                Años brindando soluciones corporativas en Colombia
              </div>
            </motion.div>
          </div>

          {/* Right Side: Copywriting targeting enterprise needs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-bold font-mono text-[#00b67a] uppercase tracking-widest block mb-2">
                Ingeniería Local, Cobertura Global
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2745] tracking-tight mb-8">
                ¿Quiénes somos y por qué confiar en Manager APP?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 text-slate-600 text-base leading-relaxed"
            >
              <p>
                Somos <strong className="text-slate-900 font-semibold">Manager APP</strong>, una firma colombiana de ingeniería y soporte tecnológico integral. Nos dedicamos a diseñar e implementar infraestructuras sofisticadas que impulsan la optimización y garantizan la continuidad de negocio para empresas y organizaciones.
              </p>
              <p>
                Brindamos servicios presenciales en <strong className="text-slate-900 font-semibold">Bogotá y alrededores</strong>, con la capacidad logística y de infraestructura de operar soporte remoto de alta disponibilidad para toda Colombia y clientes corporativos en América Latina.
              </p>
              <p>
                Nuestra filosofía radica en la precisión. Entendemos que en el mundo corporativo actual, un fallo de red o el retraso en un software representa pérdida de dinero. Por ello, proveemos desde el licenciamiento de software y el montaje estructural hasta el desarrollo de flujos automatizados complejos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-[#00b67a] rounded-full"></span>
                <span className="text-sm font-semibold text-slate-800">Soporte Tecnológico 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-[#00b67a] rounded-full"></span>
                <span className="text-sm font-semibold text-slate-800">Diagnóstico Inicial de Redes</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-[#00b67a] rounded-full"></span>
                <span className="text-sm font-semibold text-slate-800">CCTV con Visualización Móvil</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 bg-[#00b67a] rounded-full"></span>
                <span className="text-sm font-semibold text-slate-800">Desarrollos y Dashboards Power BI</span>
              </div>
            </div>
          </div>

        </div>

        {/* Corporate core values cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="service-card bg-slate-50 p-6 rounded-xl transition-all"
            >
              <div className="p-3 bg-white w-fit rounded-lg shadow-sm border border-slate-100 mb-4">
                {v.icon}
              </div>
              <h3 className="font-bold text-[#0f2745] text-lg mb-2">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
