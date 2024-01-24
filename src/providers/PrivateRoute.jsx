import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({ children }) => {

      const { user, loading } = useContext(AuthContext);


      if (user) {
            return children;
      }
      if (loading) {
            return <div className="w-0 mt-20 min-h-screen  mx-auto">
                  <span className="loading loading-spinner w-10"></span>
            </div>;
      }





      return <Navigate to="/login"></Navigate>;

};

export default PrivateRoute;