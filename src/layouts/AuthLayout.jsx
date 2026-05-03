import Logo from "@/CustomComponents/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png"
const AuthLayout = () => {
    return (
        <div className="max-w-350 mx-auto bg-gray-200 h-screen">
            <div className="w-40 mb-10">
                <Logo></Logo>
            </div>
            <div className="flex md:flex-row md:items-center justify-center flex-col w-full">
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
                <div className="flex-1">
                    <img src={authImg} alt="Auth image" className="lg:w-350" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;