export default function Home() {
  return (
    <section className="mt-10 w-full h-full overflow-hidden flex flex-col items-center">
      <h1 className="text-3xl text-white text-center">Home</h1>
      <article className="mt-20 w-3/4 h-1/2 flex bg-slate-400 rounded-lg justify-around items-center">
        <div className="w-44 h-48 bg-slate-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold text-xl text">Project 1</span>
        </div>
        <div className="w-44 h-48 bg-slate-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold text-xl text">Project 2</span>
        </div>
        <div className="w-44 h-48 bg-slate-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-semibold text-xl text">Project 3</span>
        </div>
      </article>
    </section>
  );
}
