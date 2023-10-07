// testimonial data
export const testimonialSlider = [
  {
    image: "/T-avt-1-removebg.png",
    name: "Marina Furtado",
    position: "Manager",
    message:
      "Escolher o Felipe para nossa solução digital foi a decisão mais acertada. Ele tem uma habilidade única de mesclar design intuitivo com as mais recentes tendências de desenvolvimento web. O resultado final foi uma plataforma que não apenas reflete nossa marca, mas também oferece uma experiência de usuário excepciona",
  },
  {
    image: "/T-avt-2-removebg.png",
    name: "Moises",
    position: "Company Owner",
    message:
      "No mundo do desenvolvimento web, Felipe se destaca como um verdadeiro inovador. Sua paixão e dedicação ao nosso projeto web foram evidentes em cada etapa. Ele não apenas capturou nossa visão, mas a elevou com sua expertise em design e funcionalidade. Uma escolha certa para quem busca qualidade!",
  },
  {
    image: "/t-avt-3.png",
    name: "Uriel",
    position: "CustomerCivil Engineer",
    message:
      "No competitivo mercado de desenvolvimento web, a visão do Felipe é um verdadeiro game-changer. Sua abordagem técnica e centrada no cliente resultou em uma solução web que superou todas as nossas expectativas. Se você está buscando um desenvolvedor que entrega inovação e eficiência, ele é a escolha perfeita!",
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

// icons
import { FaQuoteLeft } from "react-icons/fa";
// next image
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]">
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      width={140}
                      height={140}
                      alt=""
                      className="rounded-ful"
                    />
                  </div>
                  {/* nome */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icons */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                  {/* message */}
                  <div className="xl:text-lg text-center md:text-left">
                    {person.message}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
