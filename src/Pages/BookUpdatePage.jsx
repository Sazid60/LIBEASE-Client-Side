
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";


const BookUpdatePage = () => {
    const bookData = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const { _id, book_image, book_name, book_quantity, book_author, book_category, book_rating, book_description, staticContent } = bookData

    const [category, setCategory] = useState(book_category)
    const {theme} = useContext(AuthContext)


    const handleBookUpdate = e => {
        e.preventDefault()

        const form = e.target

        const book_image = form.book_image.value;
        const book_name = form.book_name.value;
        const book_quantity = parseInt(form.book_quantity.value);
        const book_author = form.book_author.value;
        const book_category = category;
        const book_rating = parseInt(form.book_rating.value);
        const book_description = form.book_description.value;
        const staticContent = form.staticContent.value

        const updatedBook = {
            book_image,
            book_name,
            book_quantity,
            book_author,
            book_category,
            book_rating,
            book_description,
            staticContent,
        }

        console.log(updatedBook)
        axiosSecure.put(`/update/${_id}`, updatedBook)
            .then(response => {
                console.log("Book updated:", response.data);
                toast.success('Book Updated Successfully')
                navigate('/all-books')
            })
            .catch(error => {
                console.error("Error updating book:", error);
            });
    }
    return (
        <div>
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3 font-sedan" >Update Your Books</h1>
            <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3 font-sedan" >This Lets You To Update The Added Books. Refine the Uploads</p>
            <div className={`max-w-3xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${theme === "light" ? "bg-white" : "bg-[#313332] text-white"}`}>

                <form onSubmit={handleBookUpdate} className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block font-bold mb-2 font-sedan">
                            Book Image:
                        </label>
                        <input
                            type="text"
                            name="book_image"
                            className="shadow appearance-none border border-black rounded w-full py-2 px-3 "
                            defaultValue={book_image}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2 font-sedan" >
                            Book Name:
                        </label>
                        <input
                            type="text"
                            name="book_name"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3"
                            defaultValue={book_name}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block   font-bold mb-2 font-sedan" >
                            Quantity:
                        </label>
                        <input
                            type="number"
                            name="book_quantity"
                            min="0"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3"
                            defaultValue={book_quantity}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block   font-bold mb-2 font-sedan" >
                            Author Name:
                        </label>
                        <input
                            type="text"
                            name="book_author"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3"
                            defaultValue={book_author}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block   font-bold mb-2 font-sedan" >
                            Category:
                        </label>
                        <select
                            name="book_category"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3"
                            defaultValue={book_category} onChange={(e) => setCategory(e.target.value)}
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
                        <label className="block   font-bold mb-2 font-sedan" >
                            Rating (1-5):
                        </label>
                        <input
                            type="number"
                            name="book_rating"
                            min="1"
                            max="5"
                            step="0.1"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3"
                            defaultValue={book_rating}
                        />
                    </div>
                    <div className="mb-4 col-span-2">
                        <label className="block   font-bold mb-2 font-sedan">
                            Short Description:
                        </label>
                        <textarea
                            name="book_description"
                            rows="4"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3"
                            defaultValue={book_description}
                        ></textarea>
                    </div>
                    <div className="mb-4 col-span-2">
                        <label className="block   font-bold mb-2 font-sedan" >
                            Texts about the Book:
                        </label>
                        <textarea
                            name="staticContent"
                            rows="1"
                            required
                            className="shadow appearance-none border border-black  rounded w-full py-2 px-3"
                            defaultValue={staticContent}
                        ></textarea>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        <button
                            type="submit"
                            className={`font-bold py-2 px-4 rounded font-sedan w-full text-white uppercase transition-colors duration-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700`}
                        >
                            Update Book
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default BookUpdatePage;