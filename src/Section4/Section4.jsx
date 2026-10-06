import pana from "../img/pana.svg";
import useScrollAnimation from "../Hooks/useScrollAnimation";

const Section4 = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`flex flex-col items-center bg-white p-10 text-center gap-10 md:flex-row md:justify-around transition ${isVisible ? "animate-rightIn" : ""}`}
    >
      <div className="min-w-80 w-full shrink">
        <img className="mx-auto" src={pana} alt="ilustration" />
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
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <a
          href=""
          className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 justify-self-center mt-4"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Section4;
