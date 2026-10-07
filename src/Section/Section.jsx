import cliente from "../img/cliente.svg";
import cliente2 from "../img/cliente2.svg";
import cliente3 from "../img/cliente3.svg";
import cliente4 from "../img/cliente4.svg";
import cliente5 from "../img/cliente5.svg";
import cliente6 from "../img/cliente6.svg";
import cliente7 from "../img/cliente7.svg";
import useScrollAnimation from "../Hooks/useScrollAnimation.jsx";
import { useEffect, useRef, useState } from "react";

const OurClients = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [ativo, setAtivo] = useState(true);
  const ul = useRef(null);

  return (
    <section
      ref={ref}
      className={`flex flex-col items-center bg-white pt-10 p-4 transition ${isVisible ? "animate-leftIn" : ""}`}
    >
      <h2 className="text-dgrey text-3xl font-semibold">Our Clients</h2>
      <p className="text-grey mt-2">
        We have been working with some Fortune 500+ clients
      </p>
      <div
        ref={ul}
        onMouseEnter={() => setAtivo(false)}
        onMouseLeave={() => setAtivo(true)}
        className={`flex justify-between min-[80%]: items-center gap-24 my-4 whitespace-nowrap  *:inline-block animate-rolarTexto flex-nowrap shrink *:shrink *:size-15
`}
        style={{
          animationPlayState: ativo ? "running" : "paused",
        }}
      >
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
    </section>
  );
};

export default OurClients;
