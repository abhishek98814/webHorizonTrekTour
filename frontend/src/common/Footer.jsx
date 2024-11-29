import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from "../assets/trekIcons.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Destinations",
      links: [
        { name: "Nepal", href: "/nepal" },
        { name: "Bhutan", href: "/bhutan" },
        { name: "India", href: "/india" },
        { name: "Tibet", href: "/tibet" }
      ]
    },
    {
      title: "Main Activities",
      links: [
        { name: "Trekking", href: "/trekking" },
        { name: "Climbing", href: "/climbing" },
        { name: "Cultural Tours", href: "/cultural-tours" },
        { name: "Wildlife Safaris", href: "/wildlife-safaris" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact Us", href: "/contact" },
        { name: "Terms & Conditions", href: "/terms" }
      ]
    },
    {
      title: "Useful Links",
      links: [
        { name: "FAQs", href: "/faqs" },
        { name: "Blog", href: "/blog" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Privacy Policy", href: "/privacy" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8">
            <img src={logo} alt="Trek Adventures Logo" className="h-16 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Embark on unforgettable journeys with Trek Adventures. 
              Explore the Himalayas and beyond with our expert-led tours.
            </p>
          </div>
          
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium mb-3 text-white">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <a 
                          href={link.href} 
                          className="text-gray-400 font-semibold hover:text-white transition duration-300 text-md"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-lg font-medium mb-2 text-green-400">Recommendations</h3>
              <p className="text-gray-400 text-sm">Check out our most popular trekking packages!</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-start md:justify-end space-x-6">
              {[
                { Icon: FaFacebookF, href: "https://www.facebook.com" },
                { Icon: FaTwitter, href: "https://www.twitter.com" },
                { Icon: FaInstagram, href: "https://www.instagram.com" },
                { Icon: FaLinkedinIn, href: "https://www.linkedin.com" }
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index} 
                  href={href} 
                  className="text-gray-400 hover:text-green-400 transition duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Trek Adventures. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;