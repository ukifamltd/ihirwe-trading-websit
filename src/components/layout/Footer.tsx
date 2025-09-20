// components/layout/Footer.tsx
import React from "react";
import CompanyLogo from "../ui/CompanyLogo";
import { 
  Facebook, 
  Twitter, 
  // Instagram, 
  Linkedin, 
  // Github 
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Logo */}
          <div className="w-full md:w-auto flex justify-start">
            <CompanyLogo 
              variant="text" 
              size="md" 
              className="text-white hover:text-green-400 transition-colors duration-300" 
            />
          </div>

          {/* Center - Copyright */}
          <div className="w-full md:w-auto text-center">
            <p className="text-sm md:text-base font-sans">
              Copyrights &copy; {currentYear} - {" "}
              <a 
                href="#" 
                className="font-serif text-white hover:text-green-400 transition-colors duration-300"
              >
                IHIRWE TRADING CO LTD.
              </a>, All Rights Reserved.
            </p>
          </div>

          {/* Right - Social Icons */}
          <div className="w-full md:w-auto flex justify-end">
            <ul className="flex space-x-5">
              {[
                { icon: <Facebook className="w-5 h-5" />, link: "https://facebook.com", color: "hover:text-blue-500" },
                { icon: <Twitter className="w-5 h-5" />, link: "https://x.com/", color: "hover:text-blue-400" },
                // { icon: <Instagram className="w-5 h-5" />, link: "", color: "hover:text-pink-500" },
                { icon: <Linkedin className="w-5 h-5" />, link: "https://linkedin.com", color: "hover:text-blue-600" },
                // { icon: <Github className="w-5 h-5" />, link: "", color: "hover:text-gray-400" },
              ].map((social, index) => (
                <li key={index}>
                  <a 
                    href={`${social.link}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;