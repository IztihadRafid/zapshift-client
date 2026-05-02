
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
const Logo = () => {
    return (
        <NavLink to="/" className="flex items-center lg:ml-4 ">
            <img src={logo} alt="Logo" className="" />
            <h1 className="text-xl font-bold absolute ml-6 mt-4">ZapShift</h1>
        </NavLink>
    );
};

export default Logo;