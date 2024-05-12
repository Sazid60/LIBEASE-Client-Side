
const EventsCalendar = () => {
    const events = [
        {
            "id": 1,
            "title": "Literary Discussion Group",
            "date": "2024-06-01",
            "time": "14:30",
            "location": "Library Auditorium",
            "description": "Discussing 'Pride and Prejudice'",
        },
        {
            "id": 2,
            "title": "Author Meetup: Maria Johnson",
            "date": "2024-06-10",
            "time": "17:30",
            "location": "Library Auditorium",
            "description": "Meet Your Loved author!",
        },
    ]


    return (

        <div className="font-sedan mb-3">
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3 font-sedan" >Library Events</h1>
            <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3 font-sedan" >Explore new worlds and connect with fellow book lovers. </p>
            <section className="grid grid-cols-1 gap-4  lg:grid-cols-2 justify-center items-center md:px-24 lg:px-20 xl-px-28">
                {

                    events.map(event => <div key={event.id} className="p-4 border rounded-lg shadow-2xl ">
                        <div className="flex  justify-between ">
                            <div className="lg:p-4 w-[70%] flex flex-col justify-center">
                                <h3 className="text-xs lg:text-md xl:text-lg font-semibold mb-2">{event.title}</h3>
                                <p className="">
                                    <span className="font-semibold text-xs lg:text-sm">Date: <span className="text-xs lg:text-sm font-normal">{event.date}</span></span>
                                    <br />
                                    <span className=" font-semibold text-xs lg:text-sm">Time: <span className="text-xs lg:text-sm font-normal">{event.time}</span></span>
                                    <br />
                                    <span className=" font-semibold text-xs lg:text-sm">Location : </span><span className="text-xs lg:text-sm font-normal"> {event.location}</span>
                                </p>
                                <p className=" mt-2 text-xs font-lob">{event.description}</p>
                            </div>
                            <div className="flex w-[40%] justify-end">
                            <img src="https://i.postimg.cc/P5MZpWZs/pngwing-com.png" alt="" className="h-36 md:h-40 lg:h-44"/>
                            </div>
                        </div>
                    </div>)
                }
            </section>
        </div>

    );
};

export default EventsCalendar;
