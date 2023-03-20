export default function Home() {
  return (
    <section className="mt-10 w-full h-full overflow-hidden flex flex-col items-center">
      <h1 className="text-3xl text-white text-center">Home</h1>

      <article
        className="
          mt-10
          w-3/4
          h-3/4
          flex
          flex-col
          bg-slate-400
          rounded-lg
          items-center
          overflow-y-scroll
          gap-6 p-5
          lg:flex-row
          lg:h-1/2
          lg:justify-around
          lg:mt-20
          lg:overflow-y-auto
      "
      >
        <div className="w-44 min-h-[12rem] bg-slate-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold text-xl text">
            Project 2
          </span>
        </div>

        <div className="w-44 min-h-[12rem] bg-slate-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold text-xl text">
            Project 2
          </span>
        </div>

        <div className="w-44 min-h-[12rem] bg-slate-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold text-xl text">
            Project 2
          </span>
        </div>
      </article>
    </section>
  );
}
