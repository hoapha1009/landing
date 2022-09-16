import { Title } from '../../../shared/title/title';
import Link from 'next/link';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Autoplay, Navigation]);
export function FeaturesOther() {
  return (
    <div className='pt-16'>
      <Title text='Các tính năng khác' className='mb-10' />
      <Swiper
        slidesPerView={1.5}
        spaceBetween={12}
        grabCursor
        className='pb-12'
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.swiper-pagination',
          // bulletActiveClass: "swiper-pagination-bullet-active pb-primary",
          clickable: true,
          dynamicBullets: true,
          bulletClass: 'swiper-pagination-bullet w-3 h-3 rounded-none',
        }}
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <Link href='/'>
              <a>
                <img
                  src='/images/features-other.png'
                  alt='image'
                  className='w-full'
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
        <div className='swiper-pagination'></div>
      </Swiper>
    </div>
  );
}
