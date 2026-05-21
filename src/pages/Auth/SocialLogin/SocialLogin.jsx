import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        // console.log(res.user);
        const [firstName, ...rest] = (res.user.displayName || "").split(" "); // ✅ fix res.user
        const lastName = rest.join(" ");
        const userInfo = {
          email: res.user.email,
          firstName,
          lastName,
          photoURL: res.user.photoURL,
        };
        axiosSecure.post("/users", userInfo).then((res) => {
          console.log("user data: ", res);
          Swal.fire({
            title: "Login Successfully",
            icon: "success",
            confirmButtonColor: "#56bd1f",
          });
          navigate(location?.state || "/");
        });
      })
      .catch((err) => console.log(err));
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
