import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Triangle } from "react-loader-spinner";




// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            </div>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoutes;