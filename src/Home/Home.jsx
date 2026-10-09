import ilustration from "../img/Illustration.svg";
import Section from "../Section/Section";
import useScrollAnimation from "../Hooks/useScrollAnimation";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";
import Section6 from "../Section6/Section6";
import Section7 from "../Section7/Section7";
import Section2 from "../Section2/Section2";
import Section8 from "../Section8/Section8";
import Slide from "../Slide/Slide";

const Home = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div>
      {/* <div
        ref={ref}
        className={`container mx-auto flex flex-col-reverse p-4 gap-10 my-24 md:flex-row md:justify-between animate-lineIn transition duration-300 ${isVisible ? "animate-leftIn" : ""}`}
      >
        <div className="flex flex-col max-sm:gap-6 justify-center md:justify-center md:gap-0">
          <h1 className="text-dgrey text-4xl font-bold tracking-wide text-center md:text-5xl md:text-start md:text-balance">
            Lessons and insights{" "}
            <span className="text-primary">from 8 years</span>
          </h1>
          <p className="text-grey  md:text-balance md:mt-4 md:mb-8">
            Where to grow your business as a photographer: site or social media?
          </p>
          <a
            href=""
            className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 justify-self-center self-center md:justify-self-start md:self-start"
          >
            Register
          </a>
        </div>
        <div className="mx-auto">
          <img src={ilustration} alt="Ilustração" />
        </div>
      </div> */}
      <Slide />
      <Section />
      <Section2 />
      <Section8 />
      <Section3 />
      {/* <Section9 /> */}
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};

export default Home;
