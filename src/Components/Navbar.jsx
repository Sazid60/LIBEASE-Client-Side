import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { signOutUser, user } = useContext(AuthContext)

    const [isDarkMode, setIsDarkMode] = useState(false);


    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const theme = isDarkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
    }, [isDarkMode]);

    const handleSignOut = () => {

        signOutUser()
            .then(() => {
                console.log("Logged Out")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const navLinks = <>
        <li className="mr-2">
            <NavLink
                className={({ isActive }) => isActive ? 'btn btn-sm bg-[#e6e1e1]' : 'bg-transparent border-0 btn btn-sm font-normal'} to={"/"}>
                Home
            </NavLink></li>

        <li className="mr-2">
            <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-[#e6e1e1]' : 'bg-transparent border-0 btn btn-sm font-normal'} to={"/add-book"}>
                Add Book
            </NavLink>
        </li>

        <li className="mr-2">
            <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-[#e6e1e1]' : 'bg-transparent border-0 btn btn-sm font-normal'} to={"/all-books"}>
                All Books
            </NavLink>
        </li>

        <li>
            <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-[#e6e1e1]' : 'bg-transparent border-0 btn btn-sm font-normal'} to={"/borrowed-books"}>
                Borrowed Books
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-30">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <Link to={"/"} className="font-bold text-2xl md:text-3xl lg:text-4xl ">LIBEASE</Link>
                    <img src="/Main-Logo.png" className="h-4 w-7 md:h-6 md:w-10 lg:h-8 lg:w-16" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-2 md:gap-2 lg:gap-4">
                            <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left">
                                <img className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 border rounded-full " src={user.photoURL || "/Capture.PNG"} alt="" />
                            </div>
                            <Tooltip id="my-tooltip" />
                            <button onClick={handleSignOut} className="btn btn-xs md:btn-sm lg:btn-sm bg-[#333333] hover:bg-slate-500 text-white font-normal">Logout</button>
                        </div>
                        : <div className="flex items-center gap-2 md:gap-2 lg:gap-4">
                            <div data-tooltip-id="my-tooltip" data-tooltip-content="No Image" data-tooltip-place="left">
                                <img className="rounded-full h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 border" src="/Capture.PNG" alt="" />
                            </div><Tooltip id="my-tooltip" />
                            <div className="flex">
                                <NavLink
                                    className="btn btn-xs md:btn-sm lg:btn-sm text-white bg-[#333333] hover:bg-slate-400" to={"/login"}>
                                    Login
                                </NavLink>
                            </div>
                        </div>

                }
                <div className="hidden lg:block ml-3">
                    <div className="flex justify-center items-center ">
                        <label className="swap swap-rotate ">


                            <input type="checkbox" className="theme-controller" value="synthwave" onChange={toggleTheme} />


                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;