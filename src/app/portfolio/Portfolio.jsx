"use client";
import React, { useEffect, useState } from "react";
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
  SiLaravel,
  SiMui,
  SiMysql,
  SiPhp,
  SiPusher,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import "lightbox2/dist/css/lightbox.min.css";
// import "lightbox2/dist/js/lightbox-plus-jquery.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

export const Portfolio = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    AOS.init();
    require("lightbox2/dist/js/lightbox-plus-jquery.min.js");
    setDomLoaded(true);
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
        <DiMongodb key={1} color="green" />,
        <SiExpress key={2} color="black" />,
        <DiReact key={3} color="#62d4fa" />,
        <DiNodejsSmall key={4} color="green" />,
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
        <DiReact key={1} color="#62d4fa" />,
        <SiMui key={2} color="#3477ea" style={{ backgroundColor: "white" }} />,
        <SiRedux
          key={3}
          color="white"
          style={{ backgroundColor: "#764abc" }}
        />,
      ],
    },
    {
      id: 4,
      title: "Travel Website",
      image: "/images/porto-img/4.png",
      image2: "/images/porto-img/4b.png",
      image3: "/images/porto-img/4c.png",
      desc: "Website pemesanan paket travel dengan integrasi payment gateway dari MIDTRANS serta dashboarad admin.",
      gitLink: "#",
      demoLink: "https://travel.juna.my.id",
      icon: [
        <SiLaravel key={1} color="#F05340" />,
        <SiMysql key={2} color="#00758f" />,
        <SiJquery key={3} color="black" />,
      ],
    },
    {
      id: 3,
      title: "Todo List With Chat",
      image: "/images/porto-img/todo.png",
      image2: "/images/porto-img/todo2.png",
      desc: "Sebuah Website untuk mengelola todo list Anda dengan tambahan fitur chat antar teman.",
      gitLink: "https://github.com/AlgonzaDJun/TODO-CHAT",
      demoLink: "https://todo.juna.my.id/",
      icon: [
        <SiLaravel key={1} color="#F05340" />,
        <SiTailwindcss key={2} color="#15BECB" />,
        <SiPusher key={3} color="#300D4F" />,
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
        // data-aos-delay="50"
        data-aos-duration="1300"
        data-aos-easing="ease-in-out"
      >
        {domLoaded ? (
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
                      <a href={item.image} data-lightbox={`my-porto-${index}`}>
                        <img
                          src={item.image}
                          style={{ objectFit: "fill" }}
                          alt="gambar"
                        />
                      </a>
                      <a
                        href={item.image2}
                        data-lightbox={`my-porto-${index}`}
                      ></a>
                      {item.image3 ? (
                        <a
                          href={item.image3}
                          data-lightbox={`my-porto-${index}`}
                        ></a>
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
        ) : null}
      </div>
    </div>
  );
};
