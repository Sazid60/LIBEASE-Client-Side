import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="">
            <div className=''>
                <Navbar></Navbar>
                <div className='px-5 min-h-[calc(100vh-321px)]'>
                    <Outlet></Outlet>
                </div> 
            </div>
            <Footer></Footer>
            <Toaster
                position="top-center"
                reverseOrder={false} />
        </div>
    );
};

export default MainLayout;