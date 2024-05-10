import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";


const AllBooks = () => {
    const [loadedBooks, setLoadedBooks] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios('http://localhost:5000/all-books')
            .then(res => {
                console.log(res.data)
                setLoadedBooks(res.data)
            })
    }
    const handleBookDelete = (id) =>{
        axios.delete(`http://localhost:5000/delete-books/${id}`)
        .then(res=>{
            console.log(res.data)
            toast.success('Book Deleted Successfully')
            getData()
        })
    }

    return (
        <div className="font-sedan">
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3 font-sedan" >All Books</h1>
            <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3 font-sedan" >Keep Trace of Your Added Books and Modify By Your Choice</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-4 ">
                {
                    loadedBooks.map(book => <div key={book._id} className="flex max-w-md flex-col justify-center items-center md:flex-row lg:flex-row overflow-hidden bg-white rounded-lg shadow-lg p-3">
                        <div className="w-1/3 flex justify-center items-center"> <img src={book.book_image} alt="" className="h-44 w-28 rounded-lg "/></div>

                        <div className="md:w-2/3 lg:w-2/3 h-fit p-4 md:p-4 text-center md:text-left lg:text-left">
                            <h1 className=" text-sm md:text-sm lg:text-lg font-bold text-gray-800">{book.book_name}</h1>
                            <h1 className="text-xs md:text-xs lg:text-sm mt-2 font-normal text-gray-800"> <span className="font-semibold">Author : </span>{book.book_author}</h1>

                            <h1 className="text-xs mt-2 font-normal text-gray-800"> <span className="font-semibold">Category : </span>{book.book_category}</h1>

                            <p className="mt-3 text-xs md:text-xs lg:text-sm font-sedan ">{book.book_description.slice(0, 80)}...</p>



                            <div className="flex mt-3 items-center justify-center md:justify-start lg:justify-start">
                                <h1 className="text-sm mt-2 font-normal text-gray-800  flex justify-center items-center gap-2"> <span className="font-semibold flex justify-center items-center gap-2">Rating : <span className="font-normal">{book.book_rating}</span></span><FaStar className="text-orange-400"></FaStar></h1>

                            </div>

                            <div className="flex gap-4  mt-3 items-center justify-center md:justify-start lg:justify-start">

                                <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Update</button>
                                <button onClick={()=>handleBookDelete(book._id)} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 bg-red-600 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AllBooks;