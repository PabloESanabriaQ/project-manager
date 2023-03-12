import { Link } from "react-router-dom";
import chevronLeft from ".././assets/chevron-left.png";

const NavItems = [
  { name: "Home", path: "/" },
  { name: "My Stories", path: "/my-stories" },
  { name: "Settings", path: "/settings" },
  { name: "My Projects", path: "/my-projects" },
];

interface NavBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function NavBar({ open, setOpen }: NavBarProps) {
  function handleClick() {
    setOpen(false);
  }

  return (
    <nav
      className={`w-screen h-screen fixed flex flex-col justify-evenly items-center bg-slate-500
      overflow-hidden overflow-x-hidden text-lg
      transform ease-in-out duration-500 origin-left translate-x-0
      lg:w-1/6 lg:left-0 lg:top-0 lg:justify-around lg:text-xl
      ${open ? "right-0" : "right-full"}`}
    >
      <img
        onClick={() => setOpen(!open)}
        src={chevronLeft}
        className="w-12 h-12 absolute m-4 top-0 left-0 lg:hidden"
      />
      <img
        src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png"
        className="w-2/6 lg:w-4/6"
        alt="logo"
      />
      <ul className="w-full flex flex-col items-center gap-12">
        {NavItems.map(({ name, path }) => (
            <Link to={path} key={name}  className="w-full text-center hover:bg-slate-700 hover:text-white p-5">
              <li onClick={handleClick} >
                <span>{name}</span>
              </li>
            </Link>
        ))}
      </ul>
      <a href="#">
        <span>MY PROFILE</span>
      </a>
    </nav>
  );
}
