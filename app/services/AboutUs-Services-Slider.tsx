"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const AboutUsServicesSwiper = () => {
  const services = [
    {
      title: "TECHNOLOGY",
      image: "https://www.americanholdingintl.com/images/services/4.jpg",
    },
    {
      title: "HEALTH CARE",
      image: "https://www.americanholdingintl.com/images/services/5.jpg",
    },
    {
      title: "EDUCATION",
      image: "https://www.americanholdingintl.com/images/services/6.jpg",
    },
    {
      title: "ENERGY",
      image: "https://www.americanholdingintl.com/images/services/7.jpg",
    },
    {
      title: "MEDIA",
      image: "https://www.americanholdingintl.com/images/services/8.jpg",
    },
    {
      title: "REALESTATE",
      image: "https://www.americanholdingintl.com/images/services/9.jpg",
    },
    {
      title: "INFRASTRUCTURE",
      image: "https://www.americanholdingintl.com/images/services/1.jpg",
    },
    {
      title: "MINING",
      image: "https://www.americanholdingintl.com/images/services/2.jpg",
    },
    {
      title: "INVESTMENT",
      image: "https://www.americanholdingintl.com/images/services/3.jpg",
    },
  ];

  return (
    <>
      <div className="mx-[174px]">
        <div className="pb-10 text-center flex flex-col justify-center items-center">
          <p className="mb-[6px] font-normal text-gray-500">Actually What We Do</p>
          <h2 className="text-3xl text-center font-medium font-poppins">Our Main Services</h2>
          <div className="h-[2px] w-[65px] bg-[#2d509a] mt-4"></div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="w-[383px] me-[10px] relative overflow-hidden">
                <div
                  className="m-[10px] p-[20px] flex flex-col justify-between"
                  style={{ boxShadow: "0px 0px 15px 2px #ebebf2" }}
                >
                  <div className="relative group overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full transition-transform duration-500 transform group-hover:scale-110" 
                    />
                    <div
                      className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30" 
                    ></div>
                    <div
                      className="absolute bottom-0 left-0 z-10 py-3 px-2 text-center"
                      style={{ backgroundColor: "rgba(58, 67, 176, 0.90)", width: '250px' }}
                    >
                      <h3 className="text-white font-bold">{service.title}</h3>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-grow pt-4">
                    <Link href="/services" className="font-semibold mt-auto">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination mt-4 text-center"></div> 
      </div>

      <style jsx global>{`
        .swiper-pagination {
          margin-top: 20px;
        }

        .swiper-pagination-bullet {
        
          width: 12px;
          height: 12px;
          text-align: center;
          line-height: 20px;
          font-size: 12px;
          color: #000;
          opacity: 1;
          background: rgba(0, 0, 0, 0.2);
        }

        .swiper-pagination-bullet-active {
          color: #fff;
          background: #007aff;
        }
      `}</style>
    </>
  );
};

export default AboutUsServicesSwiper;
