/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, AlertTriangle, Sparkles } from "lucide-react";
import { ChatMessage, QuickReplyOption } from "../types";

interface ChatbotProps {
  externalPrompt?: string;
  onClearExternalPrompt?: () => void;
}

export default function Chatbot({ externalPrompt, onClearExternalPrompt }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial",
      sender: "bot",
      text: "Hola 👋 Soy el Asistente Virtual Inteligente de **Manager APP**. ¿Cómo podemos potenciar la infraestructura tecnológica de su empresa u hogar hoy?",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [errorState, setErrorState] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const quickReplies: QuickReplyOption[] = [
    { key: "cotizacion", label: "📄 Cotización Express", prompt: "Me gustaría solicitar una cotización inicial para un requerimiento tecnológico." },
    { key: "software", label: "💻 Desarrollo de Software", prompt: "Requiero información sobre desarrollo web bogotá o desarrollo de software colombia." },
    { key: "soporte", label: "🛠️ Soporte Técnico / PC", prompt: "Necesitamos soporte técnico empresarial o mantenimiento de computadores en Bogotá." },
    { key: "redes", label: "🔌 Redes Empresariales", prompt: "Queremos cotizar cableado estructurado o diseño de redes empresariales robustas." },
    { key: "cctv", label: "📹 Cámaras de Seguridad", prompt: "Solicito asesoría para instalación de cámaras de seguridad CCTV en Bogotá." },
  ];

  // Auto scroll to message stack end
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Handle trigger from services or parents
  useEffect(() => {
    if (externalPrompt) {
      setIsOpen(true);
      handleSendMessage(externalPrompt);
      if (onClearExternalPrompt) {
        onClearExternalPrompt();
      }
    }
  }, [externalPrompt]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    setErrorState(null);
    const userMsg: ChatMessage = {
      id: Math.random().toString(36).substr(2, 9),
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo obtener respuesta del servidor de IA.");
      }

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substr(2, 9),
          sender: "bot",
          text: data.text,
          timestamp: new Date(),
        },
      ]);
    } catch (err: any) {
      console.error(err);
      setErrorState("Falla de enlace temporario. Inténtelo en breve.");
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substr(2, 9),
          sender: "bot",
          text: "Lo lamento, he tenido un inconveniente de conexión con mis servidores principales en Bogotá. Puede llamarnos directamente al **+57 300 393 9349** o escribir a **appmanagercolombia@outlook.com** para coordinar asesoría inmediata.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const formatText = (text: string) => {
    // Process mild bolding (**text**)
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index} className="font-extrabold text-white bg-slate-800 px-1 py-0.5 rounded text-xs">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[120] bg-emerald-500 hover:bg-[#00b67a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer select-none group border border-emerald-500/20"
      >
        {isOpen ? <X className="w-6 h-6 shrink-0" /> : <MessageSquare className="w-6 h-6 shrink-0" />}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs whitespace-nowrap group-hover:ml-3 text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300">
          {isOpen ? "Cerrar" : "Asistente Virtual"}
        </span>
      </motion.button>

      {/* Collapsible Chat Modal Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[120] bg-slate-950 text-white w-[92vw] sm:w-[410px] h-[550px] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col justify-between"
          >
            {/* Header */}
            <div className="bg-[#0f2745] p-4 flex justify-between items-center border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping shrink-0" />
                <div className="flex flex-col">
                  <h3 className="font-extrabold text-sm tracking-tight text-white flex items-center">
                    <span>Soporte Manager APP</span>
                    <Sparkles className="w-3.5 h-3.5 ml-1 text-emerald-400" />
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400">AGENTE DE IA CORPORATIVO</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 hover:bg-white/5 rounded transition-colors"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Message Pane container */}
            <div
              ref={containerRef}
              className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-950/95 scroll-smooth"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed whitespace-pre-wrap ${
                      m.sender === "user"
                        ? "bg-[#00b67a] text-white rounded-br-none"
                        : "bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none"
                    }`}
                  >
                    {formatText(m.text)}
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 mt-1 uppercase tracking-wider">
                    {m.sender === "user" ? "Su Mensaje" : "Asistente AI"} • {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}

              {/* Typing feedback dots */}
              {isTyping && (
                <div className="flex flex-col items-start">
                  <div className="bg-slate-900 border border-slate-850 px-4 py-2.5 rounded-2xl rounded-bl-none flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-slate-450 rounded-full animate-bounce delay-75" />
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce delay-150" />
                    <span className="w-1.5 h-1.5 bg-slate-450 rounded-full animate-bounce delay-300" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 mt-1">Escribiendo solución...</span>
                </div>
              )}

              {errorState && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs rounded-xl flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{errorState}</span>
                </div>
              )}
            </div>

            {/* Preset Option Quick Replies list */}
            {messages.length < 5 && (
              <div className="bg-slate-900/50 p-2 border-t border-slate-900 overflow-x-auto whitespace-nowrap select-none scrollbar-none flex gap-2">
                {quickReplies.map((qr) => (
                  <button
                    key={qr.key}
                    onClick={() => handleSendMessage(qr.prompt)}
                    className="inline-flex items-center text-xs bg-slate-850 hover:bg-emerald-500/10 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/30 text-slate-300 font-medium rounded-lg px-3 py-1.5 cursor-pointer shrink-0 transition-colors"
                  >
                    <span>{qr.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Input Actions Footer Bar */}
            <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Escriba su consulta tecnológica aquí..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputText)}
                className="flex-grow bg-slate-950 text-white border border-slate-850 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                onClick={() => handleSendMessage(inputText)}
                className="p-2.5 bg-[#00b67a] hover:bg-[#009e69] text-white rounded-xl shadow-md cursor-pointer transition-colors"
                title="Enviar mensaje"
              >
                <Send className="w-4.5 h-4.5 shrink-0" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
