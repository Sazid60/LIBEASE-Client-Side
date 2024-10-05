import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const { logInUser, googleLogin, theme} = useContext(AuthContext)
    const location = useLocation()

    const navigate = useNavigate()

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setSuccess("")
        setErrorMessage("")

        logInUser(email, password)
            .then(() => {
                toast.success('Login Successful');
                setSuccess("Successfully Logged In")
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                setErrorMessage(error.message)
                toast.error(error.message)
            })
    }

    // Social 
    const handleSocialLogin = (socialLoginProvider) => {

        socialLoginProvider()
            .then(() => {
                toast.success('Login Successful')
                setSuccess("Successfully Logged In")
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                setErrorMessage(error.message)
                toast.error(error.message)
                console.log(error)
            })
    }

    return (
        <div className={`flex w-full justify-center min-h-[40vh] lg:mb-4`}>

            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="font-bold text-xl md:text-2xl lg:text-3xl " >Login now!</h1>
                </div>

                <div className={`card w-full lg:w-[40%] shadow-2xl ${theme === "light" ? "bg-white" : "bg-[#313332] text-white"}`}>

                    <form className="card-body w-full pb-2" onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-sm   ">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered  border-gray-300" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-sm">Password</span>
                            </label>
                            <div className="relative w-full">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered border-gray-300  w-full " required />
                                <div onClick={handleShowPassword} className="absolute top-[39%] left-[85%] md:left-[88%] lg:left-[89%]" >
                                    {
                                        showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </div>
                            </div>
                            {
                                errorMessage && <p className='text-red-500 text-xs mt-4'>Error :{errorMessage} </p>
                            }
                            {
                                success && <p className='text-blue-700 text-xs mt-4'>{success}</p>
                            }
                        </div>
                        <div className="form-control mt-2" >
                            <button className="btn text-white uppercase transition-colors duration-300 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Login</button>
                        </div>
                        <div className="mt-2 text-center">
                            <p className="text-sm   ">Do Not Have Account ? <Link className="text-blue-600 font-semibold" to={"/register"} state={location.state}>Register</Link> </p>
                        </div>
                    </form>
                    <div className="divider  ">Continue With</div>
                    <div className="flex justify-center items-center mb-6 pb-0">
                        <div onClick={() => handleSocialLogin(googleLogin)} className='flex cursor-pointer items-center justify-center transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
                            <div className='px-4 py-2'>
                                <svg className='w-6 h-6' viewBox='0 0 40 40'>
                                    <path
                                        d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                        fill='#FFC107'
                                    />
                                    <path
                                        d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                                        fill='#FF3D00'
                                    />
                                    <path
                                        d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                                        fill='#4CAF50'
                                    />
                                    <path
                                        d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                        fill='#1976D2'
                                    />
                                </svg>
                            </div>

                            <span className='w-5/6 px-4 py-3 font-bold text-center'>
                                Sign in with Google
                            </span>
                        </div>
                    </div>
                </div>

                <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-6 mb-3 font-semibold border border-black p-3" ><span className="font-sedan text-red-600 text-2xl">To Get All Access Please Login Using</span> <br />
                    Admin/Librarian-Email : <span className="text-bold font-semibold text-red-600"> shahnawazsazid60@gmail.com</span>
                    <br />
                    Admin/librarian-Password : <span className="font-semibold text-red-600">Phb9A11</span>
                </p>
            </div>
        </div >
    );
};

export default Login;