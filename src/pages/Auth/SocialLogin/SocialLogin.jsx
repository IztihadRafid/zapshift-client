
import useAuth from "@/hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const location = useLocation()
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                navigate(location?.state || "/")
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="mt-4">
            <div className="flex items-center gap-3 text-gray-400">
                <span className="h-px flex-1 bg-gray-300" />
                <span className="text-sm font-medium">OR</span>
                <span className="h-px flex-1 bg-gray-300" />
            </div>

            <button
                type="button"
                onClick={handleGoogleLogin}
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-[20px] border border-gray-200 bg-white px-4 py-2 font-semibold text-gray-700 transition duration-200 hover:border-primary hover:bg-primary/5"
            >
                <FcGoogle className="text-2xl" />
                <span>Login with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;
