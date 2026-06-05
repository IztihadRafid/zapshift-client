import { Spinner } from "@/components/ui/spinner";
import useAuth from "@/hooks/useAuth";
import useRole from "@/hooks/useRole";
import { Navigate } from "react-router";

const RiderRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();
  // console.log(role);
  
  if (loading || !user || roleLoading) {
    return <Spinner></Spinner>;
  }

  if (role.role !== "rider") {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default RiderRoute;
