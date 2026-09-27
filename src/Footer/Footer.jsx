import logo from "../img/logo-dark.svg";
import compartilhar from "../img/compartilhar.svg";
import instagram from "../img/instagram.svg";
import x from "../img/x.svg";
import youtube from "../img/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-dark p-16 flex flex-col md:flex-row gap-10 text-silver-100 justify-evenly">
      <div className="flex flex-col">
        <img src={logo} alt="Nexcent" className="mb-10" />
        <span className="mb-2">Copyright © 2020 Nexcent ltd.</span>
        <span>All rights reserved</span>
        <div className="flex mt-10 gap-4 *:p-3 *:bg-white/10 *:rounded-full *:cursor-pointer">
          <img src={instagram} alt="Nexcent" />
          <img src={x} alt="Nexcent" />
          <img src={youtube} alt="Nexcent" />
        </div>
      </div>
      <ul className="grid gap-3 *:cursor-pointer *:transition *:hover:text-primary first:hover:text-white ">
        <li className="text-2xl mb-6 text-white hover:text-white">Company</li>
        <li>About us</li>
        <li>Blog</li>
        <li>Contact us</li>
        <li>Pricing</li>
        <li>Testimonials</li>
      </ul>
      <ul className="grid gap-3 *:cursor-pointer *:transition *:hover:text-primary">
        <li className="text-2xl mb-6 text-white">Support</li>
        <li>Help center</li>
        <li>Terms of service</li>
        <li>Legal</li>
        <li>Privacy policy</li>
        <li>Status</li>
      </ul>
      <div>
        <h3 className="text-2xl mb-6 text-white">Stay up to date</h3>
        <div className="flex relative">
          <input
            className="bg-white/20 p-2 rounded-sm"
            type="email"
            placeholder="Your email address"
          />
          <span className="absolute right-2 top-3 ">
            <img src={compartilhar} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
