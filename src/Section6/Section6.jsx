import useScrollAnimation from "../Hooks/useScrollAnimation";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";

const Section6 = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`grid gap-2 items-center justify-center text-center pt-10 pb-24 px-4 bg-white transition ${isVisible ? "animate-rightIn" : ""}`}
    >
      <h2 className="text-dgrey text-3xl font-semibold text-balance max-w-135.5 justify-self-center">
        Caring is the new marketing
      </h2>
      <p className="text-grey mb-4 text-balance">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's more.
      </p>
      <div className="flex flex-col lg:flex-row gap gap-10 justify-between  *:max-lg:mb-25 *:transition *:md:hover:-translate-y-3">
        <div className="grid items-center justify-center">
          <div className="justify-self-center relative">
            <img src={image2} alt="ilustration " />
            <div className="bg-white w-[70%] p-4 grid items-center justify-center absolute -bottom-12 left-12 rounded-lg shadow-2xl">
              <p className="text-grey mb-4">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <a
                href=""
                className="text-primary font-semibold inline-block rounded-sm transition hover:contrast-200 justify-self-center text-lg"
              >
                Readmore
              </a>
            </div>
          </div>
        </div>
        <div className="grid items-center justify-center">
          <div className="justify-self-center relative">
            <img src={image3} alt="ilustration " />
            <div className="bg-white w-[70%] p-4 grid items-center justify-center absolute -bottom-12 left-12 rounded-lg shadow-2xl">
              <p className="text-grey mb-4">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <a
                href=""
                className="text-primary font-semibold inline-block rounded-sm transition hover:contrast-200 justify-self-center text-lg"
              >
                Readmore
              </a>
            </div>
          </div>
        </div>
        <div className="grid items-center justify-center ">
          <div className="justify-self-center relative">
            <img src={image4} alt="ilustration " />
            <div className="bg-white w-[70%] p-4 grid items-center justify-center absolute -bottom-12 left-12 rounded-lg shadow-2xl">
              <p className="text-grey mb-4">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <a
                href=""
                className="text-primary font-semibold inline-block rounded-sm transition hover:contrast-200 justify-self-center text-lg"
              >
                Readmore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
