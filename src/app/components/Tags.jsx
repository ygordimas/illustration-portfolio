export default function Tags({ tag, id }) {
  return (
    <div
      key={id}
      className="cursor-default rounded-xl border-2 border-accent-100 px-2"
    >
      {tag}
    </div>
  );
}
