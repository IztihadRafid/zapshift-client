
import { Input } from "@/components/ui/input";
import Logo from "@/CustomComponents/Logo";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" pt-16 px-4 ">
      <div className=" mx-auto rounded-[15px] bg-gradient-to-br from-[#0d3b36] to-[#0a2e2a] text-white  shadow-xl p-8 md:p-12 relative overflow-hidden">
        
        {/* Decorative background lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8" />
              
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering businesses with advanced solutions and tools to improve
              internal workflows and overall performance.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 mb-6 text-gray-300">
              <a href="#" className="hover:text-white"><FaFacebook size={25} color="white"/></a>
              <a href="#" className="hover:text-white"><FaLinkedin size={25} color="white"/></a>
              <a href="#" className="hover:text-white"><FaSquareXTwitter size={25} color="white"/></a>
            </div>

            {/* Back to top */}
            <Input placeholder="Enter for Query"  className="bg-gray-600 w-96"></Input>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="font-semibold mb-4">Site Map</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Homepage</a></li>
              <li><a href="#" className="hover:text-white">Technology</a></li>
              <li><a href="#" className="hover:text-white">Affiliate Dashboard</a></li>
              <li><a href="#" className="hover:text-white">Resources & News</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">License & Credits</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;