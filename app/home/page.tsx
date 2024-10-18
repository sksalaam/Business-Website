import React from "react";
import Navbar from "../components/Navbar/navbar";
import Link from "next/link";

import { FaAward } from "react-icons/fa6";
import { FaShippingFast, FaHandshake } from "react-icons/fa";
import HomeServicesSwiper from "../services/HomeServicesSwiper";
import FormComponent from "../components/FormComponent/FormComponent";
import Footer from "../components/Footer/Footer";
import ContactBar from "../components/ContactBar/contactBar";

export default function HomePage() {
  return (
    <div className="relative">
      <ContactBar/>
      
      <div
        className="relative bg-cover bg-center min-h-[110vh]"
        style={{
          backgroundImage: `url('https://www.americanholdingintl.com/images/slides/1.jpg')`,
          backgroundSize: "cover",
        }}
      ><Navbar />
        
          
          <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="text-start animate-slide-in">
              <h1 className="text-[76px] leading-[91px] font-poppins font-medium text-white ">
                Create Your <br /> Opportunities
              </h1>
              <div className="text-[20px] text-white mt-4 text-start">
                <p>
                  We are a team of experts with proven success in multiple
                  industries.
                </p>
                <p className="leading-[32px]">
                  We will go above and beyond to get your results. Contact us
                  today to learn how we can help you reach your goals.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="bg-blue-900 text-white py-3 px-6 rounded-sm mr-4"
                >
                  Read More
                </Link>
                <Link
                  href="/contact"
                  className="bg-gray-800 text-white py-3 px-6 rounded-sm"
                >
                  Contact Us
                </Link>
              </div>  
          </div>
        </div>
      </div>

      
      <div className="relative">

<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url('https://www.americanholdingintl.com/images/resources/callto-action-bg.jpg')`,
    height: '330px',

  }}
/>


<div 
  className="absolute inset-0"
  style={{
    background: 'linear-gradient(to top, rgba(55, 64, 176, .90) 0%, rgba(22, 30, 130, 1) 100%)',
    height: '330px',

  }}
></div>

<div className="row mx-[174px] "> 
  <div className="col-span-3 px-4 flex justify-between">
    <ul className="flex w-full ">
   
      <li className="pe-7 flex-1">
        <div className="py-16 block ">
          <div className="flex justify-start mb-4 ">
            <FaAward className="text-6xl text-white z-10 " />
          </div>
          <div className="mt-5 relative text-center">
            <h3 className="text-xl font-semibold text-white mb-4 text-start">
              Experienced Team
            </h3>
            <p className="text-[16px] text-white text-start">
              We have a dedicated team of skilled professionals who
              excel in providing end-to-end solutions for the clients.
            </p>
          </div>
        </div>
      </li>

    
      <li className="px-7 flex-1 z-10" style={{borderLeft: "solid 2px rgba(255, 255, 255, 0.15)", borderRight:'solid 2px rgba(255, 255, 255, 0.15)'}}>
        <div className="py-16 block">
          <div className="flex justify-start mb-4">
            <FaShippingFast className="text-6xl text-white z-10" />
          </div>
          <div className="mt-5 relative text-center">
            <h3 className="text-xl font-semibold text-white mb-4 text-start">
              On Time Delivery
            </h3>
            <p className="text-[16px] text-white text-start ">
              We aim to bring world-class services to our clients
              through our integrated portfolio of businesses and deliver
              on time.
            </p>
          </div>
        </div>
      </li>

    
      <li className="px-7 flex-1" >
        <div className="py-16 block">
          <div className="flex justify-start mb-4">
            <FaHandshake className="text-6xl text-white z-10" />
          </div>
          <div className="mt-5 relative text-center">
            <h3 className="text-xl font-semibold text-white mb-4 text-start">
              Our Value
            </h3>
            <p className="text-[16px] text-white text-start">
              We provide 100% satisfactory to our clients so that they
              can work without any problem.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</div>


      <section className="bg-[#101e3f] py-[90px]">
        <div className="mx-[174px]">
          <div >
            <h1 className="text-white text-3xl">Welcome to American Holding International Inc</h1>
            <p className="mt-4 font-normal text-[#848484] leading-7">American Holding International Inc, is a top-rated company working in the field of technology, healthcare, education, and energy. Our expertise has been recognized worldwide and this has earned us an honorable position in One World Trade Center, New York. We provide services globally in several sectors such as infrastructure, mining, and investments. Contact us today if you wish to collaborate with us.</p>
          </div>
        </div>
      </section>
      <section className="pt-[90px] pb-[77px]">
        <HomeServicesSwiper/>
      </section>
      <section className="pt-[90px] pb-[77px]">
        <FormComponent/>
      </section>
      <section >
        <Footer/>
      </section>
    </div>
  );
}
