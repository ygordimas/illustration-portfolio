export default function Tags({ tag, id }) {
  return (
    <div
      key={id}
      className="relative cursor-default rounded-lg border-2 border-myyellow-500 bg-mygreen-500 px-1 py-0.5 font-mainfont text-base  font-light tracking-wide text-myblue-800 md:py-1"
    >
      {tag}
    </div>
  );
}
