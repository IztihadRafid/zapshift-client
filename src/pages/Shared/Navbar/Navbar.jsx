import { Button } from '@/components/ui/button';

import Logo from '@/CustomComponents/Logo';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
     <Logo></Logo>
      <div className="hidden md:flex items-center gap-4">
        <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Coverage</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">About Us</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Pricing</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Be a Rider</a>
      </div>
      <div className=" flex items-center gap-4 lg:mr-4">
        <Button className="bg-lime-500 hover:bg-lime-600">Sign In</Button>
        <Button className="bg-gray-500 text-white hover:bg-lime-600">Be a Rider</Button>
      </div>
    </nav>
  );
};

export default Navbar;