import img1 from "../assets/images/img1.png"
import img2 from "../assets/images/img2.png"
import img3 from "../assets/images/img3.png"
import img4 from "../assets/images/img4.png"
import img5 from "../assets/images/img5.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const Section = () => {
    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
            <div className='container'>
                <div className=" d-flex justify-content-center align-items-center">
                <Swiper spaceBetween={20}
                  slidesPerView={4}  loop={true} grabCursor={true} pagination={true} navigation={true} modules={[Pagination, Navigation]}>
                    <SwiperSlide>
                        <img src={img1} alt="1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="4" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img5} alt="5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt="1" />
                    </SwiperSlide>
                </Swiper>
                </div>
                </div>
        </div>
    )
}

export default Section