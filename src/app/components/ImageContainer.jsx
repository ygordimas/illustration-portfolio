import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ImageContainer({ image, onClick }) {
  return (
    <Link
      href={`/projects/${image.path}`}
      className="group relative overflow-hidden rounded "
      onClick={() => onClick()}
      key={image.id}
    >
      <div className="lg:bg-secondary-400 hidden group-hover:opacity-100 lg:visible lg:absolute lg:flex lg:h-full lg:w-full lg:items-center lg:justify-center lg:rounded lg:opacity-0">
        <p className="bg-primary-500 p-10">{image.type}</p>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="mb-2 rounded"
      />
      <MobileOverlay image={image} onClick={onClick} />
    </Link>
  );
}

const MobileOverlay = ({ image, onClick }) => {
  return (
    <motion.div
      className="absolute left-0 top-0 flex h-full w-full flex-col justify-end "
      onClick={onClick}
    >
      <div className="w-fit rounded-tr-full bg-accent-500 p-8">
        <h2>{image.title}</h2>
        <h3>{image.type}</h3>
      </div>
    </motion.div>
  );
};
