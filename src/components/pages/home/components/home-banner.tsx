import Button from '../../../buttons/Button';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
SwiperCore.use([Pagination, Autoplay, Navigation]);

export function HomeBanner() {
  const paginationRef = useRef(null);
  const [_, setActiveIndex] = useState<any>();

  return (
    <div className="relative mb-32 flex h-[725px] max-h-[725px] w-full flex-row items-center justify-center bg-[url('/images/home-banner.png')] bg-cover bg-no-repeat">
      <div className='overflow-hidden '>
        <Swiper
          slidesPerView={1}
          grabCursor
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true,
            type: 'bullets',
            bulletActiveClass: 'swiper-pagination-bullet-active-banner',
            bulletClass: `inline-block w-3 h-3 bg-gray-100 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-primary`,
            renderBullet: function (index, className) {
              return `<span class="${className} "></span>`;
            },
          }}
          onSwiper={setActiveIndex}
          freeMode={false}
        >
          {[1, 2, 3, 4].map((item, index) => (
            <SwiperSlide key={index}>
              <HomBannerContent />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className='flex-center absolute bottom-16 z-50 w-full gap-1.5 text-center'
        ref={paginationRef}
      />
    </div>
  );
}

function HomBannerContent() {
  return (
    <div>
      <img
        src='/images/logo.png'
        alt='logo'
        className='mx-auto w-56 object-contain'
      />
      <div className='my-8 mx-auto w-[715px] bg-gradient-to-r from-[#65AFF4] to-primary bg-clip-text text-center text-5xl font-semibold leading-[3.5rem] text-transparent'>
        Trying to be your most trusted Agriculte Platform
      </div>
      <div className='mx-auto w-[840px] max-w-screen-lg text-center text-xl font-normal  leading-6 text-white'>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown.
      </div>
      <div className='mt-7 text-center'>
        <Button variant='primary'>Tìm hiểu thêm</Button>
      </div>
    </div>
  );
}
