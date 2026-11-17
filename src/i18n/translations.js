// Todos los textos del sitio, en español e inglés.
// Para editar contenido, cambiá solo este archivo.

const es = {
  meta: {
    title: "Kevin Pauluk · Desarrollador Fullstack · Geoespacial",
    description:
      "Desarrollador Fullstack con experiencia en sistemas web gubernamentales en producción y procesamiento de datos geoespaciales. React, Node.js, PostgreSQL, Docker y QGIS.",
  },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    education: "Formación",
    contact: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toLight: "Cambiar a modo claro",
    toDark: "Cambiar a modo oscuro",
    langLabel: "Idioma",
    skip: "Saltar al contenido",
  },
  hero: {
    greeting: "Hola, soy",
    role: "Desarrollador Fullstack · Geoespacial",
    tagline:
      "Construyo sistemas web en producción para la gestión ambiental, con React, Node.js y datos geoespaciales.",
    location: "Posadas, Misiones, Argentina",
    remote: "Disponible para trabajo remoto",
    ctaProjects: "Ver proyectos",
    ctaCv: "Descargar CV",
  },
  about: {
    title: "Sobre mí",
    photoAlt: "Foto de Kevin Pauluk",
    paragraphs: [
      "Soy desarrollador Fullstack con más de dos años de experiencia en producción real en el sector ambiental. Diseñé, desarrollé y desplegué sistemas web gubernamentales completos, la mayor parte del tiempo como único desarrollador del área.",
      "Entre ellos, una plataforma de gestión con una API REST de más de 70 endpoints y un sistema de alertas geoespaciales en tiempo real integrado con la API de NASA FIRMS.",
      "Trabajo con soltura en JavaScript, React y Node.js, y tengo experiencia procesando datos geoespaciales con GeoJSON, Turf.js y QGIS. Hoy estoy desarrollando un plugin para QGIS en Python.",
    ],
  },
  experience: {
    title: "Experiencia",
    present: "actualidad",
    items: [
      {
        role: "Desarrollador Fullstack",
        company: "Ministerio de Ecología y Recursos Naturales Renovables de Misiones",
        period: "08/2024 – actualidad",
        type: "Tiempo completo",
        description:
          "Desarrollo y mantenimiento de sistemas web gubernamentales en producción para la gestión ambiental de la provincia. Durante la mayor parte del tiempo fui el único desarrollador del área; desde hace unos meses trabajo junto a otro desarrollador.",
      },
      {
        role: "Frontend Developer",
        company: "Taller Boscarol",
        period: "03/2024 – 05/2024",
        type: "Freelance",
        description:
          "SPA en React/Redux para gestionar el historial de mantenimiento de vehículos, con panel de administrador y autenticación persistente.",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    intro:
      "Sistemas en los que trabajé en el Ministerio de Ecología de Misiones. Varios son internos, por eso no todos tienen un enlace público.",
    visit: "Ver sitio",
    noLink: "Sistema interno · sin enlace público",
    inProgress: "En desarrollo",
    exploratory: "Exploratorio",
    production: "En producción",
    stack: "Stack",
    imageAlt: "Captura de",
    items: {
      jnr: {
        title: "Registro JNR",
        subtitle: "Jurisdictional and Nested REDD+",
        description:
          "Plataforma de pagos por conservación de bosque nativo.",
        highlights: [
          "API REST con más de 70 endpoints sobre una arquitectura containerizada con Docker Compose (React/Nginx, Node/Express, PostgreSQL) desplegada en Ubuntu Server.",
          "Autenticación con JWT (access y refresh tokens), bcrypt, verificación por email y control de roles.",
          "Flujo de aprobación entre áreas (jurídica, técnica y contable) con informes PDF generados del lado del servidor con Puppeteer y control de concurrencia.",
          "Carga masiva de datos técnicos forestales por CSV, con validaciones, versionado y trazabilidad.",
          "Mensajería entre administradores y usuarios con adjuntos y notificaciones en tiempo real y por email.",
          "Seguridad: protección contra path traversal, validación de archivos, CORS y control de acceso por roles.",
          "Integración con una API de simulación de beneficios desarrollada por otro integrante del equipo.",
        ],
      },
      fires: {
        title: "Sistema de alertas de focos de calor",
        subtitle: "Migración de Java a Node.js",
        description:
          "Detecta focos de calor en las Áreas Naturales Protegidas de Misiones y avisa automáticamente a quienes tienen que actuar.",
        highlights: [
          "Consulta periódica a la API de NASA FIRMS (satélites VIIRS).",
          "Procesamiento geoespacial con Turf.js y GeoJSON: puntos dentro de polígonos, buffers y proximidad a elementos sensibles.",
          "Notificaciones automáticas por WhatsApp a guardaparques y administradores según el área afectada.",
          "Deduplicación con SQLite, logs con Pino y despliegue dockerizado.",
          "Provee los datos de focos de calor a otro sitio del ministerio para su visualización.",
        ],
      },
      qgis: {
        title: "Plugin QGIS del programa JNR",
        subtitle: "De Google Earth Engine a PyQGIS",
        description:
          "Migración de una aplicación de Google Earth Engine (JavaScript) a un plugin de QGIS en Python que calcula, por parcela, la pérdida de bosque nativo y el pago por conservación de cada beneficiario.",
        highlights: [
          "Cálculo vectorial exacto en base de datos sobre el parcelario de toda la provincia (EPSG:22177), en lugar de la rasterización por píxeles de Earth Engine.",
          "Validación de resultados contra el sistema original, que permitió detectar errores del cálculo previo: pérdidas superpuestas contadas dos veces y áreas sobreestimadas por la rasterización.",
          "Parámetros configurables por convocatoria, sin necesidad de recalcular geometrías.",
        ],
      },
      deforestation: {
        title: "Prototipo de monitoreo de deforestación",
        subtitle: "Google Earth Engine · DIST-ALERT",
        description:
          "Prototipo exploratorio que procesa alertas satelitales de perturbación de la vegetación (DIST-ALERT) en Google Earth Engine, con el objetivo de detectar deforestación de bosque nativo.",
        highlights: [],
      },
    },
  },
  skills: {
    title: "Habilidades",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de datos",
      devops: "DevOps",
      geo: "Geoespacial",
      integrations: "Integraciones",
      learning: "Aprendiendo",
    },
  },
  education: {
    title: "Formación e idiomas",
    studies: "Formación",
    languagesTitle: "Idiomas",
    items: [
      {
        title: "Full Stack Web Developer",
        place: "Henry Bootcamp",
        period: "2023 – 2024",
        detail: "800 horas, metodología SCRUM.",
      },
      {
        title: "Gestión integral de incendios forestales mediante el uso de la plataforma Google Earth Engine",
        place: "",
        period: "En curso",
        detail: "",
      },
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "C1 Avanzado · EF SET 61/100", cert: "Ver certificado" },
      { name: "Alemán", level: "A1 Básico" },
    ],
  },
  contact: {
    title: "Contacto",
    text: "¿Tenés un proyecto o una búsqueda en mente? Escribime por email o LinkedIn.",
    email: "Enviar email",
  },
  footer: {
    rights: "Hecho con React y Vite.",
    top: "Volver arriba",
  },
};

