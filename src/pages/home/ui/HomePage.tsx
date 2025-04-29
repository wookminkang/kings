import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Weather } from './weather';
export const HomePage = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="home-page">
      <div className="home-page-slider">
        <div className="home-page-slider-contents">
          <h2>KING'S ROCK CC</h2>
          <p>아시아 100대 골프장</p>
          <p>친환경 BEST20 골프장</p>

          <p> 킹즈락에 불어오는 기분좋은 바람,</p>
          <p>자연과 힐링으로 가득찬 기억으로 남고 싶습니다.</p>

          <div className="home-page-slider-button">
            <div className="home-page-slider-button-item">예약하기</div>
            <div className="home-page-slider-button-item">회원가입</div>
          </div>

          <Weather />

          

          <div className="home-page-slider-arrow home-page-slider-arrow-prev" ref={prevRef}>
          &#8592;
          </div>
          <div className="home-page-slider-arrow home-page-slider-arrow-next" ref={nextRef}>
            &#8594;
          </div>
        </div>
        
        <Swiper
          className="home-page-slider-swiper"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            type: 'progressbar',
            clickable: true,
          }}
          onInit={(swiper) => {
            // @ts-expect-error: Swiper navigation ref 연결을 위해 강제 지정
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error: Swiper navigation ref 연결을 위해 강제 지정
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide style={{ backgroundImage: 'url(https://erpimage.smartscore.kr/smartscore_erp_homepage/ljcku/main_visual1.jpg)' }}>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: 'url(https://erpimage.smartscore.kr/smartscore_erp_homepage/ljcku/main_visual2.jpg)' }}  >
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: 'url(https://erpimage.smartscore.kr/smartscore_erp_homepage/ljcku/main_visual3.jpg)' }}>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: 'url(https://erpimage.smartscore.kr/smartscore_erp_homepage/ljcku/main_visual4.jpg)' }}>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}; 