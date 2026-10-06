import useScrollAnimation from "../Hooks/useScrollAnimation.jsx";
import icon from "../img/Icon.svg";
import icon2 from "../img/Icon2.svg";
import icon3 from "../img/Icon3.svg";

const Section2 = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      ref={ref}
      className={`grid gap-2 items-center justify-center text-center py-10 bg-white transition ${isVisible ? "animate-rightIn" : ""}`}
    >
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
    </section>
  );
};

export default Section2;
