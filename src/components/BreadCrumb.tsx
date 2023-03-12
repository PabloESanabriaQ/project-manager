import { useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation();

  return (
    <section className="w-1/2 h-20 min-h-fit flex items-center justify-center">
      <span className="text-2xl font-semibold text-white">
        {location.pathname.localeCompare("/")=== 0 ? "/home" : location.pathname}
      </span>
    </section>
  );
}
