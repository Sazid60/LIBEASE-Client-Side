import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import LibraryGides from "../Components/LibraryGides";
import Questions from "../Components/Questions";




const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            <Banner></Banner>
            
            <LibraryGides></LibraryGides>

            <div>
                <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-0 md:mt-2 lg:mt-6 font-sedan" >Book Categories</h1>
                <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3 font-sedan" >Discover our wide variety of book categories, ranging from fiction to science, ensuring something for everyone`s taste. </p>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3 font-sedan ">
                    {
                        categories.map(category => <Categories key={category._id} category={category}></Categories>)
                    }
                </div>

            </div>
            {/* <EventsCalendar></EventsCalendar> */}
            {/* <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-6 mb-3 font-semibold border border-black p-3" ><span className="font-sedan text-red-600 text-2xl">To Get All Routes Access Please Login Using</span> <br />
            Admin/Librarian-Email : <span className="text-bold font-semibold text-red-600"> shahnawazsazid60@gmail.com</span> 
            <br />
            Admin/Librarian-Password : <span className="font-semibold text-red-600">Phb9A11</span>
             </p> */}

             <Questions></Questions>
            
        </div>
    );
};

export default Home;