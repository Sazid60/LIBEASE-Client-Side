import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { BsMoon, BsSun } from "react-icons/bs";


const Navbar = () => {
    const { signOutUser, user ,theme, setTheme} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()


    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const fetchAdminEmail = () => {
            axiosSecure.get('/admin-email', {
                withCredentials: true
            })
                .then(response => {
                    const adminEmail = response.data;
                    if (adminEmail === user.email) {
                        setIsAdmin(true);
                    }
                })
                .catch(error => {
                    console.error('Error fetching admin email:', error);
                });
        };
        if (user) {
            fetchAdminEmail();
        }
    }, [user, axiosSecure]);

    const handleSignOut = () => {

        signOutUser()
            .then(() => {
                console.log("Logged Out")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const theme = isDarkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        setTheme(theme)
    }, [theme,isDarkMode, setTheme]);

    const navLinks = <>
        <li className="mr-2">
            <NavLink
                className={({ isActive }) => isActive ? 'font-extrabold text-stone-500' : 'bg-transparent hover:underline hover:font-extrabold font-normal'} to={"/"}>
                Home
            </NavLink></li>
        {user && isAdmin && (
            <>
                <li className="mr-2">
                    <NavLink className={({ isActive }) => isActive ? 'font-extrabold text-stone-500' : 'bg-transparent hover:underline hover:font-extrabold font-normal'} to={"/add-book"}>
                        Add Book
                    </NavLink>
                </li>

                <li className="mr-2">
                    <NavLink className={({ isActive }) => isActive ? 'font-extrabold text-stone-500' : 'bg-transparent hover:underline hover:font-extrabold font-normal'} to={"/all-books"}>
                        All Books
                    </NavLink>
                </li>
            </>
        )}

        <li>
            <NavLink className={({ isActive }) => isActive ? 'font-extrabold text-stone-500' : 'bg-transparent hover:underline hover:font-extrabold font-normal'} to={"/borrowed-books"}>
                Borrowed Books
            </NavLink>
        </li>
    </>
    return (

        <div className={`navbar font-sedan lg:px-6 fixed z-30 ${isDarkMode ? 'bg-base-300' : 'bg-gray-200'}`}>
                <div className="navbar-start">
                    <div className="dropdown z-30">
                        <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <Link to={"/"} className="font-bold text-2xl md:text-3xl lg:text-4xl ">LIBEASE</Link>
                        <img src="/Main-Logo.png" className="h-4 w-7 md:h-6 md:w-10 lg:h-8 lg:w-16 hidden md:block" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden xl:flex">
                        <ul className="flex justify-center items-center px-2 gap-3 uppercase">
                            {navLinks}
                        </ul>
                    </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center gap-2 md:gap-2 lg:gap-4">
                                <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left">
                                    <img className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 border-2 border-yellow-600 rounded-full " src={user.photoURL || "/Capture.PNG"} alt="" />
                                </div>
                                <Tooltip id="my-tooltip" />
                                <button onClick={handleSignOut} className="btn btn-xs md:btn-sm lg:btn-sm bg-[#333333] hover:bg-slate-500 text-white font-normal">Logout</button>
                            </div>
                            : <div className="flex items-center gap-2 md:gap-2 lg:gap-4">
                                <div data-tooltip-id="my-tooltip" data-tooltip-content="No Image" data-tooltip-place="left">
                                    <img className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 border-2 border-yellow-600 rounded-full " src="/Capture.PNG" alt="" />
                                </div><Tooltip id="my-tooltip" />
                                <div className="flex">
                                    <NavLink
                                        className="btn btn-xs md:btn-sm lg:btn-sm text-white bg-[#333333] hover:bg-slate-400" to={"/login"}>
                                        Login
                                    </NavLink>
                                </div>
                            </div>

                    }
                    <div className=" ml-2 rounded-lg ">
                        <div className="relative">
                            <input
                                type="checkbox"
                                id="check"
                                className="toggle hidden"
                                onChange={toggleTheme}
                                checked={isDarkMode}
                            />

                            <label
                                htmlFor="check"
                                className="flex items-center text-2xl cursor-pointer"
                            >
                                <div className="relative w-12 h-6 rounded-full mr-3 transition-all duration-300 hidden md:flex">

                                    <div
                                        className={`absolute inset-0 rounded-full transition-all duration-300 ${isDarkMode ? "bg-blue-500" : "bg-stone-800"}`}
                                    ></div>

                                    <div
                                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-gray-100 rounded-full transition-transform duration-300 ${isDarkMode ? "transform translate-x-6 bg-blue-700" : "bg-yellow-600"
                                            }`}
                                    ></div>
                                </div>

                                {isDarkMode ? (
                                    <BsMoon className="text-blue-500" />
                                ) : (
                                    <BsSun className="text-yellow-400" />
                                )}
                            </label>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Navbar;