
import logo from "../assets/logo.png";
const Logo = () => {
    return (
        <div className="flex items-center lg:ml-4">
            <img src={logo} alt="Logo" className="" />
            <h1 className="text-xl font-bold absolute ml-6 mt-4">ZapShift</h1>
        </div>
    );
};

export default Logo;