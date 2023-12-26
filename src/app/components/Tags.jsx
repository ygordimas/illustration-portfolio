export default function Tags({ tag, id }) {
  return (
    <div
      key={id}
      className="px-2 rounded-xl border-accent-100 border-2 cursor-default"
    >
      {tag}
    </div>
  );
}
