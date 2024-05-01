import react from "react";
import img from '../assets/images/perros.png'

const projects = [
  {
    key: 1,
    title: "Food Express App",
    description:
      "Restaurant application where you can use different services such as selecting the menu and booking your seat and pay the whole thing before arriving",
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
      "SiDotenv",
    ],
  },
  {
    key: 2,
    title: "Dog's App",
    description:
    "Aplication where you can see many dog's breed, order them by weight and filter them by temperament. Also you can create new dog's breed",
    image:
      "https://res.cloudinary.com/dbuua54ib/image/upload/v1714577173/homeDogApp.png",
    live: "https://deploy-app-dog.vercel.app/",
    github: "https://github.com/Kevinpg123/deployAppDog",
    builtWith: [
      "SiJavascript",
      "SiSequelize",
      "SiDotenv",
      "SiReact"
    ],
  },
  
  
];

export default projects;
