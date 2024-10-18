import React from "react";
import ContactBar from "../components/ContactBar/contactBar";
import Navbar from "../components/Navbar/navbar";
import Link from "next/link";
import Footer from "../components/Footer/Footer";

const Services = () => {
  const services = [
    {
      title: "TECHNOLOGY",
      image: "https://www.americanholdingintl.com/images/services/4.jpg",
      description:
        "We are a leading Information Technology Services Company, specializing in comprehensive business solutions across a wide range of platforms including cloud technology and managed services.",
    },
    {
      title: "HEALTH CARE",
      image: "https://www.americanholdingintl.com/images/services/5.jpg",
      description:
        "We provide healthcare services that can help you grow your practice, including billing & coding, practice management and technology solutions. We offer 24/7 support and personalized service to keep you up and running.",
    },
    {
      title: "EDUCATION",
      image: "https://www.americanholdingintl.com/images/services/6.jpg",
      description:
        "We take education to the next level with online course options that help you expand your skillset. online education platform with cost-effective courses available to students of all ages and at all levels",
    },
    {
      title: "ENERGY",
      image: "https://www.americanholdingintl.com/images/services/7.jpg",
      description:
        "Renewable energy is all about a future powered by sunshine, wind, geothermal and other natural sources. And by supporting green energy, you're helping to protect our planet.",
    },
    {
      title: "MEDIA",
      image: "https://www.americanholdingintl.com/images/services/8.jpg",
      description:
        "We offer social media services that help businesses build and grow their social media presence. Our team can help you maximize the effect of this marketing channel by creating a customized strategy",
    },
    {
      title: "REALESTATE",
      image: "https://www.americanholdingintl.com/images/services/9.jpg",
      description:
        "Our team will help you find the best properties for your needs. We specialize in residential and commercial properties, as well as new construction or architectural renovations.",
    },
    {
      title: "INFRASTRUCTURE",
      image: "https://www.americanholdingintl.com/images/services/1.jpg",
      description:
        "We're committed to sharing our expertise in infrastructure development, specifically in building private and public-sector partnerships that result in world-class transportation and critical community amenities.",
    },
    {
      title: "MINING",
      image: "https://www.americanholdingintl.com/images/services/2.jpg",
      description:
        "Exploring mines and finding ores can be dangerous and exciting, but with the right training, you can master the art of mining. You can also find valuable minerals that could lead you to a life you never imagined.",
    },
    {
      title: "INVESTMENT",
      image: "https://www.americanholdingintl.com/images/services/3.jpg",
      description:
        "A well-thought-out investment strategy can help you achieve your financial goals. Discover how you can invest your money and grow your wealth",
    },
  ];

  return (
    <div>
      <ContactBar />
      <Navbar />

      <div
        className="relative bg-cover bg-center h-[370px] flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://www.americanholdingintl.com/images/resources/breadcrumb-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#3a43b0] opacity-80"></div>
        <div className="relative text-center">
          <h1 className="text-white text-[36px] leading-[42px] font-bold">
            Services
          </h1>
        </div>
        <div className="absolute mx-[176px] bottom-4 left-6 flex items-center space-x-2">
          <Link
            href="/home"
            className="text-white hover:text-black transition-all"
          >
            Home
          </Link>
          <span className="text-white"> &gt; </span>
          <span className="text-black">Services</span>
        </div>
      </div>

      <div className="mx-[174px] py-10">
        <div className="pb-10 text-center flex flex-col justify-center items-center">
          <p className="mb-[6px] font-normal text-gray-500">
            Actually What We Do
          </p>
          <h2 className="text-3xl text-center font-medium font-poppins">
            Our Main Services
          </h2>
          <div className="h-[2px] w-[65px] bg-[#2d509a] mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="m-[10px] p-[20px] flex flex-col justify-between h-[460px]"
              style={{ boxShadow: "0px 0px 15px 2px #ebebf2" }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full transition-transform duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                <div
                  className="absolute bottom-0 left-0 z-10 py-3 px-2 text-center"
                  style={{
                    backgroundColor: "rgba(58, 67, 176, 0.90)",
                    width: "250px",
                  }}
                >
                  <h3 className="text-white font-bold">{service.title}</h3>
                </div>
              </div>

              <div className="flex flex-col justify-between flex-grow pt-4">
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <Link href="/services" className="font-semibold mt-auto">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
