import { projectsData } from "@/lib/projectsData";
import Image from "next/image";
import Link from "next/link";
import StackContainer from "../ui/stackContainer";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      className="flex w-full items-start justify-center min-h-screen px-4 py-20 md:px-6"
      id="projects"
    >
      <div className="w-full max-w-6xl mx-auto mt-28">
        <h2 className="mb-12 text-3xl font-bold text-center">
          <span className="border-b-2 border-pink-600">Mes Projets</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 h-16 w-16">
                <div className="absolute transform rotate-45 bg-blue-700 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
                  {project.type}
                </div>
              </div>
              <Image
                width={250}
                height={50}
                className="rounded-t-lg object-cover w-full"
                src={project.image}
                alt={`Project ${project.title}`}
              />
              <div className="bg-[#182940] px-3 py-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#ccd6f6] md:text-sm lg:text-xl xl:text-2xl">
                  {project.title}
                </h5>
                <p className="mb-3 font-normal text-[#ccd6f6] md:text-xs lg:text-sm xl:text-xl">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <div className="w-1/2">
                    <StackContainer stacks={project.stack} />
                  </div>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:max-w-1/2 md:max-w-20 inline-flex items-center md:text-xs  px-2 py-2 text-sm font-bold text-center text-black bg-[#ccd6f6] rounded-lg hover:bg-[#dee4f8] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Voir plus{" "}
                    <FaGithub
                      style={{
                        width: "24px",
                        height: "36px",
                        marginLeft: "5px",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
