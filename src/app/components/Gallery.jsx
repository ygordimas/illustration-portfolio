import Image from "next/image";
import ImageContainer from "./ImageContainer";

export default async function Gallery({ illustrations }) {
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {illustrations.map((illustration) => (
        <ImageContainer image={illustration} />
      ))}
    </section>
  );
}
