import useScrollAnimation from "../Hooks/useScrollAnimation";

const Section7 = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`grid gap-2 items-center justify-center text-center py-10 transition ${isVisible ? "animate-leftIn" : ""}`}
    >
      <h2 className="text-dark mb-11 text-3xl font-semibold text-balance max-w-135.5 justify-self-center md:text-5xl">
        Pellentesque suscipit fringilla libero eu.
      </h2>
      <a
        href=""
        className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 justify-self-center "
      >
        Get a Demo
      </a>
    </section>
  );
};

export default Section7;
