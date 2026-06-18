/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Network, Shield, Cpu, TrendingUp, Info, CheckCircle2, ArrowRight, X } from "lucide-react";
import { ServiceItem } from "../types";

interface ServicesProps {
  onServiceSelect: (keyword: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const servicesData: ServiceItem[] = [
    {
      id: "software",
      title: "Desarrollo de Software",
      seoKeyword: "desarrollo de software colombia",
      description: "Aplicaciones web corporativas, bases de datos eficientes, automatización empresarial con Python/VBA y tableros interactivos.",
      longDescription: "Diseñamos sistemas informáticos seguros, escalables y rápidos que solucionan problemas internos de su compañía. Integramos su lógica de negocio para reducir errores humanos.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
      benefits: [
        "Desarrollo web Bogotá con frameworks robustos (React, Node.js).",
        "Análisis de datos Power BI y tableros en tiempo real para gerentes.",
        "Automatización de procesos repetitivos y reportes automatizados.",
        "Arquitectura Cloud segura y diseño adaptable a móviles.",
      ],
      techStack: ["React", "TypeScript", "Node.js", "Python", "Power BI", "PostgreSQL"],
    },
    {
      id: "redes",
      title: "Redes Empresariales",
      seoKeyword: "redes empresariales",
      description: "Instalación, orden lógico de racks, configuración de switches y routers, redes LAN/WAN y cableado estructurado.",
      longDescription: "Solución de cableado estructurado de datos categoría 6/6A/7 con certificación de puntos de red. Optimizamos e instalamos routers y switches empresariales para internet industrial estable.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
      benefits: [
        "Instalación limpia y cableado estructurado bajo norma ANSI/TIA.",
        "Switches administrables y routers balanceadores de múltiples WANs.",
        "Zonas WiFi corporativas de alta densidad con antenas unificadas.",
        "Ordenamiento de gabinetes y racks de telecomunicaciones.",
      ],
      techStack: ["MikroTik", "Ubiquiti UniFi", "Cisco Switchen", "Patch Panels Cat6A", "Fluke Test Certification"],
    },
    {
      id: "seguridad",
      title: "CCTV y Videovigilancia",
      seoKeyword: "instalación de cámaras de seguridad",
      description: "Montaje de cámaras de seguridad de alta definición en Bogotá, almacenamiento NVR/DVR y configuración móvil.",
      longDescription: "Sistemas avanzados de circuito cerrado de televisión (CCTV) con monitoreo en tiempo real desde celulares o centros de control. Cámaras IP inteligentes con visión nocturna y alertas perimetrales.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&auto=format&fit=crop&q=80",
      benefits: [
        "Cámaras de seguridad Bogotá con sensores de movimiento and visión nocturna.",
        "Configuración de alertas push instantáneas en smartphones.",
        "Equipos robustos (Hikvision, Dahua) con discos duros especializados (Western Digital Purple).",
        "Diseño estratégico de puntos ciegos para hogares, oficinas y bodegas.",
      ],
      techStack: ["Hikvision IP", "Dahua NVR", "WD Purple HDDs", "PoE Injectors", "CamApp Remote Link"],
    },
    {
      id: "soporte",
      title: "Soporte Técnico & PC",
      seoKeyword: "soporte técnico empresarial",
      description: "Mantenimiento preventivo y correctivo de computadores de oficina, optimización física, reparación y licenciamiento.",
      longDescription: "Servicio de diagnóstico técnico express para su parque informático en Bogotá. Realizamos limpiezas, cambio de componentes térmicos, erradicación de virus y optimización extrema de PCs lentos.",
      image: "https://images.unsplash.com/photo-1597872200919-0127a44611fe?w=800&auto=format&fit=crop&q=80",
      benefits: [
        "Mantenimiento de computadores (limpieza física, pasta térmica).",
        "Diagnóstico de fallas en hardware de estaciones de trabajo y servidores.",
        "Instalación y licenciamiento de software original.",
        "Recuperación segura de datos en discos dañados.",
      ],
      techStack: ["Servicio Presencial Bogotá", "Soporte Remoto AnyDesk/TeamViewer", "SSD Upgrades", "Backup Automático Cloud"],
    },
    {
      id: "marketing",
      title: "Marketing Digital & SEO",
      seoKeyword: "marketing digital colombia",
      description: "Estrategias de pauta paga en Google y Meta, posicionamiento SEO local y captación continua de clientes.",
      longDescription: "Posicionamos su negocio en Google para que aparezca cuando clientes potenciales en Colombia busquen sus servicios. Creamos campañas de anuncios de conversión optimizadas.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      benefits: [
        "Tráfico calificado hacia su sitio web o WhatsApp.",
        "Posicionamiento SEO Local en Bogotá para alta visibilidad física.",
        "Configuración y analítica web con Google Analytics 4.",
        "Estructura óptima para embudos de ventas en pymes.",
      ],
      techStack: ["Google Ads", "Meta Business Suite", "Google Search Console", "GA4", "SEO Local Optimization"],
    },
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case "software":
        return <Terminal className="w-6 h-6 text-[#00b67a]" />;
      case "redes":
        return <Network className="w-6 h-6 text-[#00b67a]" />;
      case "seguridad":
        return <Shield className="w-6 h-6 text-[#00b67a]" />;
      case "soporte":
        return <Cpu className="w-6 h-6 text-[#00b67a]" />;
      default:
        return <TrendingUp className="w-6 h-6 text-[#00b67a]" />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-slate-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header with SEO Focus */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono text-[#00b67a] uppercase tracking-widest block mb-2"
          >
            Servicios de Ingeniería Certificada
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#0f2745] tracking-tight"
          >
            Nuestras Soluciones Corporativas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-slate-500 text-lg leading-relaxed"
          >
            Un ecosistema técnico unificado para su empresa. Diagnósticos claros, implementaciones limpias y soporte continuo. Porque improvisar con tecnología nunca sale barato.
          </motion.p>
        </div>

        {/* Services Grid with 3-4 cards responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="service-card bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.seoKeyword}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stock visual placeholder with matching topic
                    const term = encodeURIComponent(service.title);
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80`;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Visual pill for SEO Focus */}
                <span className="absolute top-4 left-4 bg-[#0f2745] text-xs font-semibold text-slate-100 px-3 py-1 rounded-full shadow-md">
                  {service.title}
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      {getIcon(service.id)}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#00b67a] tracking-wide uppercase">
                      SEO: {service.seoKeyword}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0f2745] mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center text-sm font-bold text-[#00b67a] hover:text-[#009e69] transition-colors focus:outline-none"
                  >
                    <span>Especificaciones</span>
                    <Info className="w-4 h-4 ml-1.5" />
                  </button>

                  <button
                    onClick={() => onServiceSelect(service.seoKeyword)}
                    className="p-1.5 bg-[#0f2745] hover:bg-[#00b67a] text-slate-200 hover:text-white rounded-lg transition-all"
                    title="Chatear con experto"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed specifications Drawer slide-over */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-[#0f2745]/75 backdrop-blur-sm"
              />

              {/* Drawer Container */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative bg-white max-w-2xl w-full rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-10"
              >
                {/* Header photo and close button */}
                <div className="relative h-48 bg-slate-100">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80";
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-2xl font-extrabold text-white">
                    {selectedService.title}
                  </h3>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
                  <p className="text-[#00b67a] text-xs font-mono font-bold tracking-wider uppercase mb-3">
                    Estándar de Posicionamiento: {selectedService.seoKeyword}
                  </p>
                  
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {selectedService.longDescription}
                  </p>

                  <h4 className="text-sm font-extrabold text-[#0f2745] uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                    Beneficios Corporativos Incluidos
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
                    {selectedService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00b67a] shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {selectedService.techStack && (
                    <div className="mb-8">
                      <h4 className="text-sm font-extrabold text-[#0f2745] uppercase tracking-wider mb-3">
                        Tecnologías e Instrumental Utilizado
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mt-6">
                    <button
                      onClick={() => {
                        onServiceSelect(selectedService.seoKeyword);
                        setSelectedService(null);
                      }}
                      className="bg-[#00b67a] hover:bg-[#009e69] text-white font-bold text-sm uppercase px-6 py-3 rounded-xl flex-grow shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Cotizar este Servicio</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="border border-slate-200 text-slate-500 font-bold text-sm uppercase px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      Cerrar detalles
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
