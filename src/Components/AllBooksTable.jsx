
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AllBooksTable = ({ loadedBooks,handleBookDelete }) => {
    return (

        <div className=" p-2 sm:p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full text-[7px] md:text-[10px] lg:text-sm text-center">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <thead className="bg-[#807d7d] text-white">
                        <tr className="text-center">
                            <th className="p-1 md::p-2 lg:p-3  max-w-[80px] lg:max-w-full text-left ">Book Name</th>
                            <th className="p-1 md::p-2 lg:p-3  max-w-[60px] lg:max-w-full">Category</th>
                            <th className="p-1 md::p-2 lg:p-3 text-center">Quantity</th>
                            <th className="p-1 md::p-2 lg:p-3 ">Added By</th>
                            <th className="p-1 md::p-2 lg:p-3 text-center ">Modify</th>
                        </tr>
                    </thead>
                    {
                        // eslint-disable-next-line react/prop-types
                        loadedBooks.map(book => <tbody key={book._id}>
                            <tr className="border-b border-opacity-20 ">
                                <td className="p-1 lg:p-3  max-w-[80px] lg:max-w-full text-left">
                                    <p>{book.book_name}</p>
                                </td>
                                <td className="p-1 lg:p-3  max-w-[60px] lg:max-w-full">
                                    <p>{book.book_category}</p>
                                </td>
                                <td className="p-1 lg:p-3 w-auto text-center">
                                    <p>{book.book_quantity}</p>
                                </td>
                                <td className="p-1 lg:p-3  ">
                                    <p>{book.adminInfo.admin_name}</p>
                                </td>
                                <td className="py-2 lg:p-3  max-w-[60px] lg:max-w-full">
                                    <div className="flex lg:gap-4 items-center justify-center ">

                                        <button><Link to={`/book-update/${book._id}`}><MdOutlineEdit className="text-blue-700" /></Link></button>

                                        <button onClick={() => handleBookDelete(book._id)}><MdOutlineDelete className="text-red-700" /></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>).reverse()
                    }
                </table>
            </div>
        </div>
    );
};

export default AllBooksTable;