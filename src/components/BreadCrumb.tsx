import { useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation();

  return (
    <section className="w-full h-20 min-h-fit flex items-center justify-start">
        <span className="mx-20 lg:mx-10 px-8 py-1 text-2xl text-white bg-slate-800 text-center flex justify-center rounded-full">
          {location.pathname.localeCompare("/")=== 0 ? "/home" : location.pathname}
        </span>
    </section>
  );
}
