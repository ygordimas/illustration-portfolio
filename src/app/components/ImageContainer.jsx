import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

export default async function ImageContainer({ image }) {
  const buffer = await fs.readFile(`./public${image.src}`);
  const { base64 } = await getPlaiceholder(buffer);
  return (
    <div
      key={image.id}
      className="h-80 bg-gray-200 rounded-lg relative overflow-hidden group"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill={true}
        sizes="(min-width: 2960px) calc(15vw - 42px), (min-width: 2540px) 16.5vw, (min-width: 2140px) calc(20vw - 26px), (min-width: 1720px) calc(25vw - 30px), (min-width: 1320px) calc(33.16vw - 35px), (min-width: 920px) calc(50vw - 52px), (min-width: 540px) calc(100vw - 96px), calc(10.91vw + 367px)"
        className="object-cover group-hover:opacity-75"
        placeholder="blur"
        blurDataURL={base64}
      />
    </div>
  );
}
