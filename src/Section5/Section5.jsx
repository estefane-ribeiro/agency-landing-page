import cliente from "../img/cliente.svg";
import cliente2 from "../img/cliente2.svg";
import cliente3 from "../img/cliente3.svg";
import cliente4 from "../img/cliente4.svg";
import cliente5 from "../img/cliente5.svg";
import cliente6 from "../img/cliente6.svg";
import image from "../img/image.svg";

import useScrollAnimation from "../Hooks/useScrollAnimation";

const Section5 = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`flex flex-col  items-center p-10 text-center gap-10 md:flex-row md:justify-center transition ${isVisible ? "animate-leftIn" : ""}`}
    >
      <div className="min-w-80 w-full shrink">
        <img className="mx-auto" src={image} alt="ilustration" />
      </div>
      <div className="  items-start">
        <p className="text-grey mt-2 text-balance p-4">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h3 className="text-primary">Tim Smith</h3>
        <p className="text-grey mt-2 text-balance">
          British Dragon Boat Racing Association
        </p>
        <div className="flex max-sm:flex-col max-sm:gap-4">
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
          </ul>
          <a
            className="text-primary font-semibold inline-block rounded-sm transition hover:contrast-200 justify-self-center "
            href=""
          >
            Meet all customers{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section5;
