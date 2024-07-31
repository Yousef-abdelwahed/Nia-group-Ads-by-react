import React from "react";
import "./BrandSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

interface IProps {}
const partnersArray = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
const swiperSliedsPartnersLogos = (
  <>
    {partnersArray.map((item, index) => (
      <SwiperSlide key={uuidv4()}>
        <div className="partnerLogos flex   w-full">advertising</div>
      </SwiperSlide>
    ))}
  </>
);

export function BrandSlider() {
  return (
    <section className="  m-auto my-large">
      <div className="   flex justify-center items-center mt-large ">
        <div className="  ">
          <div className="py-[48px] md:py-[90px] w-screen left-0 right-0 ">
            <Swiper
              spaceBetween={0}
              navigation={false}
              speed={1000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                300: {
                  slidesPerView: 4.5,
                  spaceBetween: 8,
                },
                550: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1225: {
                  slidesPerView: 8.5,
                  spaceBetween: 10,
                },
              }}
            >
              {swiperSliedsPartnersLogos}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
