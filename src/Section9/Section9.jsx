import useScrollAnimation from "../Hooks/useScrollAnimation";
import icon4 from "../img/Icon4.svg";
import icon5 from "../img/Icon5.svg";
import icon6 from "../img/Icon6.svg";
import icon7 from "../img/Icon7.svg";
const Section9 = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref}>
      <ul
        className={`grid grid-cols-2 gap-x-7.5 gap-y-10 *:flex *:items-center *:**:flex *:**:flex-col *:**:text-start transition ${isVisible ? "animate-rightIn" : ""}`}
      >
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
  );
};

export default Section9;
