import useScrollAnimation from "../Hooks/useScrollAnimation";

const Contato = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`p-4 space-y-4 md:p-20 md:space-y-8 *:text-balance text-secondary ${isVisible ? "animate-topIn" : ""}`}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-primary">
        Contact us by
      </h1>
      <p>
        Ut vitae tellus fringilla, semper dolor eget, vehicula nisi. Sed
        molestie risus vel ultrices sodales. Quisque eget leo sit amet turpis
        dapibus pharetra non sed urna. Praesent pretium, justo vel maximus
        efficitur, lectus sem fringilla orci, quis pharetra arcu lectus nec
        turpis. In hac habitasse platea dictumst. Vestibulum blandit ipsum id
        cursus tincidunt. Donec consequat consequat ex sit amet egestas.
        Vestibulum quis lorem a ligula aliquet ultrices sit amet sed elit.
      </p>
      <a
        href=""
        className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 justify-self-center mt-4 self-start"
      >
        Register
      </a>
    </div>
  );
};

export default Contato;
