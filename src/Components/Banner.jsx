// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Autoplay,EffectFade } from 'swiper/modules';

import 'swiper/css/effect-fade';


// import required modules

const Banner = () => {
    return (
        <div className='font-sedan'>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                effect={'fade'}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay,EffectFade]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='relative bg-[url(https://i.postimg.cc/xTbCF8pw/library-1.jpg)] bg-cover bg-center bg-no-repeat h-[140px] md:h-[300px] lg:h-[400px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Explore Knowledge</h1>
                            <button className='btn btn-xs md:btn-md lg:btn-md font-sedan'>Explore Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-[url(https://i.postimg.cc/0yYNP3sZ/library-3.jpg)] bg-cover bg-center bg-no-repeat h-[140px] md:h-[300px] lg:h-[400px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Discover New Horizons</h1>
                            <button className='btn btn-xs md:btn-md  lg:btn-md font-sedan'>Explore Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-[url(https://i.postimg.cc/vmGZBz8y/library-4.jpg)] bg-cover bg-center bg-no-repeat h-[140px] md:h-[300px] lg:h-[400px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Empower Your Mind</h1>
                            <button className='btn btn-xs md:btn-md lg:btn-md font-sedan'>Explore Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-[url(https://i.postimg.cc/pdkXnFyF/library-5.jpg)] bg-cover bg-center bg-no-repeat h-[140px] md:h-[300px] lg:h-[400px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Unlock Your Potential</h1>
                            <button className='btn btn-xs md:btn-md lg:btn-md font-sedan'>Explore Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-[url(https://i.postimg.cc/KYY4fN6N/library-2.jpg)] bg-cover bg-center bg-no-repeat h-[140px] md:h-[300px] lg:h-[400px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Expand Your Knowledge</h1>
                            <button className='btn btn-xs md:btn-md lg:btn-md font-sedan'>Explore Now</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;

