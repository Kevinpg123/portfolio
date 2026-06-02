const projects = [
  {
    key: 1,
    title: "JNR Registry System",
    subtitle: "Ministerio de Ecología · Production",
    description:
      "Government web system for managing environmental service payment expedients under the JNR (Jurisdictional and Nested REDD+) program. Designed, built and deployed solo in production on a government VM.",
    featured: true,
    noImage: true,
    live: null,
    github: null,
    highlights: [
      "70+ REST endpoints",
      "Docker Compose — 4 services",
      "JWT auth + role control",
      "PDF generation w/ Puppeteer",
      "13 PostgreSQL models",
    ],
    builtWith: [
      "SiReact",
      "SiRedux",
      "SiNodedotjs",
      "SiExpress",
      "SiPostgresql",
      "SiDocker",
      "SiNginx",
      "SiSequelize",
    ],
  },
  {
    key: 2,
    title: "Vehicle Workshop Manager",
    subtitle: "Taller Boscarol · Freelance",
    description:
      "SPA for vehicle maintenance history management with admin panel, full CRUD and persistent authentication.",
    featured: false,
    noImage: true,
    live: null,
    github: null,
    builtWith: ["SiReact", "SiRedux", "SiJavascript", "SiBootstrap"],
  },
  {
    key: 3,
    title: "Food Express",
    subtitle: "Henry Bootcamp · Team Project",
    description:
      "Restaurant SPA with menu browsing, persistent cart, seat booking and Mercado Pago payment gateway. Led frontend team coordination using Trello.",
    featured: false,
    noImage: false,
    image:
      "https://res.cloudinary.com/ddx1ikpma/image/upload/v1703647150/Captura_de_pantalla_2023-12-18_a_la_s_13.49.04_moeubt.png",
    live: "https://foodexpress-alpha.vercel.app",
    github: "https://github.com/borkoloco/FoodExpress-Front",
    builtWith: [
      "SiJavascript",
      "SiVite",
      "SiBootstrap",
      "SiSequelize",
      "SiMercadopago",
      "SiFirebase",
    ],
  },
  {
    key: 4,
    title: "Dog Breeds App",
    subtitle: "Henry Bootcamp · Solo Project",
    description:
      "App to browse dog breeds, filter by temperament, sort by weight, and create new breeds. Connects to an external API and a custom Express backend.",
    featured: false,
    noImage: false,
    image:
      "https://res.cloudinary.com/dbuua54ib/image/upload/v1714577173/homeDogApp.png",
    live: "https://deploy-app-dog.vercel.app/",
    github: "https://github.com/Kevinpg123/deployAppDog",
    builtWith: ["SiJavascript", "SiSequelize", "SiReact"],
  },
];

export default projects;
