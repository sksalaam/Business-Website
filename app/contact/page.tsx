import React from 'react'
import ContactBar from '../components/ContactBar/contactBar'
import Navbar from '../components/Navbar/navbar'
import Link from 'next/link'
import Footer from '../components/Footer/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedin,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from '../components/ContactForm/ContactForm'


const Contact = () => {
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
            Get In Touch With Us
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
          <span className="text-black ">Contact</span>
        </div>
      </div>
      <section className='pt-[90px] mx-[172px]'>
      <div className=" flex">
       <div className=" bg-[#3740b0] w-[400px] h-[432px] px-[30px] py-[34px]">   
        <div className='pb-[27px]'>      
    <p className="font-medium text-white text-xl">Head Quater</p>
    </div>  
  
  <ul className="">
    <li className='relative ps-[40px] pb-[13px] mb-[15px] border-b'>

        <div className=" absolute top-[2px] left-0">
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#b2c9ff" }} />
        </div>
        <div className=" ">
          <p className='text-[#b2c9ff] leading-6'>
            <span className='text-white font-semibold'>Address: </span>
            One World Trade Center,
            <br/>
          285 Fulton Street, Suite 8500,
          <br/>
          New York City,
          <br/>
           NY 10007.</p>
        </div>
      
    </li>

    <li className='relative ps-[40px] pb-[13px] mb-[15px] border-b'>
      
        <div className="absolute top-[2px] left-0">
          <i className="fa-solid fa-phone" style={{ color: "#b2c9ff" }}></i>
        </div>
        <div className="">
          <p className='text-[#b2c9ff] leading-6'>
            <span className='text-white font-semibold'>Call Us: </span>
            <br/>
            +1-917-302-0987</p>
        </div>
      
    </li>

    <li className='relative ps-[40px] pb-[13px]  border-b'>
      
        <div className="absolute top-[2px] left-0">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#b2c9ff" }} />
        </div>
        <div className="">
          <p className='text-[#b2c9ff] leading-6'>
           <span className='text-white font-semibold'>Mail Us:</span>
           <br></br>
            Contact@americanholdingintl.com</p>
        </div>
      
    </li>

    <li>
      <div className="flex items-center pt-4">

        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebookF} style={{ color: "#b2c9ff" }} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#b2c9ff" }} />
          </a>
          <a href="#" className="hover:text-gray-300 ">
            <FontAwesomeIcon icon={faGoogle} style={{ color: "#b2c9ff" }} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#b2c9ff" }} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faSkype} style={{ color: "#b2c9ff" }} />
          </a>
        </div>
      </div>
    </li>
  </ul>


  </div>

  <div className='flex-1'>
   
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.198889111136!2d-74.0112960240972!3d40.713637971393375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18daab1aaf%3A0x36e2a247ff22082!2s285%20Fulton%20St%20Suite%208500%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1728842904855!5m2!1sen!2sin"
      width="100%"
      height="432px"
      className="border-none"
      loading="lazy"
    ></iframe>
  </div>
</div>

      </section>
      <section>
        <ContactForm/>
      </section>
      <Footer/>
    </div>
  )
}

export default Contact
