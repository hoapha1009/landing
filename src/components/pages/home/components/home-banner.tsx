import Button from '../../../buttons/Button';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import { useScreen } from '../../../../hooks/use-screen';
import { useRouter } from 'next/router';
SwiperCore.use([Pagination, Autoplay, Navigation]);

export function HomeBanner() {
  const paginationRef = useRef(null);
  const [_, setActiveIndex] = useState<any>();

  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          grabCursor
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            // el: paginationRef.current,
            clickable: true,
            type: 'bullets',
            bulletActiveClass: 'swiper-pagination-bullet-active-banner',
            bulletClass: `inline-block w-3 h-3 bg-gray-100 rounded-full transition-all cursor-pointer mr-2 last:mr-0 lg:mb-20 mb-8 hover:bg-primary`,
            // renderBullet: function (index, className) {
            //   return `<span class="${className} "></span>`;
            // },
          }}
          onSwiper={setActiveIndex}
          freeMode={false}
        >
          {MOCK_DATA_BANNER.map((item, index) => (
            <SwiperSlide key={index}>
              <HomBannerContent banner={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

function HomBannerContent(banner) {
  const router = useRouter();
  const isLg = useScreen('lg');
  return (
    <div
      className={`relative flex max-h-96 min-h-[350px] w-full flex-row justify-center bg-cover bg-center bg-no-repeat lg:mb-[2.5rem] lg:flex lg:h-[645px] lg:max-h-[645px] lg:flex-row   lg:justify-center ${
        !isLg ? 'items-center' : ''
      }`}
      style={{ backgroundImage: `url('./images/${banner.banner.image}')` }}
    >
      <div className='lg:mt-24'>
        <div
          data-aos='fade-up'
          data-aos-delay='100'
          className={`mx-auto mt-10 mb-2 text-center font-saira text-xl font-semibold uppercase !leading-[1.5] text-white lg:mt-16 lg:mb-8 ${banner.banner.maxWidth} lg:text-[60px]`}
        >
          {banner.banner.title}
        </div>
        <div
          data-aos='fade-up'
          data-aos-delay='200'
          className='mt-10 text-center lg:mt-12'
        >
          <Button
            variant='primary'
            className='py-[12px] px-5 font-normal uppercase  lg:py-[14px] lg:px-7'
            onClick={() => router.push('/about-us')}
          >
            Tìm hiểu thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

const MOCK_DATA_BANNER = [
  {
    image: 'home-banner-3.png',
    title: 'Nông nghiệp xanh sống an lành',
    href: '/',
    maxWidth: 'lg:max-w-2xl max-w-[250px]',
  },
  {
    image: 'home-banner-2.png',
    title: 'giải pháp công nghệ hàng đầu trong ngành nông nghiệp',
    href: '/',
    maxWidth: 'lg:max-w-5xl',
  },
  {
    image: 'home-banner-1.png',
    title: 'ứng dụng công nghệ nâng tầm nông nghiệp Việt Nam',
    href: '/',
    maxWidth: 'lg:max-w-5xl',
  },
];
