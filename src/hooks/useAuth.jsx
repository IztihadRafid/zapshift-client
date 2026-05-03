import { AuthContext } from "@/contexts/AuthContext/AuthContext";
import { use,  } from "react";

const useAuth = () => {
    const authinfo = use(AuthContext);
    return authinfo;
};

export default useAuth;