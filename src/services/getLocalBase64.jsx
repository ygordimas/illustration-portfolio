import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

export default async function getBase64(imageUrl) {
  try {
    const file = await fs.readFile(imageUrl);

    const { base64 } = await getPlaiceholder(file);

    return base64;
  } catch (err) {
    console.log(err);
  }
}

// export default async function addBlurredDataUrls(images) {
//   // make all requests at once instead of awaiting each one - avoiding waterfall
//   const base64Promises = images.map((image) => getBase64(image.src));

//   // resolve all requests in order
//   const base64Results = await Promise.all(base64Promises);

//   const imagesWithBlur = images.map((image, i) => {
//     image.blurredDataUrl = base64Results[i];
//     return image;
//   });

//   return imagesWithBlur;
// }
