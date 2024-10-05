import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const BookDetailsPage = () => {
    const loadedBook = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    
    const { _id, book_image, book_name, book_quantity, book_author, book_category, book_rating, book_description, staticContent, adminInfo } = loadedBook

    console.log(adminInfo)

    const { user,theme } = useContext(AuthContext)

    const handleBorrow = e => {
        e.preventDefault()
        // if (user?.email === adminInfo?.admin_email)
        //     return toast.error('You Can Not Borrow Your Own Book!')
        const form = e.target;
        const returnDate = form.returnDate.value;
        const borrower_email = user.email;
        const borrower_name = user.displayName
        const borrowed_date = new Date().toISOString().split('T')[0];

        const borrowedBook = {
            borrow_id: _id,
            borrowed_date,
            returnDate,
            borrower_name,
            borrower_email,
            book_image,
            book_name,
            book_quantity,
            book_author,
            book_category,
            book_rating,
            book_description,
            staticContent
        }
        // console.log(borrowData)
        axiosSecure.post('/add-borrowed-book', borrowedBook)
            .then(res => {
                console.log(res.data)
                toast.success('Book Borrowed Successfully')
                navigate(`/categorized-books/${book_category}`)
            })
            .catch(() => {
                toast.error('Already Borrowed This Book')
            })
    }

    return (
        <div className="container mt-4 mx-auto font-sedan rounded-md shadow-xl border">
            <div className={`flex flex-col-reverse md:lex-col-reverse lg:flex-row justify-center items-center gap-6  p-3 md:p-4 lg:p-8 ${theme === "light" ? "bg-white" : "bg-[#313332] text-white"}`}>
                <div className="w-full  md:pr-4">
                    <div className="w-auto">
                        <div>
                            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">{book_name}</h1>
                        </div>

                        <p className="text-sm md:text-base lg:text-lg mt-4 mb-4">{book_description}</p>

                        <div className="overflow-x-auto">
                            <table className="w-full  text-sm md:text-base lg:text-lg border border-solid border-gray-300 rounded-lg">
                                <tbody>
                                    <tr>
                                        <td className="font-bold text-left border border-solid border-gray-300 px-4 py-2">Category</td>
                                        <td className="border border-solid border-gray-300 px-4 py-2">{book_category}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold text-left border border-solid border-gray-300 px-4 py-2">Author</td>
                                        <td className="border border-solid border-gray-300 px-4 py-2">{book_author}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold text-left border border-solid border-gray-300 px-4 py-2">Rating</td>
                                        <td className=" border-gray-300 px-4 py-2 flex items-center">
                                            {book_rating} <FaStar className="text-amber-400 ml-1" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold text-left border border-solid border-gray-300 px-4 py-2">Quantity</td>
                                        <td className="border border-solid border-gray-300 px-4 py-2">{book_quantity}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-bold text-left border border-solid border-gray-300 px-4 py-2">Context</td>
                                        <td className="border border-solid border-gray-300 px-4 py-2 text-sm font-lob">{staticContent}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex justify-center md:justify-center lg:justify-start mt-4">
                                <button className="btn btn-md font-sedan text-white uppercase transition-colors duration-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 " onClick={() => document.getElementById('borrowModal').showModal()} disabled={book_quantity === 0}>Borrow Book</button>

                                <dialog id="borrowModal" className="modal modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Borrow Book</h3>
                                        <p className="py-4">Please select a return date:</p>
                                        <form id="borrowForm" method="dialog" onSubmit={handleBorrow}>
                                            <div className="flex flex-col mb-4">
                                                <label htmlFor="returnDate" className="font-bold text-gray-700">Return Date:</label>
                                                <input type="date" id="returnDate" name="returnDate" className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500" required />
                                            </div>
                                            <button type="submit"className="btn text-white uppercase transition-colors duration-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Submit</button>
                                        </form>
                                        <p className="text-end">Press `Esc` To Close The Modal</p>
                                    </div>
                                    <Toaster
                                        position="top-center"
                                        reverseOrder={false} />
                                </dialog>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center items-center mt-6 lg:mt-0 w-full md:w-2/5">
                    <img className="h-96 w-72 shadow-lg" src={book_image} alt="" />
                </div>
            </div>

        </div>
    );
};

export default BookDetailsPage;