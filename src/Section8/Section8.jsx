import useScrollAnimation from "../Hooks/useScrollAnimation";
import ilustration2 from "../img/ilustration2.svg";

const Section8 = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`mb-8 py-10 bg-white flex flex-col items-center justify-center md:flex-row transition ${isVisible ? "animate-rightIn" : ""}`}
    >
      <div className=" min-w-80 w-full shrink ">
        <img className="mx-auto" src={ilustration2} alt="ilustação" />
      </div>
      <div className="grid items-center justify-center gap-4 text-center">
        <h2 className="text-dgrey text-3xl font-semibold text-balance">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-grey text-balance">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
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
  );
};

export default Section8;
