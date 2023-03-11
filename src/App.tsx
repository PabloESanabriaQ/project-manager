import { useState } from "react";
import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Home from "./components/Home";

import hamburguer from "./assets/hamburguer.png";
import chevronLeft from "./assets/chevron-left.png";

function App() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="App flex flex-col w-full h-full items-center">
      <header className="w-full">
        <img
          onClick={() => setOpenNav(!openNav)}
          src={openNav ? hamburguer : chevronLeft}
          className="w-12 h-12 absolute m-4 z-20"
        />
        <NavMenu open={openNav} />
        <NavBar open={openNav} />
        {!openNav ? <Home /> : null}
      </header>
    </div>
  );
}

export default App;
