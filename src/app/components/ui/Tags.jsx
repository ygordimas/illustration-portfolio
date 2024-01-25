export default function Tags({ tag, id }) {
  return (
    <div
      key={id}
      className="z-100 relative cursor-default border-2 border-myyellow-500 bg-mygreen-500 px-1 py-0.5 font-mainfont  text-base font-light tracking-wide text-myblue-800 md:py-1"
    >
      {tag}
      <div className="absolute left-1/2 top-1.5 -z-10 h-full w-[98%] -translate-x-1/2 bg-mypink-300"></div>
    </div>
  );
}
