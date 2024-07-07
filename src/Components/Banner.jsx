// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Autoplay } from 'swiper/modules';

import 'swiper/css/effect-fade';


// import required modules

const Banner = () => {
    return (
        <div className='relative bg-[url(/library-5.jpg)] bg-cover bg-center bg-no-repeat h-[160px] md:h-[300px] lg:h-[400px] w-full flex justify-center items-center rounded-xl'>
            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 rounded-xl'></div>
            <div className='text-center text-white z-10'>
                <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Explore Knowledge</h1>
                <h1 className='mt-2 md:mt-3 lg:mt-6 text-xl md:text-2xl lg:text-4xl font-bold font-sedan'>
                    Library Hour <br /> <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                    <span className='text-xl md:text-2xl lg:text-5xl'>8:00 AM - 6:00 PM</span>
                </h1>
            </div>
        </div>
    );
};

export default Banner;

