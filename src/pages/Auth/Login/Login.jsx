import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

    const { register, handleSubmit,getValues, formState: { errors } } = useForm();
    const { loginUser, forgetPassword } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (data) => {
        console.log(data)
        loginUser(data.email, data.password)
            .then(res => {
                console.log(res.user)
                navigate(location?.state || "/")
            })
            .catch(err => console.log(err))    
    };
const handleForgetPassword=()=>{
    const email = getValues('email');
    if(!email){
        alert('Please enter your email')
        return;
    }
    forgetPassword(email)
    .then(()=>{
        alert('Password reset link sent to your email')
    })
    .catch(err=>console.log(err))
}



    return (
        <div className="flex items-center justify-center px-4">
            <style>
                {`
                    @keyframes login-float-in {
                        0% {
                            opacity: 0;
                            transform: translateY(34px) scale(0.97);
                        }
                        60% {
                            opacity: 1;
                            transform: translateY(-8px) scale(1.01);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }

                    @keyframes login-float {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }

                    @keyframes login-water {
                        0% {
                            background-position: 0 0;
                        }
                        100% {
                            background-position: 80px 0;
                        }
                    }
                `}
            </style>

            <div className="relative w-full max-w-md overflow-hidden rounded-[15px] bg-primary/20 p-3 shadow-[0_22px_45px_rgba(132,204,22,0.22)] animate-[login-float-in_700ms_ease-out_both,login-float_4s_ease-in-out_800ms_infinite]">
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(135deg,rgba(132,204,22,0.36)_25%,transparent_25%),linear-gradient(225deg,rgba(101,163,13,0.36)_25%,transparent_25%)] bg-[length:40px_40px] opacity-80 animate-[login-water_5s_linear_infinite]" />

                <div className="relative bg-white/95 rounded-[12px] p-6 sm:p-7 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                    <p className="mb-5 text-center text-2xl font-bold text-gray-900">Welcome To Back</p>
                    <h2 className="mb-5 text-center text-xl font-bold text-gray-900">Please Login</h2>

                    <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">

                        {/* Email */}
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-lime-500"
                            />
                            {errors.email?.type === 'required' && <p className="text-red-500 text-sm font-bold my-1">Email is required</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block mb-1 font-medium">Password</label>
                            <input
                                {...register("password", { required: true, minLength: 4 })}
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-lime-500"
                            />
                            {errors.password?.type === 'required' && <p className="text-red-500 text-sm font-bold my-1">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-500 text-sm font-bold my-1">Atleast 4 characters</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 rounded-[20px] font-semibold hover:bg-lime-600 transition duration-200"
                        >
                            Login
                        </button>
                    </form>

                    <SocialLogin></SocialLogin>
                    <button onClick={handleForgetPassword} className="text-center text-lime-600 hover:text-lime-700 p-2">Forget Password</button>
                    <p className="text-base text-center mt-4 text-gray-500 flex flex-wrap justify-center gap-1">
                        <span> Don't have account?{" "}</span>
                        <NavLink state={location?.state} to="/register" className="text-primary cursor-pointer hover:text-lime-700">
                            Register
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
