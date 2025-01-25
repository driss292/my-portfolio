import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { projectsData } from "@/lib/projectsData";

export default function Projects() {
  return (
    <section
      className="flex items-center justify-center min-h-screen px-4 py-20 md:px-6"
      id="projects"
    >
      <div className="w-full max-w-6xl mx-auto mt-12">
        <h2 className="mb-12 text-3xl font-bold text-center">
          <span className="border-b-2 border-pink-600">Mes Projets</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>Project {project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <Image
                  src={project.image}
                  alt={`Project ${project.title}`}
                  width={400}
                  height={200}
                  className="object-cover w-full h-48 mb-4 rounded-md"
                />
                <p className="flex-grow mb-4 text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button className="w-full mt-auto">View Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
