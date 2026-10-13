import useScrollAnimation from "../Hooks/useScrollAnimation";
import reuniao from "../img/reuniao.jpg";
const Sobre = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div>
      <div className="relative">
        <div className="w-full max-h-205 overflow-hidden">
          <img
            className=" object-cover grayscale-50 hover:scale-103 transition duration-300 hover:grayscale-0"
            src={reuniao}
            alt="Reunião"
          />
        </div>
        <div className="md:absolute md:bottom-15 md:left-15 bg-black/80 -mt-4  md:bg-black/50 p-4  rounded-lg text-white md:w-1/2 flex flex-col gap-3 ">
          <h2 className="text-3xl font-bold text-primary">NexCent</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet magna id sapien laoreet euismod ac vel arcu.
          </p>
          <a
            href=""
            className="bg-primary text-white py-3 px-8 inline-block rounded-sm transition hover:contrast-200 justify-self-center mt-4 self-start"
          >
            Register
          </a>
        </div>
      </div>
      <div
        ref={ref}
        className={`p-4 space-y-4 md:p-20 md:space-y-8 *:text-balance text-secondary ${isVisible ? "animate-topIn" : ""}`}
      >
        <h1 className="text-4xl font-bold text-primary">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet magna id sapien laoreet euismod ac vel arcu. Sed eu convallis
          est, viverra finibus ex. Nulla suscipit mi eu lacus ultricies, vitae
          condimentum felis aliquet. Fusce pretium odio sit amet ligula viverra
          posuere. Nulla non bibendum enim. Aenean vitae euismod neque, vel
          sollicitudin erat. Nullam iaculis dui id urna placerat, nec lacinia
          nulla aliquam. Suspendisse quam mauris, blandit nec convallis cursus,
          dictum non ex. Aliquam condimentum ipsum vitae congue cursus.
        </p>
        <p>
          Pellentesque nec cursus urna. Nunc lobortis scelerisque enim, id
          mattis justo eleifend non. Nullam a mi finibus, hendrerit eros ut,
          rhoncus felis. Donec auctor fringilla suscipit. Fusce sodales, ipsum
          vel dictum fermentum, ex arcu imperdiet odio, in tempus arcu lectus
          non nulla. Pellentesque aliquam nulla orci, sit amet auctor augue
          iaculis quis. Pellentesque posuere orci ac feugiat commodo. Integer ut
          tellus ut leo lacinia imperdiet. Suspendisse ac interdum turpis. Sed
          ac ipsum feugiat, vehicula libero facilisis, vehicula justo. Cras
          euismod sed enim non lacinia. Fusce porta hendrerit eleifend. Ut in
          metus ac lacus pharetra egestas at ac leo. Proin pretium nisl non
          massa viverra consectetur. Aliquam aliquam mattis tellus, in
          vestibulum sem.
        </p>

        <p>
          Ut vitae tellus fringilla, semper dolor eget, vehicula nisi. Sed
          molestie risus vel ultrices sodales. Quisque eget leo sit amet turpis
          dapibus pharetra non sed urna. Praesent pretium, justo vel maximus
          efficitur, lectus sem fringilla orci, quis pharetra arcu lectus nec
          turpis. In hac habitasse platea dictumst. Vestibulum blandit ipsum id
          cursus tincidunt. Donec consequat consequat ex sit amet egestas.
          Vestibulum quis lorem a ligula aliquet ultrices sit amet sed elit.
        </p>
        <p>
          Nulla magna tortor, sodales nec pharetra sed, molestie at orci. Mauris
          non scelerisque dui. Nulla facilisi. Donec malesuada nibh in ligula
          gravida, consequat dictum nulla cursus. Etiam molestie suscipit
          tortor, sit amet ultrices nibh iaculis sed. Quisque eleifend ipsum et
          felis elementum condimentum. Etiam tortor ipsum, feugiat eget purus
          eget, efficitur sodales elit. Nullam tincidunt malesuada tincidunt.
          Pellentesque dui nisl, ultrices id condimentum at, placerat at turpis.
          Vestibulum interdum massa non erat hendrerit tempus. Donec luctus in
          tellus non iaculis. Maecenas condimentum posuere diam, id rhoncus
          lacus vestibulum bibendum. Nulla faucibus molestie rutrum.
          Pellentesque tristique enim vel eros luctus hendrerit. Proin fermentum
          lectus vel maximus tempor. Maecenas maximus pharetra tellus, quis
          tincidunt sapien rhoncus sit amet.
        </p>
        <p>
          Nulla pretium rutrum nisl vel aliquam. Sed aliquet magna sit amet
          cursus faucibus. Sed tortor dolor, placerat vitae fringilla nec,
          maximus eget leo. Morbi ac condimentum dolor. Maecenas lectus ligula,
          aliquet eu lectus sed, lobortis ullamcorper nisl. Sed nulla nisi,
          tempor id est id, dictum pellentesque neque. Vestibulum et risus
          tellus. Pellentesque a viverra enim, at posuere libero. Proin dui
          urna, porttitor ut accumsan ac, efficitur quis nisi.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
