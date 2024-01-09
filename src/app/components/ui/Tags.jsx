export default function Tags({ tag, id }) {
  return (
    <div
      key={id}
      className="relative cursor-default rounded-full border-2 border-myblue-950 bg-mygreen-500 px-2 py-2 font-singo text-2xl font-normal tracking-wide text-myblue-950 md:px-4 md:py-2 md:text-xl"
    >
      {tag}
      <div className="absolute -bottom-[100%] left-0 -z-10 h-full w-full -translate-y-[80%] scale-[95%] rounded-full bg-mypink-500"></div>
    </div>
  );
}
