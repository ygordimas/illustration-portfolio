export default function Tags({ tag, id }) {
  return (
    <div
      key={id}
      className="cursor-default rounded-xl bg-primary-400 px-2 font-normal text-primary-50"
    >
      {tag}
    </div>
  );
}
