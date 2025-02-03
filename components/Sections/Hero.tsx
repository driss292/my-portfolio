import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-[100vh] flex items-center justify-center py-8 px-4 md:px-12"
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
            <p className="mb-2 text-xl text-center md:text-2xl">
              Recherche alternance Développeur FullStack
            </p>
            <p className="mb-8 text-m text-center md:text-xl">
              Début : mars 2025 - 4 jours en entreprise / 1 jour école
            </p>
            <div className="flex justify-center space-x-8 md:justify-center">
              <Link
                href="https://github.com/driss292"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  className="bg-[#333] hover:bg-[#595555] w-24 h-16"
                >
                  {/* <Github style={{ width: "36px", height: "36px" }} /> */}
                  <FaGithub style={{ width: "36px", height: "36px" }} />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/driss-kaci-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  className="bg-[#2563eb] hover:bg-[#5177c9] w-24 h-16"
                >
                  <FaLinkedinIn style={{ width: "36px", height: "36px" }} />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link
                href="https://drive.google.com/file/d/15fJtweXcdF135gKJm378Y-4WXgfd8xwp/view?usp=sharing"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  className="bg-[#ffbc02] hover:bg-[#e2c36ec3] w-24 h-16"
                >
                  <SiReaddotcv
                    style={{ width: "36px", height: "36px", color: "black" }}
                  />
                  <span className="sr-only">Mon CV</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
