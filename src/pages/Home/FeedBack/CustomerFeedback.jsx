import { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import customerImg from '../../../assets/customer-top.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import image from '../../../assets/reviewQuote.png';

const CustomerFeedback = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);

    return (
        <div className="py-12 lg:my-12 md:my-6 my-4">
            <div className="flex flex-col items-center justify-between">
                <div>
                    <img src={customerImg} alt="img" />
                </div>
                <div className="text-center my-10">
                    <h1 className="text-3xl font-bold text-center text-green-800 mb-4 ">What Our Customers are saying</h1>
                    <p className='text-lg text-gray-600'>Enhance your business with our exceptional customer feedback. We value your feedback and strive to provide exceptional customer service.</p>
                </div>
            </div>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                spaceBetween={30}

                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}

                coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }}

                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}

                speed={800}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {reviews?.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white p-6 rounded-xl text-center h-full">

                            {/* Quote Image */}
                            <img
                                src={image}
                                alt="quote"
                                className="mx-auto mb-4 w-8"
                            />

                            {/* Review Text */}
                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                {review?.review}
                            </p>

                            <hr className="my-4" />

                            {/* User Info */}
                            <div className="flex flex-col items-center gap-2">
                                <img
                                    src={review?.user_photoURL}
                                    alt="user"
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                                />
                                <h4 className="font-semibold text-sm md:text-base">
                                    {review?.userName}
                                </h4>
                                <p className="text-xs md:text-sm text-gray-500">
                                    {review?.user_email}
                                </p>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CustomerFeedback;