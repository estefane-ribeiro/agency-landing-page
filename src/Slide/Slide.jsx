import { useState, useRef, useEffect } from "react";
import useScrollAnimation from "../Hooks/useScrollAnimation";
import ilustration from "../img/Illustration.svg";
import ilustration2 from "../img/ilustracao4.png";
import ilustration3 from "../img/ilustracao5.png";

const Slide = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [slideItem, setSlideItem] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const pointerStartX = useRef(0);
  const isDragging = useRef(false);

  function slide1() {
    setSlideItem(0);
  }

  function slide2() {
    setSlideItem(1);
  }

  function slide3() {
    setSlideItem(2);
  }

  function handlePointerDown(e) {
    pointerStartX.current = e.clientX;
    isDragging.current = true;
  }

  function handlePointerMove(e) {
    if (!isDragging.current) return;

    const distance = e.clientX - pointerStartX.current;

    setDragOffset(distance);
  }

  function handlePointerUp() {
    if (!isDragging.current) return;

    isDragging.current = false;

    const threshold = window.innerWidth * 0.2;

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset < 0) {
        setSlideItem((current) => Math.min(current + 1, 2));
      } else {
        setSlideItem((current) => Math.max(current - 1, 0));
      }
    }

    setDragOffset(0);
  }

  const translateX =
    -(slideItem * 100) + (dragOffset / window.innerWidth) * 100;

  useEffect(() => {
    const mudarSlideAutomatico = setInterval(() => {
      if (slideItem === 2) {
        setSlideItem(0);
      } else {
        setSlideItem((anterior) => anterior + 1);
      }
    }, 5000);

    return () => clearInterval(mudarSlideAutomatico);
  }, [slideItem]);

  return (
    <div ref={ref} className={`py-18 ${isVisible ? "animate-leftIn" : ""}`}>
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="overflow-hidden touch-pan-y w-full "
      >
        <div
          style={{
            transform: `translate3d(${translateX}vw, 0, 0)`,
            transition: isDragging.current ? "none" : "transform 300ms ease",
            cursor: isDragging.current ? "grabbing" : "pointer",
          }}
          className="flex flex-nowrap mb-4"
        >
          {/* SLIDE 1 */}
          <section className="min-w-screen  grid gap-8 justify-center items-center lg:grid-cols-[1fr_1fr] lg:grid-rows-1 md:px-10">
            <div className="w-100 mx-auto lg:order-2">
              <img src={ilustration} alt="Ilustração" />
            </div>
            <div className="flex flex-col max-sm:gap-6 justify-center items-center md:gap-0 max-lg:text-center 2xl:justify-self-end">
              <h1 className="text-dgrey text-4xl font-bold tracking-wide md:text-5xl lg:self-start md:text-balance">
                Lessons and insights{" "}
                <span className="text-primary">from 8 years</span>
              </h1>

              <p className="text-grey md:text-balance md:mt-4 md:mb-8 lg:self-start">
                Where to grow your business as a photographer: site or social
                media?
              </p>

              <a
                href=""
                className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 self-center lg:self-start"
              >
                Register
              </a>
            </div>
          </section>

          {/* SLIDE 2 */}
          <section className="min-w-screen  grid gap-8 justify-center items-center lg:grid-cols-[1fr_1fr] md:px-10">
            <div className="w-100 mx-auto flex justify-center ">
              <img src={ilustration2} alt="Ilustração" />
            </div>
            <div className="flex flex-col max-sm:gap-6 justify-center items-center md:gap-0 max-lg:text-center">
              <h1 className=" text-dgrey text-4xl font-bold tracking-wide md:text-5xl lg:self-start md:text-balance">
                Transform your ideas into{" "}
                <span className="text-primary">digital experiences.</span>
              </h1>

              <p className="text-grey md:text-balance md:mt-4 md:mb-8 lg:self-start">
                We create modern, fast, and responsive websites to take your
                digital presence to the next level.
              </p>

              <a
                href=""
                className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 self-center lg:self-start"
              >
                Register
              </a>
            </div>
          </section>

          {/* SLIDE 3 */}
          <section className="min-w-screen  grid gap-8 justify-center items-center lg:grid-cols-[1fr_1fr] md:px-10">
            <div className="w-100 mx-auto flex justify-center lg:order-2">
              <img src={ilustration3} alt="Ilustração" />
            </div>

            <div className="flex flex-col max-sm:gap-6 justify-center items-center md:gap-0 max-lg:text-center 2xl:justify-self-end">
              <h1 className="text-dgrey text-4xl font-bold tracking-wide  md:text-5xl lg:self-start md:text-balance">
                Your website, fast on any{" "}
                <span className="text-primary">device.</span>
              </h1>

              <p className="text-grey md:text-balance md:mt-4 md:mb-8 lg:self-start">
                Performance, responsiveness and best practices to offer an
                incredible experience on any screen.
              </p>

              <a
                href=""
                className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 self-center lg:self-start"
              >
                Register
              </a>
            </div>
          </section>
        </div>
      </div>

      <nav className="flex gap-2 justify-center items-center *:hover:contrast-200">
        <button
          onClick={slide1}
          className={`size-4 rounded-full ${
            slideItem === 0 ? "bg-primary" : "bg-gray-300"
          }`}
        />

        <button
          onClick={slide2}
          className={`size-4 rounded-full ${
            slideItem === 1 ? "bg-primary" : "bg-gray-300"
          }`}
        />

        <button
          onClick={slide3}
          className={`size-4 rounded-full ${
            slideItem === 2 ? "bg-primary" : "bg-gray-300"
          }`}
        />
      </nav>
    </div>
  );
};

export default Slide;
