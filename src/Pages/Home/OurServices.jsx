import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // apenas o css de navigation
import { Navigation } from "swiper/modules"; // apenas Navigation
import data from "../../data/index.json";

// Hook para detectar largura da tela
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

export default function OurServices() {
  const isMobile = useIsMobile();

  return (
    <section className="ourservices--section" id="ourServices">
      <div className="ourservices--container">
        <p className="ourservices--title">Our Services</p>
        <h2 className="ourservices--heading"></h2>
      </div>

      {isMobile ? (
        <Swiper
          modules={[Navigation]} // só Navigation
          navigation={true} // habilita as setas
          spaceBetween={16}
          slidesPerView={1}
        >
          {data?.services?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="ourservices--card">
                <div className="ourservices--card--img">
                  <img src={item.src} alt={item.title} />
                </div>
                <div className="ourservices--card--content">
                  <h3 className="ourservices--card--title">{item.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="ourservices--cards--container">
          {data?.services?.map((item, index) => (
            <div key={index} className="ourservices--card">
              <div className="ourservices--card--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="ourservices--card--content">
                <h3 className="ourservices--card--title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
