export const projectsData = [
  {
    id: 1,
    title: "test-1",
    description: "Description du troisième projet",
    type: "Groupe",
    image: "/project_img.jpg",
    stack: ["/icons/next.svg", "/icons/react.svg", "/icons/tailwind.svg"],
    // githubLink: "",
    // deployLink: "",
  },
  {
    id: 2,
    title: "test-2",
    description: "Description du deuxième projet",
    type: "Perso",
    image: "/project_img.jpg",
    stack: ["/icons/next.svg", "/icons/react.svg", "/icons/tailwind.svg"],
    //   // githubLink: "",
    //   // deployLink: "",
  },
  {
    id: 3,
    title: "test-3",
    description: "Description du troisième projet",
    type: "perso",
    image: "/project_img.jpg",
    stack: ["/icons/next.svg", "/icons/react.svg", "/icons/tailwind.svg"],
    // githubLink: "",
    // deployLink: "",
  },
  {
    id: 4,
    title: "test-4",
    description: "Description du quatrième projet",
    type: "perso",
    image: "/project_img.jpg",
    stack: ["/icons/next.svg", "/icons/react.svg", "/icons/tailwind.svg"],
    // githubLink: "",
    // deployLink: "",
  },
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
