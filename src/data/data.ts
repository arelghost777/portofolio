// src/data/data.ts
type Project = {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    overview_image: string;
    preview: string;
    github: string;
    overview: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "GHOTIK",
    description: "Expérience d'achat minimaliste pour consoles de jeux.",
    tech: ["Next.js", "Tailwind CSS","Vercel","GitHub","Git"],
    image: "/ecom.png",
    overview_image: "/ghotik.png",
    preview: "https://ps5ecom.vercel.app/",
    github: "https://github.com/arelghost777/ecom",
    overview: "GHOTIK is a e-commerce landing page with my Frontend Web Development skills to build it online presence and make it stand out and provide a better user experience for all types of devices. I took User Interface ideas by visiting different types of websites of the same industry and even use UI library for building a good User Interface. Feel free to check out the Project by visiting the Live Link.",
  },
  {
    id: 2,
    title: "NFT World",
    description: "Intégration pixel-perfect d'une maquette haute fidélité.",
    tech: ["Next.js", "Tailwind CSS","Vercel","GitHub","Git"],
    image: "/landing.png",
    overview_image: "/nft.png",
    preview: "https://landingpage-iota-lovat.vercel.app/",
    github: "https://github.com/arelghost777/landing",
    overview: "NFT World is a landing page for a fictional NFT project. I built it using Next.js and Tailwind CSS, focusing on creating a visually appealing and responsive design. The project showcases my ability to translate a high-fidelity design into a functional web page while ensuring optimal performance and user experience. Feel free to explore the live version of the project to see the details and animations in action.",
  },
//   {
//     id: 3,
//     title: "Flex Wallet",
//     description: "Système de transfert de monnaie fictive avec dashboard admin.",
//     tech: ["Next.js", "Supabase", "TypeScript","Vercel","GitHub","Git"],
//     image: "/img2.png",
//     preview: "https://flexwallet-ochre.vercel.app/",
//     github: "https://github.com/arelghost777/demo",
//     overview: "Système de transfert de monnaie fictive avec dashboard admin.",
//   }
];