import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";
import ContactBar from "../components/ContactBar/contactBar";
import Link from "next/link";
import AboutUsSlider from "../components/AboutUsSlider/AboutSlider";
import AboutUsServicesSwiper from "../services/AboutUs-Services-Slider";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | MyApp</title>
        <meta name="description" content="Learn more about our company" />
      </Head>
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
              About Us
            </h1>
          </div>
          <div className="absolute  mx-[176px] bottom-4 left-6 flex items-center space-x-2">
            <Link
              href="/home"
              className="text-white hover:text-black transition-all"
            >
              Home
            </Link>
            <span className="text-white"> &gt; </span>
            <span className="text-black ">About Us</span>
          </div>
        </div>

        <section className="py-[90px] bg-white">
          <div className=" mx-[174px] md:mx-16 lg:mx-[174px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="h-[380px] w-[570]">
                <img
                  src="https://www.americanholdingintl.com/business-meeting-in-conference-room-2022-11-06-23-00-48-utc.jpg"
                  alt="About Us"
                  className=""
                />
              </div>

              <div>
                <p className="text-gray-400  leading-[26px] mb-4">
                  American Holding International Inc is a US based corporation
                  with a global consortium interlinked subsidiaries with
                  hundreds of affiliates and affiliates across the world, who
                  provide services to companies and governments. Our
                  subsidiaries' services include Technology, Healthcare,
                  Education, Energy, Media, Real Estate, Infrastructure, Mining,
                  and Investments. We have 25 years of experience and expertise
                  in the field of service for companies and governments.
                </p>
                <p className="text-gray-400  leading-[26px]">
                  We, American Holding International Inc, is a top-rated company
                  working in the field of technology, healthcare, education, and
                  energy. Our expertise has been recognized worldwide and this
                  has earned us an honorable position in One World Trade Center,
                  New York. We provide services globally in several sectors such
                  as infrastructure, mining, and investments. Contact us today
                  if you wish to collaborate with us.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[90px] bg-[#f2f2f2]">
  <div className="mx-[174px]">
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 h-[439px] px-[15px] rounded-sm">
        <div className="bg-[#e8e8e8] h-full pt-[44px] pb-[26px] px-[30px] flex flex-col justify-center">
          <ul>
            <li className="relative block ps-[65px] mb-5">
              <div className="absolute top-[6px] left-0">
                <i className="fas fa-users text-4xl text-gray-500"></i>
              </div>
              <div className="text-holder">
                <h3 className="text-xl font-medium leading-7 text-[#222222] mb-[3px]">
                  Experienced Team
                </h3>
                <p className="my-3 text-[#848484]">
                  We have a dedicated team of skilled professionals who excel in providing end-to-end solutions for clients.
                </p>
              </div>
            </li>

            <li className="relative block ps-[65px] mb-5">
              <div className="absolute top-[6px] left-0">
                <i className="fas fa-clock text-4xl text-gray-500"></i>
              </div>
              <div className="text-holder">
                <h3 className="text-xl font-medium leading-7 text-[#222222] mb-[3px]">
                  On-Time Delivery
                </h3>
                <p className="my-3 text-[#848484]">
                  We aim to bring world-class services to our clients through our integrated portfolio of businesses and deliver on time.
                </p>
              </div>
            </li>

            <li className="relative block ps-[65px] mb-5">
              <div className="absolute top-[6px] left-0">
                <i className="fa-regular fa-star text-4xl text-gray-500"></i>
              </div>
              <div className="text-holder">
                <h3 className="text-xl font-medium leading-7 text-[#222222] mb-[3px]">
                  Our Value
                </h3>
                <p className="my-3 text-[#848484]">
                  We provide 100% work satisfactory services to our clients so that they can work without any problem.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 h-[439px] relative px-[15px]">
        <AboutUsSlider />
      </div>
    </div>
  </div>
</section>

        <section
          className="relative h-[327px] bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: `url('https://www.americanholdingintl.com/images/parallax-background/1.jpg')`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#3a43b0cc] bg-opacity-85 z-10">
            <div className="flex flex-col justify-center items-center h-full text-white text-center">
              <h1 className="text-4xl font-bold">Create Your Opportunities</h1>
              <p className="mt-4 text-lg">
                We are a team of experts with proven success in multiple
                industries. Contact us today to learn how we can help you reach
                your goals.
              </p>
            </div>
          </div>
        </section>
        <section className="py-[90px]">
          <AboutUsServicesSwiper />
        </section>
        <Footer />
      </div>
    </>
  );
}
