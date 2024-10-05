import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {

    return (
        <div>
            <div className="h-16 md:h-20">
                <Navbar />
            </div>
            <div className="px-5 min-h-[calc(100vh-321px)]">
                <Outlet />
            </div>
            <Footer />
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default MainLayout;
