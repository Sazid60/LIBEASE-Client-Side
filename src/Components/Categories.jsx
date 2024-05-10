import { Link } from "react-router-dom";



const Categories = ({ category }) => {
    console.log(category)
    const { categoryName, pictureURL } = category
    return (
        <div className="rounded-xl">
            <div className="relative shadow-xl">
                <img
                    src={pictureURL}
                    alt=""
                    className="w-full h-52 object-cover rounded shadow-sm bg-gray-500 dark:bg-gray-500 aspect-square filter brightness-50"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                    {categoryName}
                    <Link to={`/categorized-books/${categoryName}`}><button className="btn  btn-sm mt-4 bg-[#333333] text-white">View Books</button></Link>
                </span>
            </div>
        </div>

    );
};

export default Categories;