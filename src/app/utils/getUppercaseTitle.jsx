export default function getUppercaseTitle(path) {
  const words = path?.split("-");

  const title = words
    ?.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return title;
}
