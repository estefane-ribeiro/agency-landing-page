import ilustration from "../img/Illustration.svg";
import cliente from "../img/cliente.svg";
import cliente2 from "../img/cliente2.svg";
import cliente3 from "../img/cliente3.svg";
import cliente4 from "../img/cliente4.svg";
import cliente5 from "../img/cliente5.svg";
import cliente6 from "../img/cliente6.svg";
import cliente7 from "../img/cliente7.svg";
import icon from "../img/Icon.svg";
import icon2 from "../img/Icon2.svg";
import icon3 from "../img/Icon3.svg";
const Home = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col-reverse p-4 gap-10 my-24 md:flex-row md:justify-between ">
        <div className="flex flex-col max-sm:gap-6 justify-center md:justify-center md:gap-0">
          <h1 className="text-dgrey text-4xl font-bold tracking-wide text-center md:text-5xl md:text-start md:text-balance">
            Lessons and insights{" "}
            <span className="text-primary">from 8 years</span>
          </h1>
          <p className="text-grey  md:text-balance md:mt-4 md:mb-8">
            Where to grow your business as a photographer: site or social media?
          </p>
          <a
            href=""
            className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 justify-self-center md:justify-self-start md:self-start"
          >
            Register
          </a>
        </div>
        <div>
          <img src={ilustration} alt="Ilustração" />
        </div>
      </div>
      <div className="flex flex-col items-center bg-white pt-10">
        <h2 className="text-dgrey text-3xl font-semibold">Our Clients</h2>
        <p className="text-grey mt-2">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex justify-between items-center gap-24 my-4 flex-wrap">
          <div>
            <img src={cliente} alt="cliente" />
          </div>
          <div>
            <img src={cliente2} alt="cliente" />
          </div>
          <div>
            <img src={cliente3} alt="cliente" />
          </div>
          <div>
            <img src={cliente4} alt="cliente" />
          </div>
          <div>
            <img src={cliente5} alt="cliente" />
          </div>
          <div>
            <img src={cliente6} alt="cliente" />
          </div>
          <div>
            <img src={cliente7} alt="cliente" />
          </div>
        </div>
      </div>
      <div className="grid gap-2 items-center justify-center text-center py-10 bg-white ">
        <h2 className="text-dgrey text-3xl font-semibold text-balance max-w-135.5 justify-self-center">
          Manage your entire community in a single system
        </h2>
        <p className="text-grey">Who is Nextcent suitable for?</p>
        <div className="flex flex-col lg:flex-row gap gap-10 justify-between ">
          <div className="grid items-center justify-center">
            <div className="justify-self-center">
              <img src={icon} alt="Ícone " />
            </div>
            <h3 className="text-2xl text-dgrey font-semibold mt-4 mb-2">
              Membership Organisations
            </h3>
            <p className="text-grey text-balance">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="grid items-center justify-center">
            <div className="justify-self-center">
              <img src={icon3} alt="Ícone " />
            </div>
            <h3 className="text-2xl text-dgrey font-semibold mt-4 mb-2">
              National Associations
            </h3>
            <p className="text-grey text-balance">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="grid items-center justify-center">
            <div className="justify-self-center">
              <img src={icon2} alt="Ícone " />
            </div>
            <h3 className="text-2xl text-dgrey font-semibold mt-4 mb-2">
              Clubs And Groups
            </h3>
            <p className="text-grey text-balance">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
