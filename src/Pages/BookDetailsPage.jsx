import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const BookDetailsPage = () => {
    const loadedBook = useLoaderData()
    const { _id, book_image, book_name, book_quantity, book_author, book_category, book_rating, book_description, staticContent } = loadedBook

    return (
        <div className="container mt-4 mx-auto font-sedan rounded-lg shadow-xl border-2">
            <div className="flex flex-col-reverse md:lex-col-reverse lg:flex-row justify-center items-center gap-6  p-3 md:p-4 lg:p-8">
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
                                        <td className="border border-solid border-gray-300 px-4 py-2">{staticContent}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex justify-center md:justify-center lg:justify-start mt-4">
                                <button className="btn btn-md text-white bg-[#333333] hover:bg-slate-40 ">Borrow Book</button>
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