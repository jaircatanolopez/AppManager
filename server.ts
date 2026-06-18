/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables for local testing
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Log available files in the root folder to assist with image asset verification
try {
  console.log("=== SCANNING ROOT DIRECTORY ASSETS ===");
  const files = fs.readdirSync(process.cwd());
  files.forEach((file) => {
    if (file.toLowerCase().endsWith(".png") || file.toLowerCase().endsWith(".jpg") || file.toLowerCase().endsWith(".jpeg")) {
      console.log(`Found image asset: "${file}"`);
    } else if (fs.statSync(path.join(process.cwd(), file)).isDirectory() && file === "public") {
      console.log(`Found public folder containing:`, fs.readdirSync(path.join(process.cwd(), "public")));
    }
  });
  console.log("======================================");
} catch (err) {
  console.error("Error scanning root directory assets:", err);
}

// Lazy-initialization of Gemini SDK to prevent crash if key is missing during startup or build phase
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("⚠️ Warning: GEMINI_API_KEY environment variable is not defined. The smart chatbot will run in fallback simulation mode.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "dummy_key",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Endpoint to list existing files under / or /assets for debugging or direct server serving
app.get("/api/image-list", (req, res) => {
  try {
    const files = fs.readdirSync(process.cwd());
    const images = files.filter(f => f.toLowerCase().endsWith(".png") || f.toLowerCase().endsWith(".jpg") || f.toLowerCase().endsWith(".jpeg") || f.toLowerCase().endsWith(".webp"));
    res.json({ images });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Support both decoded spaces and encoded formats for uploaded files in the root folder
const serveRootImage = (filename: string) => {
  return (req: express.Request, res: express.Response) => {
    const fullPath = path.join(process.cwd(), filename);
    if (fs.existsSync(fullPath)) {
      res.sendFile(fullPath);
    } else {
      // Fallback or log if file does not exist locally
      console.warn(`⚠️ Warning: Requested asset "${filename}" does not exist at path: ${fullPath}`);
      res.status(404).send(`Image ${filename} not found locally in workspace root`);
    }
  };
};

// Map each asset with and without URL encoding for flawless browser routing
app.get(["/Logo APP MANAGER.png", "/Logo%20APP%20MANAGER.png"], serveRootImage("Logo APP MANAGER.png"));
app.get(["/Desarrollo de software .png", "/Desarrollo%20de%20software%20.png"], serveRootImage("Desarrollo de software .png"));
app.get(["/mantenimiento pc.png", "/mantenimiento%20pc.png"], serveRootImage("mantenimiento pc.png"));
app.get(["/camaras de seguridad.png", "/camaras%20de%20seguridad.png"], serveRootImage("camaras de seguridad.png"));
app.get(["/redes empresariales.png", "/redes%20empresariales.png"], serveRootImage("redes empresariales.png"));
app.get("/General.png", serveRootImage("General.png"));

// Generic catch-all router for any image uploaded to the root directory
app.get("/:filename", (req, res, next) => {
  const { filename } = req.params;
  const decodedFilename = decodeURIComponent(filename);
  if (decodedFilename.match(/\.(png|jpg|jpeg|webp|gif|svg)$/i)) {
    const fullPath = path.join(process.cwd(), decodedFilename);
    if (fs.existsSync(fullPath)) {
      return res.sendFile(fullPath);
    }
  }
  next();
});

app.get(["/Nuestros clientes.png", "/Nuestros%20clientes.png", "/Nuestros clientes", "/Nuestros%20clientes"], (req, res) => {
  const possibleFiles = ["Nuestros clientes.png", "Nuestros clientes.jpg", "Nuestros clientes.jpeg", "Nuestros clientes"];
  for (const filename of possibleFiles) {
    const p = path.join(process.cwd(), filename);
    if (fs.existsSync(p)) {
      return res.sendFile(p);
    }
  }
  res.status(404).send("Nuestros clientes image file not found");
});

// Chatbot API Endpoint using Gemini API
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "El cuerpo de la solicitud debe contener un array 'messages'." });
  }

  const userMessage = messages[messages.length - 1]?.text || "";

  // Prepare a robust system instruction in Spanish to guide responses professionally
  const systemInstruction = `
Eres el Asistente Virtual Inteligente oficial de Manager APP, una empresa líder en Colombia y Bogotá de servicios tecnológicos, desarrollo de software y soporte de infraestructura.
Lugar de Operación: Bogotá, Colombia (Atención presencial en Bogotá y alrededores, y soporte remoto a nivel nacional e internacional).
Tu tono debe ser extremadamente profesional, serio, corporativo, confiable y seguro (serio y empresarial).

Servicios Clave (Incopora estos conceptos SEO de manera fluida si el usuario pregunta por ellos):
1. 'desarrollo de software colombia' y 'desarrollo web bogotá': Creación de portales web avanzados, aplicaciones web progresivas, bases de datos escalables y automatización.
2. 'análisis de datos power bi' y 'automatización empresarial': Diseño de dashboards interactivos empresariales para la toma de decisiones y automatización de procesos repetitivos con Python/VBA u otras tecnologías.
3. 'redes empresariales' y 'cableado estructurado': Diseño, montaje, configuración de switches, routers, gabinetes de rack ordenados, y soporte para redes LAN, WAN y WiFi corporativo estable.
4. 'instalación de cámaras de seguridad' y 'CCTV': Soluciones profesionales de monitoreo con cámaras IP, grabadoras DVR/NVR y configuración de visualización en vivo desde dispositivos móviles.
5. 'mantenimiento de computadores' y 'soporte técnico empresarial': Mantenimiento correctivo y preventivo de computadores, laptops, servidores, licenciamiento de software, optimización de velocidad de equipos y recuperación segura de datos.
6. 'marketing digital colombia': Estrategias integrales de posicionamiento en buscadores, SEO local, pauta digital y optimización de conversión.

Información de Contacto Oficial:
- Ubicación: Bogotá, Colombia
- WhatsApp Oficial: +57 300 393 9349 / +57 321 429 5956
- Correo Electrónico: appmanagercolombia@outlook.com
- Llamado a la acción: Invita amablemente al usuario a cotizar sin compromiso o a ponerse en contacto mediante WhatsApp si requiere una cotización formal y personalizada.

Reglas de Comportamiento:
- Responde siempre de forma clara, educada, concisa y orientada a soluciones corporativas.
- No inventes precios fijos para desarrollo o redes, ya que cada proyecto requiere una fase de diagnóstico previo para ser valorado.
- Si la pregunta es fuera del contexto de los servicios tecnológicos de Manager APP, redirige amablemente al cliente hacia nuestros servicios principales.
`;

  // Fallback simulator if Gemini API key is missing
  if (!process.env.GEMINI_API_KEY) {
    console.log("No GEMINI_API_KEY found. Using static expert rules engine fallback.");
    let reply = "";
    const cleanMsg = userMessage.toLowerCase();
    
    if (cleanMsg.includes("cotizacion") || cleanMsg.includes("cotizar") || cleanMsg.includes("precio")) {
      reply = "Con gusto le ayudamos con una cotización para su proyecto. En Manager APP realizamos un diagnóstico inicial sin costo para evaluar sus necesidades y estructurar un presupuesto adecuado. Puede escribirnos directamente a nuestro WhatsApp oficial (+57 300 393 9349 o +57 321 429 5956) o enviarnos un correo a appmanagercolombia@outlook.com. ¿De qué área tecnológica es su requerimiento?";
    } else if (cleanMsg.includes("software") || cleanMsg.includes("web") || cleanMsg.includes("desarrollo")) {
      reply = "En Manager APP ofrecemos servicios avanzados de **desarrollo de software Colombia** y **desarrollo web bogotá**. Creamos aplicaciones web personalizadas, dashboards integrados con **análisis de datos power bi** y soluciones de **automatización empresarial** para optimizar la eficiencia de sus operaciones. Cuéntenos, ¿desea desarrollar un software a la medida o requiere asesoría en su arquitectura actual?";
    } else if (cleanMsg.includes("soporte") || cleanMsg.includes("mantenimiento") || cleanMsg.includes("computador") || cleanMsg.includes("pc")) {
      reply = "Nuestro servicio de **soporte técnico empresarial** y **mantenimiento de computadores** está diseñado para mantener sus estaciones de trabajo, servidores y redes estables. Realizamos limpiezas físicas, optimización de software, licenciamiento y atención rápida presencial en Bogotá y remota para todo el país. ¿Sus equipos se encuentran lentos o tiene alguna falla específica?";
    } else if (cleanMsg.includes("red") || cleanMsg.includes("cableado") || cleanMsg.includes("switch") || cleanMsg.includes("wifi")) {
      reply = "Brindamos estructuración profesional en **redes empresariales** y **cableado estructurado**. Organizamos racks de servidores, switches, puntos de acceso WiFi y optimizamos su canal de internet. Garantizamos canales estables y sin interferencias en Bogotá. ¿Requiere un nuevo montaje o el mantenimiento de una red existente?";
    } else if (cleanMsg.includes("camara") || cleanMsg.includes("cctv") || cleanMsg.includes("seguridad") || cleanMsg.includes("dvr")) {
      reply = "Ofrecemos **instalación de cámaras de seguridad** y sistemas de **CCTV** de alta definición en Bogotá. Integramos cámaras IP y analógicas, NVR/DVR, alertas automatizadas en celular y monitoreo confiable para locales, oficinas, bodegas o su hogar. ¿Desea vigilancia remota o requiere cobertura para un área particular?";
    } else if (cleanMsg.includes("marketing") || cleanMsg.includes("seo") || cleanMsg.includes("google")) {
      reply = "Impulsamos su marca con **marketing digital colombia**. Nos especializamos en SEO local para posicionar su empresa en Bogotá, campañas de Google Ads y generación de prospectos. ¿Le gustaría aumentar el flujo de clientes que buscan sus servicios en internet?";
    } else {
      reply = "Hola, soy el Asistente Virtual Inteligente de Manager APP. Estoy aquí para asesorarle en soluciones de desarrollo de software, redes empresariales, CCTV, soporte técnico empresarial y mantenimiento de computadores en Bogotá y toda Colombia.\n\n¿En cuál de nuestras áreas tecnológicas de especialidad le gustaría recibir información detallada o cotización?";
    }
    return res.json({ text: reply });
  }

  try {
    const ai = getGeminiClient();
    // Gather conversation context from message history
    const contextHistory = messages.slice(0, -1).map((m: any) => ({
      role: m.sender === "bot" ? "model" as const : "user" as const,
      parts: [{ text: m.text }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        ...contextHistory,
        { role: "user", parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "Disculpe, no he podido procesar la respuesta en este momento. Por favor contáctenos a appmanagercolombia@outlook.com.";
    return res.json({ text: replyText });
  } catch (err: any) {
    console.error("Gemini API Error:", err);
    return res.status(500).json({ error: `Error conectando con la API de IA: ${err.message}` });
  }
});

// Setup Vite Development Server or Static Serving of Dist
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite HMR integration...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving static production assets from /dist...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Manager APP server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
