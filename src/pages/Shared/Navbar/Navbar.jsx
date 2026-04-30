import { Button } from '@/components/ui/button';


import Logo from '@/CustomComponents/Logo';
import { NavLink } from 'react-router';
const Navbar = () => {

  const links = <>
    <li className="list-none">
      <NavLink to="/services" className="text-gray-600 hover:text-gray-800">Services</NavLink>
    </li>
    <li className="list-none">
      <NavLink to="/coverage" className="text-gray-600 hover:text-gray-800">Coverage</NavLink>
    </li>
    <li className="list-none">
      <NavLink to="/aboutus" className="text-gray-600 hover:text-gray-800">About Us</NavLink>
    </li>
    <li className="list-none">
      <NavLink to="/pricing" className="text-gray-600 hover:text-gray-800">Pricing</NavLink>
    </li>
    <li className="list-none">
      <NavLink to="/rider" className="text-gray-600 hover:text-gray-800">Be a Rider</NavLink>
    </li>
  </>
  return (
    <nav className="flex items-center justify-between py-4 mb-2 rounded-4xl bg-white">
      <Logo></Logo>
      <div className="hidden md:flex items-center gap-4">
        {links}
      </div>
      <div className=" flex items-center gap-4 lg:mr-4">
        <Button className="bg-primary hover:bg-lime-600">Sign In</Button>
        <Button className="bg-gray-500 text-white hover:bg-lime-600">Be a Rider</Button>
      </div>
    </nav>
  );
};

export default Navbar;