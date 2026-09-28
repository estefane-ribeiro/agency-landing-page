import ilustration from "../img/Illustration.svg";
import ilustration2 from "../img/ilustration2.svg";
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
import icon4 from "../img/Icon4.svg";
import icon5 from "../img/Icon5.svg";
import icon6 from "../img/Icon6.svg";
import icon7 from "../img/Icon7.svg";
import pana from "../img/pana.svg";
import image from "../img/image.svg";

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
      <div className="mb-8 py-10 bg-white flex flex-col items-center justify-center md:flex-row">
        <div className=" min-w-80 w-full shrink">
          <img src={ilustration2} alt="ilustação" />
        </div>
        <div className="grid items-center justify-center gap-4 text-center">
          <h2 className="text-dgrey text-3xl font-semibold text-balance">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-grey text-balance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <a
            href="#"
            className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 justify-self-center "
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-10 mb-8 gap-10 text-center md:flex-row md:justify-around">
        <div>
          <h2 className="text-dgrey text-3xl font-semibold">
            Helping a local{" "}
            <span className="text-primary">business reinvent itself</span>
          </h2>
          <p className="text-grey mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-x-7.5 gap-y-10 *:flex *:items-center *:**:flex *:**:flex-col *:**:text-start">
            <li>
              <img className="mr-3" src={icon4} alt="icone" />
              <div className="text-dgrey font-semibold text-2xl">
                2,245,341
                <span className="text-sm *:font-normal text-grey">Members</span>
              </div>
            </li>
            <li>
              <img className="mr-3" src={icon5} alt="icone" />
              <div className="text-dgrey font-semibold text-2xl">
                828,867
                <span className="text-sm *:font-normal text-grey">
                  Event Bookings
                </span>
              </div>
            </li>
            <li>
              <img className="mr-3" src={icon6} alt="icone" />
              <div className="text-dgrey font-semibold text-2xl">
                46,328
                <span className="text-sm *:font-normal text-grey">Clubs</span>
              </div>
            </li>
            <li>
              <img className="mr-3" src={icon7} alt="icone" />
              <div className="text-dgrey font-semibold text-2xl">
                1,926,436
                <span className="text-sm *:font-normal text-grey">
                  Payments
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white p-10 text-center gap-10 md:flex-row md:justify-around">
        <div className="min-w-80 w-full shrink">
          <img src={pana} alt="ilustration" />
        </div>
        <div>
          <h2 className="text-dgrey text-3xl font-semibold">
            How to design your site footer like we did
          </h2>
          <p className="text-grey mt-2 text-balance">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <a
            href=""
            className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 justify-self-center mt-4"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center p-10 text-center gap-10 md:flex-row md:justify-center ">
        <div className="min-w-80 w-full shrink">
          <img src={image} alt="ilustration" />
        </div>
        <div className="  items-start">
          <p className="text-grey mt-2 text-balance">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h3 className="text-primary">Tim Smith</h3>
          <p className="text-grey mt-2 text-balance">
            British Dragon Boat Racing Association
          </p>
          <ul className="flex items-center justify-center gap-8 *:**:shrink *:**:min-w-10 max-sm:gap-3">
            <li>
              <img src={cliente} alt="cliente" />
            </li>
            <li>
              <img src={cliente2} alt="cliente" />
            </li>
            <li>
              <img src={cliente3} alt="cliente" />
            </li>
            <li>
              <img src={cliente4} alt="cliente" />
            </li>
            <li>
              <img src={cliente5} alt="cliente" />
            </li>
            <li>
              <img src={cliente6} alt="cliente" />
            </li>
            <li>
              <a
                className="text-primary font-semibold inline-block rounded-sm transition hover:contrast-200 justify-self-center "
                href=""
              >
                Meet all customers{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid gap-2 items-center justify-center text-center py-10 bg-white ">
        <h2 className="text-dgrey text-3xl font-semibold text-balance max-w-135.5 justify-self-center">
          Caring is the new marketing
        </h2>
        <p className="text-grey">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
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

      <div className="grid gap-2 items-center justify-center text-center py-10">
        <h2 className="text-dark mb-11 text-3xl font-semibold text-balance max-w-135.5 justify-self-center md:text-5xl">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <a
          href=""
          className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 justify-self-center "
        >
          Get a Demo
        </a>
      </div>
    </div>
  );
};

export default Home;
