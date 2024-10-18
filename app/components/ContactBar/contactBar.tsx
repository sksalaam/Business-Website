import './contactBar.css';

const ContactBar = () => {
  return (
    <div className="bg-[#101e3f] h-[55px]  text-white wrapper">
      <div className="flex justify-between flex-row items-center mx-44 flex-wrap h-full contact ">
        {/* Left Side (Contact Info) */}
        <div className="flex items-center space-x-6 h-full font-medium leading-5 text-[15px]">
          <span className="flex items-center h-full border-l border-[#23304e] pl-4">
            <i className="fa-solid fa-globe mr-1" style={{ color: "#b2c9ff" }}></i>
            <div className='relative w-full'>
            <select className="bg-[#101e3f] text-white border-none outline-none cursor-pointer w-full overflow-auto">
              <option className='bg-[#101e3f] px-5 py-8 relative' value="Newyork">Newyork</option>
            </select>
             
            </div>
          </span>

          <span className="flex items-center h-full border-l border-[#23304e] pl-4">
            <i className="fa-solid fa-phone mr-1" style={{ color: "#b2c9ff" }}></i>
            <span>+1-917-302-0987</span>
          </span>

          <span className="flex items-center h-full border-l border-[#23304e] pl-4">
            <i className="fa-solid fa-envelope mr-1" style={{ color: "#b2c9ff" }}></i>
            <span>Contact@americanholdingintl.com</span>
          </span>
        </div>

        {/* Social Media Section */}
        <div className="flex items-center h-full social">
          <span className="mr-2 leading-[26px] text-[15px] font-medium">Stay Connected:</span>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-lg">
                <i className="fa-brands fa-facebook-f" style={{ color: "#b2c9ff", fontSize: '14px' }}></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                <i className="fa-brands fa-twitter" style={{ color: "#b2c9ff", fontSize: '14px' }}></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                <i className="fa-brands fa-google-plus-g" style={{ color: "#b2c9ff", fontSize: '14px' }}></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                <i className="fa-brands fa-linkedin-in" style={{ color: "#b2c9ff", fontSize: '14px' }}></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                <i className="fa-brands fa-skype" style={{ color: "#b2c9ff", fontSize: '14px' }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
