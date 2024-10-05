import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const Categories = ({ category }) => {
    console.log(category)
    // eslint-disable-next-line react/prop-types
    const { categoryName, pictureURL,description } = category
    return (
        <div className="rounded-2xl hover:-translate-y-2 duration-700">
            <div className="relative shadow-xl rounded-2xl">
                <img
                    src={pictureURL}
                    alt=""
                    className="w-full h-32 md:h-36 lg:h-52 object-cover rounded-2xl shadow-sm bg-gray-500 dark:bg-gray-500 aspect-square filter brightness-50"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                    {categoryName}
                    <span className="font-normal text-xs md:text-sm lg:text-lg mt-2">{description}</span>
                    <Link to={`/categorized-books/${categoryName}`}><button className="btn btn-sm mt-4 text-white border border-white bg-transparent hover:bg-transparent">View Books</button></Link>
                </span>
            </div>
        </div>

    );
};

export default Categories;