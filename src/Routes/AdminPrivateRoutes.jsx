import { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider'; 
import axios from 'axios';
import { Triangle } from 'react-loader-spinner';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const AdminPrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext); 
    const axiosSecure = useAxiosSecure()
    const [isAdmin, setIsAdmin] = useState(false); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchAdminStatus = () => {
            if (user) {
                axiosSecure.get('/admin-email', {
                    withCredentials: true
                })
                .then(response => {
                    console.log(response.data);
                    setIsAdmin(response.data === user.email); 
                    setLoading(false); 
                })
                .catch(error => {
                    console.error('Error fetching admin status:', error);
                    setIsAdmin(false);
                    setLoading(false); 
                });
            } else {
                setIsAdmin(false);
                setLoading(false); 
            }
        };
        fetchAdminStatus();
    }, [user]);

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
        </div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (!isAdmin) {
        return <Navigate to="/"/>;
    }

    return <>{children}</>;
};

export default AdminPrivateRoutes;
