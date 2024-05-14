import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const CategorizedBooks = () => {
    const loadedBooks = useLoaderData()
    return (
        <div className="font-sedan">
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3 font-sedan" >Categorized Books</h1>
            <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3 font-sedan" >Go Beyond The Limit By Exploring Specific Category</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-4 ">
                {
                    loadedBooks.map(book => <div key={book._id} className="flex max-w-md flex-col justify-center items-center md:flex-row lg:flex-row overflow-hidden bg-white rounded-lg shadow-lg p-3">
                        <div className="w-1/3 flex justify-center items-center"> <img src={book.book_image} alt="" className="h-44 w-28 rounded-lg shadow-2xl shadow-slate-600" /></div>

                        <div className="md:w-2/3 lg:w-2/3 h-fit p-4 md:p-4 text-center md:text-left lg:text-left">
                            <h1 className=" text-sm md:text-sm lg:text-lg font-bold text-gray-800">{book.book_name}</h1>
                            <h1 className="text-xs md:text-xs lg:text-sm mt-2 font-normal text-gray-800"> <span className="font-semibold">Author : </span>{book.book_author}</h1>

                            <h1 className="text-xs mt-2 font-normal text-gray-800"> <span className="font-semibold">Category : </span>{book.book_category}</h1>

                            <p className="mt-3 text-xs md:text-xs lg:text-sm font-sedan ">{book.book_description.slice(0, 80)}...</p>

                            <p className="mt-3 text-xs md:text-xs lg:text-xm  font-lob ">{book.staticContent}</p>



                            <div className="flex mt-3 items-center flex-col md:flex-col lg:flex-col xl:flex-row justify-between">
                                <h1 className="text-sm mt-2 font-normal text-gray-800  flex justify-center items-center gap-2"> <span className="font-light flex justify-center items-center gap-2">Rating : <span className="font-normal">{book.book_rating}</span></span><FaStar className="text-orange-400"></FaStar></h1>
                                <h1 className="text-xs md:text-xs lg:text-sm mt-2 font-normal text-gray-800"> <span className="font-medium">Quantity : </span >{book.book_quantity}</h1>
                            </div>

                            <div className="flex gap-4  mt-3 items-center justify-center xl:justify-end">

                                <Link to={`/book-details/${book._id}`}><button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default CategorizedBooks;