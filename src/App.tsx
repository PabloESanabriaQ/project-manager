import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import BreadCrumb from "./components/BreadCrumb";
import hamburguer from "./assets/hamburguer.png";
import Settings from "./components/Settings";
import MyProjects from "./components/MyProjects";
import NotFound from "./components/NotFound";

function App() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <BrowserRouter>
      <div className="App lg:flex w-full h-full items-center bg-slate-600">
        <header className="w-1/6">
          <img
            onClick={() => setOpenNav(!openNav)}
            src={hamburguer}
            className={`w-12 h-12 absolute m-4 top-0 left-0 lg:hidden ${
              openNav ? "hidden" : ""
            }`}
          />
          <NavBar open={openNav} setOpen={setOpenNav} />
        </header>
        <main className="flex w-screen lg:w-5/6 h-screen flex-col items-center">
          <BreadCrumb />
          <Routes>
            <Route path="" Component={Home} />
            <Route path="settings" Component={Settings} />
            <Route path="my-projects" Component={MyProjects} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