const en = {
  meta: {
    title: "Kevin Pauluk · Fullstack Developer · Geospatial",
    description:
      "Fullstack developer with hands-on experience shipping government web systems to production and processing geospatial data. React, Node.js, PostgreSQL, Docker and QGIS.",
  },
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    langLabel: "Language",
    skip: "Skip to content",
  },
  hero: {
    greeting: "Hi, I'm",
    role: "Fullstack Developer · Geospatial",
    tagline:
      "I build production web systems for environmental management, using React, Node.js and geospatial data.",
    location: "Posadas, Misiones, Argentina",
    remote: "Open to remote work",
    ctaProjects: "View projects",
    ctaCv: "Download CV",
  },
  about: {
    title: "About me",
    photoAlt: "Photo of Kevin Pauluk",
    paragraphs: [
      "I'm a Fullstack developer with over two years of real production experience in the environmental sector. I've designed, built and deployed complete government web systems, most of the time as the only developer on the team.",
      "These include a management platform backed by a REST API with 70+ endpoints, and a real-time geospatial alert system integrated with NASA's FIRMS API.",
      "I'm comfortable across JavaScript, React and Node.js, and I have experience processing geospatial data with GeoJSON, Turf.js and QGIS. I'm currently building a QGIS plugin in Python.",
    ],
  },
  experience: {
    title: "Experience",
    present: "present",
    items: [
      {
        role: "Fullstack Developer",
        company: "Ministry of Ecology and Renewable Natural Resources of Misiones",
        period: "08/2024 – present",
        type: "Full-time",
        description:
          "I build and maintain government web systems running in production for the province's environmental management. For most of my time there I was the team's only developer; a few months ago a second developer joined me.",
      },
      {
        role: "Frontend Developer",
        company: "Taller Boscarol",
        period: "03/2024 – 05/2024",
        type: "Freelance",
        description:
          "React/Redux SPA to track vehicle maintenance history, with an admin panel and persistent authentication.",
      },
    ],
  },
  projects: {
    title: "Projects",
    intro:
      "Systems I've worked on at the Ministry of Ecology of Misiones. Several of them are internal, so not all have a public link.",
    visit: "Visit site",
    noLink: "Internal system · no public link",
    inProgress: "In progress",
    exploratory: "Exploratory",
    production: "In production",
    stack: "Stack",
    imageAlt: "Screenshot of",
    items: {
      jnr: {
        title: "JNR Registry",
        subtitle: "Jurisdictional and Nested REDD+",
        description:
          "A payments platform that rewards the conservation of native forest.",
        highlights: [
          "REST API with 70+ endpoints on a containerized Docker Compose architecture (React/Nginx, Node/Express, PostgreSQL) deployed on Ubuntu Server.",
          "JWT authentication (access and refresh tokens), bcrypt, email verification and role-based access.",
          "Multi-department approval workflow (legal, technical and accounting) with server-side PDF reports generated with Puppeteer and concurrency control.",
          "Bulk upload of forestry technical data via CSV, with validation, versioning and full traceability.",
          "Admin-to-user messaging with attachments, plus real-time and email notifications.",
          "Security: path traversal protection, file validation, CORS and role-based access control.",
          "Integration with a benefits simulation API built by another team member.",
        ],
      },
      fires: {
        title: "Wildfire hotspot alert system",
        subtitle: "Java to Node.js migration",
        description:
          "Detects heat hotspots inside the Protected Natural Areas of Misiones and automatically alerts the people who need to act.",
        highlights: [
          "Periodically queries NASA's FIRMS API (VIIRS satellites).",
          "Geospatial processing with Turf.js and GeoJSON: point-in-polygon, buffers and proximity to sensitive features.",
          "Automatic WhatsApp notifications to park rangers and administrators based on the affected area.",
          "Deduplication with SQLite, logging with Pino and Docker-based deployment.",
          "Feeds hotspot data to another ministry website for visualization.",
        ],
      },
      qgis: {
        title: "JNR program QGIS plugin",
        subtitle: "From Google Earth Engine to PyQGIS",
        description:
          "Porting a Google Earth Engine app (JavaScript) to a QGIS plugin in Python that calculates, for each land parcel, native forest loss and the conservation payment owed to each beneficiary.",
        highlights: [
          "Exact vector calculations in the database over the province-wide parcel layer (EPSG:22177), replacing Earth Engine's pixel-based rasterization.",
          "Results validated against the original system, which surfaced errors in the previous calculation: overlapping losses counted twice and areas overestimated by rasterization.",
          "Per-call parameters are configurable without recomputing geometries.",
        ],
      },
      deforestation: {
        title: "Deforestation monitoring prototype",
        subtitle: "Google Earth Engine · DIST-ALERT",
        description:
          "An exploratory prototype that processes satellite vegetation disturbance alerts (DIST-ALERT) in Google Earth Engine, aiming to detect native forest clearing.",
        highlights: [],
      },
    },
  },
  skills: {
    title: "Skills",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      devops: "DevOps",
      geo: "Geospatial",
      integrations: "Integrations",
      learning: "Currently learning",
    },
  },
  education: {
    title: "Education & languages",
    studies: "Education",
    languagesTitle: "Languages",
    items: [
      {
        title: "Full Stack Web Developer",
        place: "Henry Bootcamp",
        period: "2023 – 2024",
        detail: "800 hours, SCRUM methodology.",
      },
      {
        title: "Integrated wildfire management using Google Earth Engine",
        place: "",
        period: "In progress",
        detail: "",
      },
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "C1 Advanced · EF SET 61/100", cert: "View certificate" },
      { name: "German", level: "A1 Beginner" },
    ],
  },
  contact: {
    title: "Contact",
    text: "Have a project or a role in mind? Reach out by email or on LinkedIn.",
    email: "Send an email",
  },
  footer: {
    rights: "Built with React and Vite.",
    top: "Back to top",
  },
};

export const translations = { es, en };
export const LANGS = ["es", "en"];
