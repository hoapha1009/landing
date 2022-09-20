import Button from '../../../buttons/Button';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
SwiperCore.use([Pagination, Autoplay, Navigation]);

export function HomeBanner() {
  const paginationRef = useRef(null);
  const [_, setActiveIndex] = useState<any>();

  return (
    <div className="relative flex max-h-96 min-h-[350px] w-full flex-row justify-center bg-[url('/images/home-banner.png')] bg-cover bg-no-repeat lg:mb-32 lg:h-[725px] lg:max-h-[725px] lg:items-center">
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
        className='flex-center absolute bottom-4 z-50  w-full gap-1.5 text-center lg:bottom-16'
        ref={paginationRef}
      />
    </div>
  );
}

function HomBannerContent() {
  return (
    <div className='mt-8 lg:mt-0'>
      <img
        src='/images/logo.png'
        alt='logo'
        className='mx-auto w-16 object-contain lg:w-56'
      />
      <div className='my-2 mx-auto w-80 bg-gradient-to-r from-[#65AFF4] to-primary bg-clip-text text-center text-lg font-semibold text-transparent lg:my-8 lg:w-[715px] lg:text-5xl lg:leading-[3.5rem]'>
        Trying to be your most trusted Agriculte Platform
      </div>
      <div className='mx-auto w-80 max-w-screen-lg text-center text-base font-normal leading-6 text-white  lg:w-[840px] lg:text-xl'>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown.
      </div>
      <div className='mt-6 text-center lg:mt-7'>
        <Button variant='primary'>Tìm hiểu thêm</Button>
      </div>
    </div>
  );
}
