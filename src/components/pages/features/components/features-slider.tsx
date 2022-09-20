import { Swiper, SwiperSlide } from 'swiper/react';
import { MOCK_DATA_FEATURES } from '../features-page';
import { FeaturesItem } from './features-item';

export function FeaturesSlider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      grabCursor
      className='mx-auto pb-10'
      loop={true}
      freeMode={false}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        bulletActiveClass: 'bg-primary',
        clickable: true,

        bulletClass:
          'inline-block w-3 h-3 bg-gray-400 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-primary transform translate-y-3',
      }}
    >
      {MOCK_DATA_FEATURES.map((item, index) => (
        <SwiperSlide key={index} className=''>
          <FeaturesItem
            key={index}
            className='flex flex-col'
            title={item.title}
            titleClassName='!leading-[1.3] !text-[23px]'
            subtitle={item.subtitle}
            image={item.image}
            wrapContentClassName='mt-4'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
