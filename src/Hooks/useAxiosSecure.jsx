import axios from "axios";

 
 const axiosSecure = axios.create({
    baseURL : 'https://lib-ease-server-b9-a11.vercel.app',
    withCredentials : true
 })

const useAxiosSecure = () => {
    
    return axiosSecure
};

export default useAxiosSecure;