import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import sliderPic1 from '../../img/slider-pic1.png';

function MainSlider() {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className='main-slider'
      >
        <SwiperSlide>
          <img className='slider-img' src={sliderPic1} alt='' />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
export default MainSlider;
