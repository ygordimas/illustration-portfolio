import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillCloseCircle,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Tags from "../components/Tags";

export default function ProjectBreakdown({ project }) {
  const uppercasedTitle = (path) => {
    const words = path.split("-");

    const title = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    return title;
  };

  return (
    <main className="flex flex-col items-center text-accent-400">
      <section className="flex justify-between w-[100%]">
        <div>
          <h2 className="text-2xl">{uppercasedTitle(project.path)}</h2>
          <p>{project.type}</p>
        </div>
        <nav className="flex text-5xl">
          <Link href={"#"}>
            <AiOutlineArrowLeft />
          </Link>

          <Link href={"#"}>
            <AiOutlineArrowRight />
          </Link>
        </nav>
      </section>

      <div className="self-start">
        <p>{project.description}</p>
        <div className="flex">
          {project.tools.map((tag) => (
            <Tags tag={tag} />
          ))}
        </div>
      </div>

      <div className=" flex justify-center">
        <Image
          src={project.src}
          alt={project.alt}
          width={project.width}
          height={project.height}
          className="pt-4"
        />
      </div>
    </main>
  );
}
