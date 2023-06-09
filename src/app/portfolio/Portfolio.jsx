"use client";
import React from "react";
import "../css/portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Pagination, Autoplay, Navigation } from "swiper";

export const Portfolio = () => {
  return (
    <div className="w-100 h-100 mt-md-4 mt-0 d-block p-3 d-md-flex justify-content-md-center align-items-md-center flex-column about">
      <div className="p-4">
        <div className="display-3 fw-bold about-text">
          <div id="project">My Portfolio</div>
        </div>
      </div>
      <div className="py-5 px-4 w-100 h-100 mx-auto ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide className=" text-center">
            <div className="porto-card">
              {/* image, title, description */}
              <div className="porto-card-image">
                <img src="https://picsum.photos/1900/1600" alt="gambar"/>
              </div>
              <div className="porto-card-title">
                <h3>Project 1</h3>
              </div>
              <div className="porto-card-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" text-center">
            <div className="porto-card">
              {/* image, title, description */}
              <div className="porto-card-image">
                <img src="https://picsum.photos/1900/1600" alt="gambar"/>
              </div>
              <div className="porto-card-title">
                <h3>Project 1</h3>
              </div>
              <div className="porto-card-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" text-center">
            <div className="porto-card">
              {/* image, title, description */}
              <div className="porto-card-image">
                <img src="https://picsum.photos/1900/1600" alt="gambar"/>
              </div>
              <div className="porto-card-title">
                <h3>Project 1</h3>
              </div>
              <div className="porto-card-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
