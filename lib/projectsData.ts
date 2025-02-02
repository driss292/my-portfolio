export const projectsData = [
  {
    id: 1,
    title: "Poker Odds Calculator",
    description: " Calculateur de probabilités au poker.",
    type: "Projet perso",
    image: "/poker-odds.png",
    stack: [
      {
        id: 1,
        src: "/icon/re.svg",
        alt: "ReactJS",
        name: "ReactJS",
      },
      { id: 2, src: "/icon/ts.svg", alt: "TypeScript", name: "TypeScript" },
      { id: 3, src: "/icon/CSS.svg", alt: "CSS", name: "CSS" },
      {
        id: 4,
        src: "/icon/chrome.svg",
        alt: "Chrome tools",
        name: "Chrome tools",
      },
    ],
    githubLink: "https://github.com/driss292/poker-odds-calculator",
  },
  {
    id: 2,
    title: "Malin & Demi",
    description: "Site de vente de meubles d'occasion",
    type: "Projet groupe",
    image: "/waiting.png",
    stack: [
      {
        id: 1,
        src: "/icon/angular.svg",
        alt: "Angular",
        name: "Angular",
      },
      { id: 2, src: "/icon/tail.svg", alt: "TailwindCSS", name: "TailwindCSS" },
      {
        id: 3,
        src: "/icon/SpringBoot.svg",
        alt: "Spring-Boot",
        name: "Spring-Boot",
      },
      { id: 4, src: "/icon/mysql.svg", alt: "MySql", name: "MySql" },
    ],
    githubLink: "https://github.com/driss292/MalinEtDemi",
  },
  {
    id: 3,
    title: "Claire dans les nuages",
    description: "Portfolio de Claire Chevalier",
    type: "Projet perso",
    image: "/test-CC.png",
    stack: [
      { id: 1, src: "/icon/next.svg", alt: "Next.js", name: "Next.js" },
      { id: 2, src: "/icon/ts.svg", alt: "TypeScript", name: "TypeScript" },
      { id: 3, src: "/icon/tail.svg", alt: "TailwindCSS", name: "TailwindCSS" },
      {
        id: 4,
        src: "/icon/fm.svg",
        alt: "Framer Motion",
        name: "Framer Motion",
      },
    ],
    githubLink: "https://github.com/driss292/ClaireDansLesNuages",
  },
  // {
  //   id: 4,
  //   title: "test-4",
  //   description: "Description du quatrième projet",
  //   type: "perso",
  //   image: "/project_img.jpg",
  //   stack: ["/icons/next.svg", "/icons/react.svg", "/icons/tailwind.svg"],
  // githubLink: "",
  // },
];

// {projectsData.map((project) => (
//   <div key={project.id} className="project-card">
//     <h2>{project.title}</h2>
//     <p>{project.description}</p>
//     <img src={project.image} alt={`${project.title} preview`} />

//     {/* Affichage des icônes stack */}
//     <div className="stack-icons flex gap-2">
//       {project.stack.map((iconPath, index) => (
//         <img
//           key={index}
//           src={iconPath}
//           alt={`Tech stack ${index + 1}`}
//           className="w-6 h-6" // Taille de l'icône (modifiable)
//         />
//       ))}
//     </div>
//   </div>
// ))}
