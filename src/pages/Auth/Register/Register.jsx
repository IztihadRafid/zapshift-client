import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useAuth();

    const handleRegistration = (data) => {
        console.log(data)
        registerUser(data.firstName, data.lastName,data.email, data.password).then(res => {
            console.log(res.user)
        }).catch(err => console.log(err))
    };

    return (
        <div className="flex items-center justify-center px-4">
            <style>
                {`
                    @keyframes register-float-in {
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

                    @keyframes register-float {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }

                    @keyframes register-water {
                        0% {
                            background-position: 0 0;
                        }
                        100% {
                            background-position: 80px 0;
                        }
                    }
                `}
            </style>

            <div className="relative w-full max-w-md overflow-hidden rounded-[15px] bg-primary/20 p-3 shadow-[0_22px_45px_rgba(132,204,22,0.22)] animate-[register-float-in_700ms_ease-out_both,register-float_4s_ease-in-out_800ms_infinite]">
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(135deg,rgba(132,204,22,0.36)_25%,transparent_25%),linear-gradient(225deg,rgba(101,163,13,0.36)_25%,transparent_25%)] bg-[length:40px_40px] opacity-80 animate-[register-water_5s_linear_infinite]" />

                <div className="relative bg-white/95 rounded-[12px] p-6 sm:p-7 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                    <p className="mb-5 text-center text-2xl font-bold text-gray-900">Welcome To ZapShift</p>
                    <h2 className="mb-5 text-center text-xl font-bold text-gray-900">Please Register</h2>

                    <form onSubmit={handleSubmit(handleRegistration)} className="space-y-3">
                        {/* First Name */}
                        <div>
                            <label className="block mb-1 font-medium">First Name</label>
                            <input
                                {...register("firstName", { required: true })}
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full px-4 py-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-lime-500"
                            />
                            {errors.firstName?.type === 'required' && <p className="text-red-500 text-sm font-bold my-1">First Name is required</p>}
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block mb-1 font-medium">Last Name</label>
                            <input
                                {...register("lastName", { required: true })}
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full px-4 py-2 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-lime-500"
                            />
                            {errors.lastName?.type === 'required' && <p className="text-red-500 text-sm font-bold my-1">Last Name is required</p>}
                        </div>

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
                                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-[20px]"
                            />
                            {errors.password?.type === 'required' && <p className="text-red-500 text-sm font-bold my-1">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-500 text-sm font-bold my-1">Atleast 4 characters</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 font-semibold hover:bg-lime-600 transition duration-200 rounded-[20px]"
                        >
                            Register
                        </button>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className="text-base text-center mt-4 text-gray-500 flex flex-wrap justify-center gap-1">
                        <span> Already have an account?{" "}</span>
                        <NavLink to="/login" className="text-primary cursor-pointer hover:text-lime-600">
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
