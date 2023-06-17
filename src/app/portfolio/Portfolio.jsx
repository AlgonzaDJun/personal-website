"use client";
import React, { useEffect, useRef } from "react";
import "../css/portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-element-bundle.min.css";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper";
import Link from "next/link";
import { BsGithub, BsLink } from "react-icons/bs";
import { DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { IconContext } from "react-icons";
import {
  SiExpress,
  SiJquery,
  SiMui,
  SiPhp,
  SiPusher,
  SiRedux,
} from "react-icons/si";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox-plus-jquery.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

export const Portfolio = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    AOS.init();
    // import lightbox plus jquery
  }, []);

  const porto = [
    {
      id: 1,
      title: "Food Corner",
      image: "/images/porto-img/1.jpeg",
      image2: "/images/porto-img/1b.jpeg",
      desc: "Website E-Canteen yang dikembangkan menggunakan MERN stack (MongoDB, Express.js, React, dan Node.js). Website ini memungkinkan pengguna untuk melakukan pemesanan makanan atau minuman secara online dengan mudah dan efisien.",
      gitLink: "https://github.com/AlgonzaDJun/Food-Corner",
      demoLink: "https://blue-bewildered-swallow.cyclic.app",
      icon: [
        <DiMongodb color="green" />,
        <SiExpress color="black" />,
        <DiReact color="#62d4fa" />,
        <DiNodejsSmall color="green" />,
      ],
    },
    {
      id: 2,
      title: "J-Commerce",
      image: "/images/porto-img/2.jpeg",
      image2: "/images/porto-img/2b.jpeg",
      desc: "Website (frontend) E-Commerce alat elektronik yang dikembangkan menggunakan ReactJS",
      gitLink: "https://github.com/AlgonzaDJun/J-Commerce",
      demoLink: "https://j-commerce.netlify.app",
      icon: [
        <DiReact color="#62d4fa" />,
        <SiMui color="#3477ea" style={{ backgroundColor: "white" }} />,
        <SiRedux color="white" style={{ backgroundColor: "#764abc" }} />,
      ],
    },
    {
      id: 3,
      title: "In Your Dreams",
      image: "/images/porto-img/3.jpeg",
      image2: "/images/porto-img/3b.jpeg",
      image3: "/images/porto-img/3c.jpeg",
      desc: "Website ini memiliki fitur-fitur yang memungkinkan pengguna berinteraksi dengan admin melalui live chat, dan mengelola inventaris bagi admin.",
      gitLink: "https://github.com/AlgonzaDJun/in-your-dreams",
      demoLink: "http://your-dreams-demo.epizy.com",
      icon: [
        <SiPhp color="##797cb0" />,
        <SiJquery color="blue" />,
        <SiPusher color="black" />,
      ],
    },
  ];

  return (
    <div className="w-100 h-100 mt-md-4 mt-0 d-block p-3 d-md-flex justify-content-md-center align-items-md-center flex-column about">
      <div className="p-4">
        <div className="display-3 fw-bold about-text">
          <div id="project">My Portfolio</div>
        </div>
      </div>
      <div
        className="py-2 px-0 px-sm-5 w-100 h-100 mx-auto"
        data-aos="zoom-in-up"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          grabCursor={true}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          // centeredSlides={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation
          style={{
            "--swiper-navigation-color": "black",
            "--swiper-pagination-color": "black",
          }}
        >
          {porto.map((item, index) => {
            return (
              <SwiperSlide key={index} className="text-center">
                <div className="porto-card">
                  <div className="porto-card-image">
                    <img
                      src={item.image}
                      style={{ objectFit: "fill" }}
                      alt="gambar"
                      onClick={() => {
                        targetRef.current.click();
                      }}
                    />
                    <a
                      ref={targetRef}
                      href={item.image}
                      data-lightbox="my-porto"
                    ></a>
                    <a href={item.image2} data-lightbox="my-porto"></a>
                    {item.image3 ? (
                      <a href={item.image3} data-lightbox="my-porto"></a>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="porto-card-title">
                    <Link target="_blank" href={item.gitLink}>
                      <BsGithub color="black" />
                    </Link>
                    <h3 className="my-auto mx-3">{item.title}</h3>
                    <Link target="_blank" href={item.demoLink}>
                      <BsLink color="black" />
                    </Link>
                  </div>
                  <div className="porto-card-description">
                    <p className="px-4 border-2">{item.desc}</p>
                  </div>
                  <div className="porto-card-tech">
                    <p className="px-4 border-2 text-center">
                      <div className="fw-bold">Tech Stack: </div>
                      <IconContext.Provider
                        value={{ size: "60", className: "icon-context" }}
                      >
                        {item.icon.map((icon) => {
                          return icon;
                        })}
                      </IconContext.Provider>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
