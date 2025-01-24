import Image from "next/image";

export default function About() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4  py-20 md:px-6 bg-[#0b192e]/50"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">
          <span className="border-b-2 border-pink-600">À propos de moi</span>
        </h2>
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-lg">
              Après des expériences variées dans le transport de marchandises,
              le poker et la distribution automatique, j&apos;ai découvert une
              passion pour le développement informatique. Curieux et polyvalent,
              j&apos;ai entrepris une reconversion professionnelle et suis
              actuellement en formation chez Ada Tech School, où je développe
              mes compétences au sein d&apos;un environnement collaboratif et
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
          <div className="grid grid-cols-2 gap-4 h-[80%]">
            <Image
              src="/camion.jpg"
              alt="Photo 1"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-lg"
            />
            <Image
              src="/croupier.jpg"
              alt="Photo 2"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-lg"
            />
            <Image
              src="/cafe.jpg"
              alt="Photo 3"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-lg"
            />
            <Image
              src="/code.jpeg"
              alt="Photo 3"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
