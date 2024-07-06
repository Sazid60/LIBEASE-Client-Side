import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const AddBook = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()

    const handleAddBook = (e) => {
        e.preventDefault()
        const form = e.target

        const book_image = form.book_image.value;
        const book_name = form.book_name.value;
        const book_quantity = parseInt(form.book_quantity.value);
        const book_author = form.book_author.value;
        const book_category = form.book_category.value;
        const book_rating = parseInt(form.book_rating.value);
        const book_description = form.book_description.value;
        const staticContent = form.staticContent.value;
        const role = "librarian"

        // console.log(book_image, book_name, book_quantity, book_author, book_category, book_rating, book_description, staticContent)

        const newBook = {
            book_image,
            book_name,
            book_quantity,
            book_author,
            book_category,
            book_rating,
            book_description,
            staticContent,
            role,
            adminInfo: {
                admin_email: user?.email || '',
                admin_name: user?.displayName || ''
            }
        }

        axiosSecure.post(`/add-book?email=${user?.email}`, newBook, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                toast.success('Book Added Successfully')
                navigate('/all-books')
            })
    }
    return (
        <div>
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3 font-sedan" >Add Your Books</h1>
            <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3 font-sedan" >Bring your personal library to life for book lovers!</p>
            <div className="w-full mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form onSubmit={handleAddBook} className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 font-sedan">
                            Book Image:
                        </label>
                        <input
                            type="text"
                            name="book_image"
                            className="shadow appearance-none border border-black bg-white   rounded w-full py-2 px-3 text-gray-700 "
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 font-sedan" >
                            Book Name:
                        </label>
                        <input
                            type="text"
                            name="book_name"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 bg-white  "
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 font-sedan" >
                            Quantity:
                        </label>
                        <input
                            type="number"
                            name="book_quantity"
                            min="0"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 bg-white "
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 font-sedan" >
                            Author Name:
                        </label>
                        <input
                            type="text"
                            name="book_author"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 bg-white "
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 font-sedan" >
                            Category:
                        </label>
                        <select
                            name="book_category"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 bg-white  "
                        >
                            <option value="">Select Category</option>
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Poetry">Poetry</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 font-sedan" >
                            Rating (1-5):
                        </label>
                        <input
                            type="number"
                            name="book_rating"
                            min="1"
                            max="5"
                            step="0.1"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 bg-white "
                        />
                    </div>
                    <div className="mb-4 col-span-2">
                        <label className="block text-gray-700 font-bold mb-2 font-sedan">
                            Short Description:
                        </label>
                        <textarea
                            name="book_description"
                            rows="4"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 bg-white  "
                        ></textarea>
                    </div>
                    <div className="mb-4 col-span-2">
                        <label className="block text-gray-700 font-bold mb-2 font-sedan" >
                            Texts about the Book:
                        </label>
                        <textarea
                            name="staticContent"
                            rows="1"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 bg-white  "
                        ></textarea>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        <button
                            type="submit"
                            className="text-white bg-[#333333] hover:bg-slate-40 font-bold py-2 px-4 rounded font-sedan w-full"
                        >
                            Add Book
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddBook;