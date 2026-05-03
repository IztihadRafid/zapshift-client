import useAuth from "@/hooks/useAuth";
import { Spinner } from "@/components/ui/spinner"
import { Navigate } from "react-router";
const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth();
    if(loading){
        return <div className="flex items-center justify-center"><Spinner /></div>
    }
    if(!user){
        return Navigate('/login')
    }
    return children
};

export default PrivateRoute;