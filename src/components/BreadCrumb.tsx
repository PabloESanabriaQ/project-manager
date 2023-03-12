export default function BreadCrumb() {
  const path = window.location.pathname;
  return (
    <section className="w-1/2 h-20 min-h-fit flex items-center justify-center">
      <span className="text-2xl font-semibold text-white">
        {path.localeCompare("/") === 0 ? "/home" : path}
      </span>
    </section>
  );
}
