export default function Tags({ tag, id }) {
  return (
    <div
      key={id}
      className="cursor-default rounded-full bg-accent-600 px-4 font-extralight text-primary-50"
    >
      {tag}
    </div>
  );
}
