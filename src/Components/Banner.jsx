// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Autoplay} from 'swiper/modules';

import 'swiper/css/effect-fade';


// import required modules

const Banner = () => {
    return (
        <div className='font-sedan relative'>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                effect={'fade'}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}

                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='relative bg-[url(https://i.postimg.cc/WzL0CrH5/banner-1-1.jpg)] bg-cover bg-center bg-no-repeat h-[160px] md:h-[300px] lg:h-[400px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Explore Knowledge</h1>
                            {/* <h1 className='mt-2 md:mt-3 lg:mt-6 text-xl md:text-2xl lg:text-4xl font-bold'>
                                Library Hour <br /> <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                                <span className='text-xl md:text-2xl lg:text-5xl'>8:00 AM - 6:00 PM</span>
                            </h1> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-[url(https://i.postimg.cc/tCbhz3PT/banner-3.jpg)] bg-cover bg-center bg-no-repeat h-[160px] md:h-[300px] lg:h-[400px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Discover New Horizons</h1>
                            {/* <h1 className='mt-2 md:mt-3 lg:mt-6 text-xl md:text-2xl lg:text-4xl font-bold'>
                                Library Hour <br /> <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                                <span className='text-xl md:text-2xl lg:text-5xl'>8:00 AM - 6:00 PM</span>
                            </h1> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-[url(https://i.postimg.cc/XNdfFHrm/banner-2.jpg)] bg-cover bg-center bg-no-repeat h-[160px] md:h-[300px] lg:h-[400px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Empower Your Mind</h1>
                            {/* <h1 className='mt-2 md:mt-3 lg:mt-6 text-xl md:text-2xl lg:text-4xl font-bold'>
                                Library Hour <br /> <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                                <span className='text-xl md:text-2xl lg:text-5xl'>8:00 AM - 6:00 PM</span>
                            </h1> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-[url(https://i.postimg.cc/wMXDpMKg/banner-4.jpg)] bg-cover bg-top bg-no-repeat h-[160px] md:h-[300px] lg:h-[400px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className=' text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Unlock Your Potential</h1>
                            {/* <h1 className='mt-2 md:mt-3 lg:mt-6 text-xl md:text-2xl lg:text-4xl font-bold'>
                                Library Hour <br /> <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                                <span className='text-xl md:text-2xl lg:text-5xl'>8:00 AM - 6:00 PM</span>
                            </h1> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative bg-[url(https://i.postimg.cc/jSdPpRMY/banner-6.jpg)] bg-cover bg-center bg-no-repeat h-[160px] md:h-[300px] lg:h-[400px] w-full flex justify-center items-center'>
                        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        <div className='text-center text-white z-10'>
                            <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-5 lg:mb-10'>Expand Your Knowledge</h1>
                            {/* <button className='btn btn-xs md:btn-md lg:btn-md font-sedan'>Explore Now</button> */}
                            {/* <h1 className='mt-2 md:mt-3 lg:mt-6 text-xl md:text-2xl lg:text-4xl font-bold'>
                                Library Hour <br /> <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                                <span className='text-xl md:text-2xl lg:text-5xl'>8:00 AM - 6:00 PM</span>
                            </h1> */}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 top-[50%]'>
                <div className='text-center'>
                    <div className='text-lg md:text-2xl lg:text-4xl font-bold'>
                        <p>Library Hour</p>
                        <hr className='border-t-2 border-premium mt-1 md:mt-2 lg:mt-3 mb-1 lg:mb-2' />
                        <p>8:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

