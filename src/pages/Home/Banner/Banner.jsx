
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerimg1 from '../../../assets/banner/banner1.png'
import bannerimg2 from '../../../assets/banner/banner2.png'
import bannerimg3 from '../../../assets/banner/banner3.png'
const Banner = () => {
    return (
        <div className="w-full ">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="w-full"
            >
                <SwiperSlide className="w-full">
                    <img src={bannerimg1} alt="bannerimg1" className="w-full h-auto object-cover" />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <img src={bannerimg2} alt="bannerimg2" className="w-full h-auto object-cover" />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <img src={bannerimg3} alt="bannerimg3" className="w-full h-auto object-cover" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;