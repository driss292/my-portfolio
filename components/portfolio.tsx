"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#0b192e] text-[#ccd6f6]">
      {/* Navigation Bar */}
      <nav className="bg-[#0b192e]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0b192e]/60 sticky top-0 z-50 w-full border-b border-pink-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center flex-shrink-0">
                <Link href="#hero" className="text-2xl font-bold">
                  DK
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="#hero"
                className="relative inline-flex items-center px-1 pt-1 text-lg font-medium group"
              >
                Accueil
                <span className="absolute bottom-3 left-0 h-[3px] w-full bg-pink-600 scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="#about"
                className="relative inline-flex items-center px-1 pt-1 text-lg font-medium group"
              >
                À propos
                <span className="absolute bottom-3 left-0 h-[3px] w-full bg-pink-600 scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="#projects"
                className="relative inline-flex items-center px-1 pt-1 text-lg font-medium group"
              >
                Projets
                <span className="absolute bottom-3 left-0 h-[3px] w-full bg-pink-600 scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="#contact"
                className="relative inline-flex items-center px-1 pt-1 text-lg font-medium group"
              >
                Contact
                <span className="absolute bottom-3 left-0 h-[3px] w-full bg-pink-600 scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100"></span>
              </Link>
            </div>
            <div className="flex items-center -mr-2 sm:hidden">
              <Button
                variant="ghost"
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="#hero"
                className="block py-2 pl-3 pr-4 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block py-2 pl-3 pr-4 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="block py-2 pl-3 pr-4 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-[100vh] flex items-center justify-center py-8 px-4 md:px-12 border-b border-pink-600"
        id="hero"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
            <div className="md:order-2 md:ml-8">
              <Image
                src="/PPDK.jpeg"
                alt="Driss Kaci"
                width={450}
                height={450}
                className="border-4 border-pink-600 rounded-full"
              />
            </div>
            <div className="text-center md:order-1 md:text-left">
              <h1 className="mb-4 text-4xl font-bold text-center md:text-6xl">
                Driss Kaci
              </h1>
              <p className="mb-8 text-xl text-center md:text-2xl">
                Développeur Web FullStack
              </p>
              <div className="flex justify-center space-x-8 md:justify-center">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="icon"
                    className="bg-[#333] hover:bg-[#333]/50 w-24 h-16"
                  >
                    <Github style={{ width: "36px", height: "36px" }} />
                    {/* <FaGithub style={{ width: "36px", height: "36px" }} /> */}
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="icon"
                    className="bg-[#2563eb] hover:bg-[#2563eb]/50 w-24 h-16"
                  >
                    {/* <Linkedin style={{ width: "36px", height: "36px" }} /> */}
                    <FaLinkedinIn style={{ width: "36px", height: "36px" }} />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:jane@example.com">
                  <Button
                    size="icon"
                    className="bg-[#6fc2b0] hover:bg-[#6fc2b0]/50  w-24 h-16"
                  >
                    <Mail style={{ width: "36px", height: "36px" }} />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="min-h-screen flex items-center justify-center py-20 px-4 md:px-6 bg-[#0b192e]/50 border-b border-pink-600"
        id="about"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">
            À propos de moi
          </h2>
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-lg">
                Après des expériences variées dans le transport, le poker et la
                distribution automatique, j&apos;ai découvert une passion pour
                le développement informatique. Curieux et polyvalent, j&apos;ai
                entrepris une reconversion professionnelle et suis actuellement
                en formation chez Ada Tech School, où je développe mes
                compétences au sein d&apos;un environnement collaboratif et
                bienveillant.
              </p>
              <p className="text-lg">
                Mon parcours atypique m&apos;a permis de développer une grande
                adaptabilité et une capacité à relever des défis variés. Je suis
                enthousiaste à l&apos;idée d&apos;appliquer ces compétences dans
                le domaine du développement web et de contribuer à des projets
                innovants.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/PPDK.jpeg"
                alt="Photo 1"
                width={300}
                height={300}
                className="object-cover w-full h-full rounded-lg"
              />
              <Image
                src="/PPDK.jpeg"
                alt="Photo 2"
                width={300}
                height={300}
                className="object-cover w-full h-full rounded-lg"
              />
              <Image
                src="/PPDK.jpeg"
                alt="Photo 3"
                width={300}
                height={300}
                className="object-cover w-full h-full col-span-2 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="flex items-center justify-center min-h-screen px-4 py-20 border-b border-pink-600 md:px-6"
        id="projects"
      >
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">
            <span className="border-b-2 border-pink-600">Mes Projets</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <Card key={project} className="flex flex-col">
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>A short project description</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <Image
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Project ${project}`}
                    width={400}
                    height={200}
                    className="object-cover w-full h-48 mb-4 rounded-md"
                  />
                  <p className="flex-grow mb-4 text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button className="w-full mt-auto">View Project</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section
        className="min-h-screen flex items-center justify-center py-20 px-4 md:px-6 bg-[#0b192e]/50 border-b border-pink-600"
        id="contact"
      >
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center">Contact</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input type="text" placeholder="Prénom" />
              <Input type="text" placeholder="Nom" />
            </div>
            <Input type="email" placeholder="Email" />
            <Textarea rows={15} placeholder="Votre Message" />
            <Button
              type="submit"
              className="flex items-center px-4 py-3 mx-auto my-8 text-white border-2 hover:bg-pink-600 hover:border-pink-600"
            >
              Envoyer
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-[#ccd6f6]/70">
        © {new Date().getFullYear()} Driss Kaci | All rights reserved.
      </footer>
    </div>
  );
}
