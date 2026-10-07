import { useEffect, useRef, useState } from "react";
import logo from "../img/logo.svg";
const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const menu = useRef(null);

  function handleClickMenu() {
    setMenuMobile((anterior) => !anterior);
  }

  useEffect(() => {
    function handleClickForaMenu(e) {
      if (menu.current && !menu.current.contains(e.target)) {
        setMenuMobile(false);
      }
    }

    if (menuMobile) {
      window.addEventListener("click", handleClickForaMenu);
    }

    return () => {
      window.removeEventListener("click", handleClickForaMenu);
    };
  }, [menuMobile]);

  return (
    <header className="flex justify-between mb-8 p-6 relative">
      <a href="/">
        <img src={logo} alt="Nexcent" />
      </a>
      <div ref={menu}>
        <button
          onClick={handleClickMenu}
          className={`max-md:block hidden text-2xl text-primary font-black transition hover:contrast-200 cursor-pointer `}
        >
          ☰
        </button>
        <div
          className={`md:flex relative justify-between  max-md:flex-col max-md:gap-5 max-md:absolute max-md:right-3 max-md:bg-primary z-20 max-md:p-10 rounded-2xl max-md:top-16 ${menuMobile ? "max-md:flex " : "max-md:hidden"}`}
        >
          {/* polygon(50% 0%, 0% 100%, 100% 100%) */}
          <span
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
            className="h-3 w-3 absolute -top-3 right-4 bg-primary max-md:block hidden"
          ></span>
          <nav>
            <ul className="flex gap-12 max-md:flex-col max-md:items-center max-md:gap-5 max-md:text-white *:**:hover:max-md:text-secondary">
              <li>
                <a href="\" className="hover:text-primary inline-block group">
                  Home
                  <span className="h-0.5 w-1 opacity-0 bg-primary block transition-all duration-300 group-hover:opacity-100 group-hover:w-full "></span>
                </a>
              </li>
              <li>
                <a
                  href="\sobre"
                  className="hover:text-primary inline-block group"
                >
                  Sobre
                  <span className="h-0.5 w-1 opacity-0 bg-primary block transition-all duration-300 group-hover:opacity-100 group-hover:w-full "></span>
                </a>
              </li>
              <li>
                <a
                  href="\contato"
                  className="hover:text-primary inline-block group"
                >
                  Contato
                  <span className="h-0.5 w-1 opacity-0 bg-primary block transition-all duration-300 group-hover:opacity-100 group-hover:w-full "></span>
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="flex gap-3 max-md:flex-col max-md:items-center *:**:hover:max-md:text-secondary *:**:hover:max-md:duration-300">
              <li>
                <a
                  href=""
                  className="py-2 px-4 max-md:text-white max-md: text-primary rounded-md transition hover:contrast-150"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="py-2 px-4 bg-primary text-white rounded-md transition hover:contrast-200"
                >
                  Cadastro
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
