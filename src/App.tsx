import { useState } from "react";
import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Home from "./components/Home";

import hamburguer from "./assets/hamburguer.png";

function App() {
  const [openNav, setOpenNav] = useState(true);

  return (
    <div className="App flex flex-col w-full h-full items-center">
      <header className="w-full">
        <img
          onClick={() => setOpenNav(!openNav)}
          src={hamburguer}
          className={`w-12 h-12 absolute m-4 top-0 left-0 ${
            !openNav ? "" : "hidden"
          }`}
        />
        {/* <NavMenu open={openNav} /> */}
        <NavBar open={openNav} setOpen={setOpenNav} />
        <Home />
      </header>
    </div>
  );
}

export default App;
