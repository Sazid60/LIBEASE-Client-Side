import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";

const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            <Banner></Banner>

            <div>
                <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3 font-sedan" >Categories</h1>
                <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3 font-sedan" >Find Your Desired Book by Specific Category </p>
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mx-auto lg:grid-cols-2 font-sedan lg:px-28">
                    {
                        categories.map(category => <Categories key={category._id} category={category}></Categories>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;