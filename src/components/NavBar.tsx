const NavItems = [
  { name: "Home", link: "/" },
  { name: "My Stories", link: "/about" },
  { name: "Settings", link: "/contact" },
  { name: "My Projects", link: "/projects" },
];

export default function NavBar({ open }: { open: boolean }) {
  return (
    <nav
      className={
        open
          ? "w-screen h-screen flex flex-col justify-evenly items-center bg-slate-500 " +
            "transform ease-in-out duration-500 origin-left translate-x-0 z-10"
          : "w-0 h-0 overflow-hidden flex flex-col justify-evenly items-center bg-slate-500 "
      }
    >
      <img
        src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png"
        className="w-2/6 md:w-1/6"
        alt="logo"
      />
      <ul className="w-full flex flex-col items-center gap-12">
        {NavItems.map((item) => (
          <li className="w-full text-center">
            <a href="#">
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <a href="#">
        <span>MY PROFILE</span>
      </a>
    </nav>
  );
}
