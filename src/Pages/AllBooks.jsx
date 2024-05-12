import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaAngleDown, FaList, FaStar } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { Link } from "react-router-dom";
import AllBooksCard from "../Components/AllBooksCard";
import AllBooksTable from "../Components/AllBooksTable";


const AllBooks = () => {
    const [loadedBooks, setLoadedBooks] = useState([])
    const [view, setView] = useState('card')

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
    const handleBookDelete = (id) => {
        axios.delete(`http://localhost:5000/delete-books/${id}`)
            .then(res => {
                console.log(res.data)
                toast.success('Book Deleted Successfully')
                getData()
            })
    }

    return (
        <div className="font-sedan">
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3 font-sedan" >All Books</h1>
            <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3 font-sedan" >Keep Trace of Your Added Books and Modify By Your Choice</p>

            <div className="flex items-center gap-4">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn btn-sm m-1 bg-[#333333] text-white rounded-none">Show Available Books<span><FaAngleDown /></span></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>All</a></li>
                        <li><a>Yes</a></li>
                    </ul>
                </div>
                <div className="flex gap-1 items-center justify-center">

                    <div className="tooltip tooltip-bottom" data-tip="List View">
                        <button className="btn rounded-none  btn-xs" onClick={()=> setView("table")}><FaList /></button>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Card View">
                        <button className="btn rounded-none btn-xs" onClick={()=> setView("card")}><IoGrid /></button>
                    </div>
                </div>
            </div>
            {
                view === "table" ?
                    <>
                        <AllBooksTable loadedBooks={loadedBooks} handleBookDelete={handleBookDelete}></AllBooksTable>
                    </> :
                    <>
                        <AllBooksCard loadedBooks={loadedBooks} handleBookDelete={handleBookDelete}></AllBooksCard>

                    </>
            }
        </div>
    );
};

export default AllBooks;