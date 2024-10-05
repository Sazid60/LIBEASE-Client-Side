
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";



const BorrowedBooks = () => {

    const { user,theme } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const [loadedBooks, setLoadedBooks] = useState([])

    useEffect(() => {
        getData()
    }, [user])

    const getData = () => {
        axiosSecure.get(`/borrowed-books/${user?.email}`)
            .then(res => {
                console.log(res.data)
                setLoadedBooks(res.data)
            })
    }

    const handleReturn = (id) => {
            axiosSecure.delete(`/delete-borrowed-books/${id}`)
            .then(res=>{
                console.log(res.data)
                
                toast.success('Thank You For Returning The Book')
                getData()
            })
    }

    return (
        <div className="font-sedan">
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3 font-sedan" >Your Borrowed Books</h1>
            <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3 font-sedan" >Go Beyond The Limit By Exploring Specific Category</p>
            {
                loadedBooks.length <= 0 ?
                    <div className=" flex justify-center items-center h-60">
                        <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3 font-sedan font-extrabold" >You Have Not Borrowed Any Book Yet... 
                        </p>
                    </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-4 ">

                        {
                            loadedBooks.map(book => <div key={book._id} className={`flex max-w-md flex-col justify-center items-center md:flex-row lg:flex-row overflow-hidden bg-white rounded-lg shadow-lg p-3 hover:-translate-y-2 duration-700 ${theme === "light" ? "bg-white" : "bg-[#313332] text-white"}`}>
                                <div className="w-1/3 flex justify-center items-center"> <img src={book.book_image} alt="" className="h-44 w-28 rounded-lg shadow-2xl shadow-slate-600" /></div>

                                <div className="md:w-2/3 lg:w-2/3 h-fit p-4 md:p-4 text-center md:text-left lg:text-left">
                                    <h1 className=" text-sm md:text-sm lg:text-lg font-bold  ">{book.book_name}</h1>
                                    <h1 className="text-xs mt-2 font-normal  "> <span className="font-semibold">Category : </span>{book.book_category}</h1>

                                    <div className="flex flex-col mt-3 ">
                                        <h1 className="text-sm mt-2 font-normal  "> <span className="font-medium ">Borrowed Date : <span className="font-normal">{book.borrowed_date}</span></span></h1>
                                        <h1 className="text-xs md:text-xs lg:text-sm mt-2 font-normal  "> <span className="font-medium">Return Date : </span >{book.returnDate}</h1>
                                    </div>

                                    <div className="flex gap-4  mt-3 items-center justify-center md:justify-start lg:justify-start">

                                        <button onClick={()=>handleReturn(book.borrow_id)} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Return Book</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
            }


        </div>
    );
};

export default BorrowedBooks;