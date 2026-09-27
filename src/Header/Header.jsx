import logo from "../img/logo.svg";
const Header = () => {
  return (
    <div className="flex justify-between mb-8 p-6">
      <a href="/">
        <img src={logo} alt="Nexcent" />
      </a>
      <nav>
        <ul className="flex gap-12">
          <li>
            <a href="\" className="hover:text-primary inline-block group">
              Home
              <span className="h-0.5 w-1 opacity-0 bg-primary block transition-all duration-300 group-hover:opacity-100 group-hover:w-full "></span>
            </a>
          </li>
          <li>
            <a href="\sobre" className="hover:text-primary inline-block group">
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
        <ul className="flex gap-3">
          <li>
            <a
              href=""
              className="py-2 px-4 text-primary rounded-md transition hover:contrast-150"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href=""
              className="py-2 px-4 bg-primary text-white rounded-md transition hover:contrast-150"
            >
              Cadastro
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
