import Logo from '@/CustomComponents/Logo';
import useAuth from '@/hooks/useAuth';
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
  const {user,logOut}= useAuth();
  const handleLogOut=()=>{
    logOut()
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err))
  }
  return (
    <nav className="flex items-center justify-between py-4 mb-2 rounded-[15px] bg-white">
      <Logo></Logo>
      <div className="hidden md:flex items-center gap-4">
        {links}
      </div>
      <div className=" flex items-center gap-4 lg:mr-4">
        {user?.displayName}
        {user?.email ? <button onClick={()=>{handleLogOut()}} className="px-4 py-2 rounded-[20px] hover:bg-lime-600 bg-gray-500 text-white">Sign Out</button> : <NavLink to="/login" className="bg-gray-500 text-white hover:bg-lime-600 px-4 py-2 rounded-[20px]">Login</NavLink>}
        <NavLink to="/register" className="bg-primary text-white hover:bg-lime-600 px-4 py-2 rounded-[20px]">Be a Rider</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;