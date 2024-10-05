import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

 
 const axiosSecure = axios.create({
    baseURL : 'http://localhost:5000',
    withCredentials : true
 })

const useAxiosSecure = () => {
    const {  signOutUser } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        },
            error => {
                console.log('Error Tracked In The Interceptor', error.response)
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log('Logout The User')
                    signOutUser()
                        .then(() => {
                            navigate('/login')
                        })
                        .catch(error => {
                            console.error(error)
                        })
                }
            })
    }, [])
    return axiosSecure
};

export default useAxiosSecure;