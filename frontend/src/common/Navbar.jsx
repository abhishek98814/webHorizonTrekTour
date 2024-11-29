import React, { useState, useEffect, useRef } from 'react';
import trekIcons from "../assets/trekIcons.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars, FaTimes } from 'react-icons/fa'; 
import userIcons from "../assets/userIcons.png";
import { Link } from 'react-router-dom';
import Banner from '../pages/Home/Banner';



const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const dropdownRef = useRef(null);

  const toggleDropdown = (section) => {
    if (isDropdownOpen === section) {
      setIsDropdownOpen(null); 
    } else {
      setIsDropdownOpen(section);
    }
  };

  const closeDropdown = () => {
    setIsDropdownOpen(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
        setIsMobileMenuOpen(false); // Close mobile menu on outside click
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const data = {
    tour: [
      { id: 1, name: 'Everest Base Camp Trek' },
      { id: 2, name: 'Annapurna Circuit Trek' },
      { id: 3, name: 'Langtang Valley Trek' },
    ],
    activities: [
      { id: 1, name: 'Cultural Tour' },
      { id: 2, name: 'River Rafting' },
      { id: 3, name: 'Mountain Biking' },
    ],
    blog: [
      { id: 1, name: 'Travel Guide' },
      { id: 2, name: 'Weather Information' },
      { id: 3, name: 'Visa Requirements' },
    ],
    company: [
      { id: 1, name: 'About Us' },
      { id: 2, name: 'Our Team' },
      { id: 3, name: 'Careers' },
    ],
    
  }

  return (
    <>
      <div className="flex items-center fixed top-0 bg-gray-800 justify-between px-8 py-8 relative">
        <div className="flex-shrink-0">
          <Link to='/'>
          <img src={trekIcons || ''} alt="Trek Image" className="w-16 h-auto object-cover" />
          </Link>
        </div>
        <div className="hidden md:flex"> 
          <ul className="flex gap-8 mx-8 text-white" ref={dropdownRef}>
            {['tour', 'activities', 'blog', 'company'].map((section) => (
              <span key={section} className="relative flex items-center gap-2 hover:text-indigo-600" onClick={() => toggleDropdown(section)}>
                <li className="hover:text-indigo-600 transition duration-300 cursor-pointer font-semibold text-lg capitalize">
                  {section === 'tour' ? 'Tour' : section === 'activities' ? 'Other Local Activities' : section === 'blog' ? 'blog' : 'Company'}
                </li>
                <RiArrowDropDownLine className="items-center text-2xl" />
                {isDropdownOpen === section && (
                  <div className="absolute top-full mt-2 w-48 bg-white bg-opacity-90 shadow-lg rounded-lg z-50">
                    <ul className="text-gray-900">
                      {data[section].map(item => (
                        <Link to='/overView'>
                        <li key={item.id} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          {item.name}
                        </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </span>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
  <button className="text-white hover:text-indigo-600 transition duration-300 cursor-pointer font-semibold text-lg">
    Contact
  </button>
</div>

        <div className="md:hidden"> 
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="flex flex-col bg-gray-950 text-white md:hidden">
          <ul className="flex flex-col gap-4  px-1 py-2">
            {['tour', 'activities', 'info', 'company'].map((section) => (
              <li key={section} className="cursor-pointer hover:text-indigo-600" onClick={() => toggleDropdown(section)}>
                {section === 'tour' ? 'Tour' : section === 'activities' ? 'Other Local Activities' : section === 'info' ? 'Tour Information' : 'Company'}
                <RiArrowDropDownLine className="inline ml-2" />
                {isDropdownOpen === section && (
                  <ul className="mt-2 w-48 bg-white bg-opacity-90 text-gray-900 rounded-lg shadow-lg">
                    {data[section].map(item => (
                      <li key={item.id} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}


      
    </>
  );
};

export default Navbar;
