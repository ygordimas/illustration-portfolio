import Image from "next/image";
import Link from "next/link";

export default function ImageContainer({ image, onClick }) {
  return (
    <Link
      href={`/projects/${image.path}`}
      className="group rounded overflow-hidden relative "
      onClick={() => onClick()}
      key={image.id}
    >
      <div className="hidden lg:visible lg:absolute lg:rounded lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center lg:bg-secondary-400 lg:opacity-0 group-hover:opacity-100">
        <p className="bg-primary-500 p-10">{image.type}</p>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="mb-2 rounded"
      />
    </Link>
  );
}
