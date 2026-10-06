import icon4 from "../img/Icon4.svg";
import icon5 from "../img/Icon5.svg";
import icon6 from "../img/Icon6.svg";
import icon7 from "../img/Icon7.svg";
import useScrollAnimation from "../Hooks/useScrollAnimation";

const Section3 = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`flex flex-col justify-center items-center p-10 mb-8 gap-10 text-center md:flex-row md:justify-around transition  ${isVisible ? "animate-leftIn" : ""}`}
    >
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
              <span className="text-sm *:font-normal text-grey">Payments</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section3;
