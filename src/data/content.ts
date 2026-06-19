export const brand = {
  name: "Entregas Chapu",
  promise: "Tu entrega, nuestro compromiso",
  tagline: "Rápido, seguro y confiable",
  description:
    "Soluciones logísticas rápidas, seguras y confiables para empresas y particulares en Atacama y Coquimbo.",
  detail:
    "Trasladamos encomiendas, documentos, valijas corporativas, productos valorados y trámites con atención personalizada y cobertura regional.",
  email: "contacto@entregaschapu.cl",
  social: "Facebook / Instagram: @entregaschapu",
  phones: {
    quote: "+56 9 7884 3562",
    attention: "+56 9 3202 2926"
  },
  whatsapp: {
    quote: "56978843562",
    attention: "56932022926"
  },
  images: {
    logo: "/assets/entregas-chapu-logo-wide.jpeg",
    van: "/assets/entregas-chapu-van.jpeg",
    routes: "/assets/entregas-chapu-routes.jpeg",
    operations: "/assets/entregas-chapu-operations.jpeg"
  }
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" }
];

export const trustSignals = ["Rápido", "Seguro", "Confiable"];

export const services = [
  {
    tag: "Envíos diarios",
    // title: "Courier",
    description:
      "Retiro y entrega de paquetes, documentos y encomiendas con coordinación directa.",
  },
  {
    tag: "Empresas",
    // title: "Última milla",
    description:
      "Distribución local y regional para llegar al cliente final.",
  },
  {
    tag: "Programado",
    // title: "Valijas corporativas",
    description:
      "Traslado de valijas y material interno entre oficinas y ciudades.",
  },
  {
    tag: "Mayor cuidado",
    // title: "Productos valorados",
    description:
      "Entregas que requieren más control, seguridad y comunicación.",
  },
  {
    tag: "Gestión",
    // title: "Trámites y documentos",
    description:
      "Gestión de documentos, trámites y entregas urgentes.",
  },
  {
    tag: "Regional",
    // title: "Encomiendas",
    description:
      "Carga y paquetes para empresas o particulares entre ciudades.",
  },
];

export const benefits = [
  "Entregas rápidas y coordinadas",
  "Atención directa y personalizada",
  "Cobertura regional",
  "Manejo seguro de documentos y productos valorados",
  "Servicio para empresas y particulares",
  "Comunicación ágil por WhatsApp"
];

export const metrics = [
  { value: "+500", label: "entregas gestionadas" },
  { value: "+9", label: "zonas de cobertura" },
  { value: "B2B", label: "servicio para empresas" },
  { value: "Directa", label: "coordinación por WhatsApp" }
];

export const coverageZones = [
  "Copiapó",
  "Vallenar",
  "La Serena",
  "Caldera",
  "Chañaral",
  "El Salvador",
  "Diego de Almagro",
  "Inca de Oro",
  "Coquimbo"
];

export const testimonials = [
  {
    quote:
      "Excelente servicio, rápido y muy responsable con nuestros documentos corporativos.",
    author: "Cliente corporativo",
    service: "Valijas y documentos",
    rating: "5.0"
  },
  {
    quote:
      "Coordinamos envíos de última milla y siempre recibimos buena atención.",
    author: "Equipo comercial",
    service: "Última milla",
    rating: "4.9"
  },
  {
    quote:
      "Muy confiables para trámites y entregas urgentes entre ciudades.",
    author: "Empresa regional",
    service: "Courier regional",
    rating: "4.8"
  }
];

export const missionValues = [
  "Compromiso",
  "Seguridad",
  "Puntualidad",
  "Cercanía",
  "Responsabilidad"
];

export const branches = [
  {
    city: "Sucursal Copiapó",
    address: "[Dirección pendiente]",
    schedule: "[Horario pendiente]"
  },
  {
    city: "Punto de atención Vallenar",
    address: "[Dirección pendiente]",
    schedule: "[Horario pendiente]"
  },
  {
    city: "Punto La Serena / Coquimbo",
    address: "[Dirección pendiente]",
    schedule: "[Horario pendiente]"
  }
];

export const projects = [
  {
    title: "Entregas corporativas programadas",
    category: "Empresas",
    description:
      "Planificación de retiros y entregas recurrentes para equipos administrativos y comerciales."
  },
  {
    title: "Traslado de valijas empresariales",
    category: "Valijas corporativas",
    description:
      "Movimiento seguro entre puntos de atención, oficinas y zonas operativas."
  },
  {
    title: "Distribución de última milla",
    category: "Última milla",
    description:
      "Entregas locales y regionales para conectar negocios con clientes finales."
  },
  {
    title: "Gestión de trámites y documentos",
    category: "Documentos",
    description:
      "Coordinación ágil para documentos sensibles, trámites y necesidades urgentes."
  },
  {
    title: "Productos valorados regionales",
    category: "Cobertura regional",
    description:
      "Entregas con mayor cuidado, comunicación y control durante todo el recorrido."
  }
];

export const quoteSteps = [
  "Escríbenos por WhatsApp.",
  "Indica origen, destino y tipo de entrega.",
  "Recibe orientación personalizada.",
  "Coordinamos retiro y entrega."
];

export function whatsappLink(type: "quote" | "attention", message: string) {
  const phone = type === "quote" ? brand.whatsapp.quote : brand.whatsapp.attention;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
