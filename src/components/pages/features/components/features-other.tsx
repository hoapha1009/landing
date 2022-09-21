import { Title } from '../../../shared/title/title';
import Link from 'next/link';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useScreen } from '../../../../hooks/use-screen';

SwiperCore.use([Pagination, Autoplay, Navigation]);
export function FeaturesOther() {
  const isLg = useScreen('lg');
  return (
    <div data-aos='fade-up' className='pt-16'>
      <Title text='Các tính năng khác' className='mb-10' />
      <Swiper
        centeredSlides
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
          bulletActiveClass: 'bg-primary',
          clickable: true,
          dynamicBullets: true,
          bulletClass:
            'inline-block w-3 h-3 bg-gray-400 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-primary transform translate-y-3',
        }}
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} className={isLg ? '' : '!w-[500px]'}>
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
