// components/Footer.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "/home", label: "Home" },
    { href: "#", label: "Energy" },
    { href: "/about", label: "About Us" },
    { href: "#", label: "Media" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Real Estate" },
    { href: "/services", label: "Our Services" },
    { href: "#", label: "Infrastructure" },
    { href: "#", label: "Technology" },
    { href: "#", label: "Mining" },
    { href: "#", label: "Healthcare" },
    { href: "#", label: "Investments" },
    { href: "#", label: "Education" },
  ];

  if (!mounted) return null;
  return (
    <>
      <footer className="bg-[#0e1b38] h-[481px] text-white pt-[90px] pb-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 px-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Contact Details</h2>
            <div className="h-[2px] w-[64px] bg-white mb-10"></div>

            <p className="font-medium text-xl">Head Quater</p>
            <p className="flex items-center text-gray-300 italic">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2"
                style={{ color: "#b2c9ff" }}
              />{" "}
              One World Trade Center,
              <br />
              285 Fulton Street, Suite 8500,
              <br />
              New York City, NY 10007.
            </p>
            <p className="flex items-center text-gray-300 italic">
              <i
                className="fa-solid fa-phone mr-1"
                style={{ color: "#b2c9ff" }}
              ></i>{" "}
              +1-917-302-0987
            </p>
            <p className="flex italic items-center text-gray-300">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2"
                style={{ color: "#b2c9ff" }}
              />{" "}
              Contact@americanholdingintl.com
            </p>

            <div className="flex space-x-4">
              <p className="italic text-gray-300">Stay connected:</p>
              <a href="#" className="hover:text-gray-300">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: "#b2c9ff" }}
                />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#b2c9ff" }}
                />
              </a>
              <a href="#" className="hover:text-gray-300 ">
                <FontAwesomeIcon icon={faGoogle} style={{ color: "#b2c9ff" }} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#b2c9ff" }}
                />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faSkype} style={{ color: "#b2c9ff" }} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">Our Location</h2>
            <div className="h-[2px] w-[64px] mt-4 bg-white mb-10"></div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.198889111136!2d-74.0112960240972!3d40.713637971393375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18daab1aaf%3A0x36e2a247ff22082!2s285%20Fulton%20St%20Suite%208500%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1728842904855!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="border-none"
              loading="lazy"
            ></iframe>
          </div>

          {/* Useful Links Section */}
          <div>
            <h2 className="text-2xl font-medium">Useful Links</h2>
            <div className="h-[2px] w-[64px] mt-4 bg-white mb-10"></div>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:text-white flex items-center ${
                      pathname === link.href ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    <span className="mr-2">{">"}</span>
                    <span className="hover:underline">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <div className="text-center text-[#848484] text-md my-7 flex justify-around">
        <p>
          Copyrights © 2023 All Rights Reserved. American Holding International
          Inc
        </p>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-900 ">
            Legal
          </a>
          <a href="#" className="hover:text-blue-900">
            Sitemap
          </a>
          <a href="#" className="hover:text-blue-900">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-900">
            Terms & Conditions
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
