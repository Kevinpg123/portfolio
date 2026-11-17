// Datos que no dependen del idioma: links, imágenes, stacks.

export const profile = {
  name: "Kevin Osmar Pauluk",
  shortName: "Kevin Pauluk",
  email: "osmarkevinp@gmail.com",
  linkedin: "https://www.linkedin.com/in/kevin-pauluk/",
  github: "https://github.com/Kevinpg123",
  cv: "/cv/Kevin_Pauluk_CV.pdf",
  efset: "https://cert.efset.org/es/E5615S",
};

// `id` coincide con la clave en translations.projects.items
// `status`: "production" | "inProgress" | "exploratory"
export const projects = [
  {
    id: "jnr",
    status: "production",
    featured: true,
    link: "https://registrojnr.ecologia.misiones.gob.ar/",
    image: "/projects/registro-jnr.png",
    stack: [
      "React 18", "Redux", "Vite", "Node.js", "Express", "Sequelize",
      "PostgreSQL", "Docker", "Nginx", "JWT", "Puppeteer", "Nodemailer",
    ],
  },
  {
    id: "fires",
    status: "production",
    featured: true,
    link: null,
    image: "/projects/alertas-focos-calor.png",
    stack: ["Node.js", "NASA FIRMS API", "Turf.js", "GeoJSON", "SQLite", "Pino", "Docker"],
  },
  {
    id: "qgis",
    status: "inProgress",
    featured: false,
    link: null,
    image: "/projects/plugin-qgis-jnr.png",
    stack: ["Python", "PyQGIS", "QGIS", "EPSG:22177"],
  },
  {
    id: "deforestation",
    status: "exploratory",
    featured: false,
    link: null,
    image: "/projects/monitoreo-deforestacion.png",
    stack: ["Google Earth Engine", "DIST-ALERT"],
  },
];

// Las claves coinciden con translations.skills.groups
export const skills = {
  frontend: ["React 18", "Redux", "Vite", "React Router", "Axios", "JavaScript", "HTML5", "CSS Modules", "Bootstrap 5"],
  backend: ["Node.js", "Express", "Sequelize ORM"],
  databases: ["PostgreSQL", "SQLite"],
  devops: ["Docker", "Docker Compose", "Nginx", "Ubuntu Server"],
  geo: ["QGIS", "PyQGIS", "Google Earth Engine", "Turf.js", "GeoJSON", "Shapefiles"],
  integrations: ["Nodemailer/SMTP", "Puppeteer", "JWT", "NASA FIRMS API"],
  learning: ["Python", "TypeScript", "AWS", "Kubernetes", "CI/CD"],
};

// Stack por experiencia (mismo orden que translations.experience.items)
export const experienceStacks = [
  ["React 18", "Redux", "Node.js", "Express", "PostgreSQL", "Docker", "Nginx", "Turf.js", "QGIS"],
  ["React", "Redux", "JavaScript", "Bootstrap"],
];
