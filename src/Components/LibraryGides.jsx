

const LibraryGides = () => {
    return (

        <div className="mt-6 mb-6 font-sedan container mx-auto">
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3 font-sedan" >Library Facilities</h1>
            <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-4 font-sedan" >Explore our state-of-the-art facilities equipped with modern amenities for an enhanced learning experience. </p>
            <div className="flex flex-col md:flex-col lg:flex-row  justify-center md:justify-center lg:justify-between items-center md:px-10 lg:px-28">
                <div className="lg:w-[50%]">
                    <img src="https://i.postimg.cc/rwfKXMb6/model-com.jpg" className="rounded-xl " alt="" />
    
                </div>
                <div className="md:w-full lg:w-[60%]">
                    <div className="flex flex-col justify-start p-2 md:p-2 lg:p-6 divide-y lg:col-span-6 dark:divide-gray-300">
                        <div className="space-y-2 mb-2 lg:mb-3 ">

                            <h1 className="text-xs md:text-lg lg:text-xl font-bold">Borrow, Reserve, Renew</h1>
                            <p className="text-xs md:text-sm lg:text-sm ">Get advanced research assistance in dozens of subject areas.</p>

                        </div>
                        <div className="space-y-2 mb-2 lg:mb-3">

                            <h1 className="text-xs md:text-lg lg:text-xl font-bold">Study Spaces & PCs</h1>
                            <p className="text-xs md:text-sm lg:text-sm">Deposit data, papers, and other resources for long-term access.</p>
                        </div>
                        <div className=" space-y-2 mb-2 lg:mb-3">
                            <h1 className="text-xs md:text-lg lg:text-xl font-bold">Library Guides</h1>
                            <p className="text-xs md:text-sm lg:text-sm">Find books, media, databases, e-journals and digital resources.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LibraryGides;