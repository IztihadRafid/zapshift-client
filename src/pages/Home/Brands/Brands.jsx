

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import star_people from '../../../assets/brands/start_people.png'
import amazon2 from '../../../assets/brands/amazon_vector.png'
const Brands = () => {
    const brands = [amazon, casio, moonstar, randstad, star, amazon2,star_people]
    return (
        <div className='py-10 my-10'>
            <h4 className='text-3xl font-bold text-center text-green-800 mb-8 md:mb-6'>We've Helped Thousands of Sales Teams.</h4>
            <Swiper
            modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={4}
                grabCursor={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >

                {brands.map((brand, index) => <SwiperSlide key={index}><img src={brand} alt="brand" className="" /></SwiperSlide>)}

            </Swiper>
        </div>
    );
};

export default Brands;