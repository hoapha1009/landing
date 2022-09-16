import { Title } from '../../../shared/title/title';
import Link from 'next/link';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Autoplay, Navigation]);
export function FeaturesOther() {
  return (
    <div className='pt-32'>
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
          bulletActiveClass: 'bg-blue-400',
          clickable: true,
          dynamicBullets: true,
          bulletClass:
            'inline-block w-3 h-3 bg-gray-400 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-blue-500 transform translate-y-3',
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
      </Swiper>
    </div>
  );
}
