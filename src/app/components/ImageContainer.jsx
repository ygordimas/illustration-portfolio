import Image from "next/image";
import Link from "next/link";

export default function ImageContainer({ image, onClick }) {
  return (
    <Link
      href={`/projects/${image.path}`}
      className="group rounded-sm overflow-hidden relative "
      onClick={() => onClick()}
      key={image.id}
    >
      <div className="absolute w-full h-full flex justify-center mb-12 items-center bg-primary-400 opacity-0 group-hover:opacity-100">
        <p className="bg-accent-500 p-10">{image.type}</p>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="mb-10"
      />
    </Link>
  );
}
