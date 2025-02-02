import Image from "next/image";

type StackItem = {
  id: number;
  src: string;
  alt: string;
  name: string;
};

type StackContainerProps = {
  stacks: StackItem[]; // Définition du tableau d'objets StackItem
};

export default function StackContainer({ stacks }: StackContainerProps) {
  return (
    <div className="flex items-center">
      {stacks.map((avatar) => (
        <div
          key={avatar.id}
          className={`
              relative
            bg-[#182940]
              w-12 h-12
              md:w-10 md:h-10
              rounded-full
              overflow-hidden
              border
              border-[#182940]
              hover:-translate-y-1
              transition-transform
              duration-200
              ease-in-out
              -mr-2
              hover:z-10
            `}
        >
          <Image
            width={40}
            height={40}
            src={avatar.src}
            alt={avatar.alt}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
