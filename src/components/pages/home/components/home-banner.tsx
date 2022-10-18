import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useScreen } from '../../../../hooks/use-screen';
import Button from '../../../buttons/Button';
SwiperCore.use([Pagination, Autoplay, Navigation]);

export function HomeBanner() {
  const [_, setActiveIndex] = useState<any>();

  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          grabCursor
          loop={true}
          autoplay={{
            delay: 4000,
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
              {/* <HomBannerContent banner={item} /> */}
              <HomeBannerContent banner={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

function HomeBannerContent(banner) {
  const router = useRouter();
  const isLg = useScreen('lg');

  return (
    <div className='relative h-[339px] lg:h-[660px]'>
      <Image
        src={`/images/${banner.banner.image}`}
        alt={banner.banner.image}
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/3 w-full -translate-y-16 transform text-center '>
        <h1 className='mt-10 mb-2 whitespace-pre-wrap font-saira text-2xl font-semibold uppercase !leading-tight text-white lg:text-6xl'>
          {isLg ? banner.banner.title : banner.banner.mobiTitle}
        </h1>
        <Button
          variant='primary'
          className='mt-4 py-[12px] px-5 font-normal uppercase lg:py-[14px] lg:px-7'
          onClick={() => router.push('/about-us')}
        >
          Tìm hiểu thêm
        </Button>
      </div>
    </div>
  );
}

const MOCK_DATA_BANNER = [
  {
    image: 'home-banner-3.png',
    mobiTitle: `Nông nghiệp xanh
sống an lành`,
    title: `Nông nghiệp xanh
sống an lành`,
    href: '/',
    maxWidth: 'lg:max-w-2xl max-w-[250px]',
  },
  {
    image: 'home-banner-2.png',
    mobiTitle: `giải pháp công nghệ
hàng đầu trong 
ngành nông nghiệp`,
    title: `giải pháp công nghệ hàng đầu
trong ngành nông nghiệp`,
    href: '/',
    maxWidth: 'lg:max-w-5xl',
  },
  {
    image: 'home-banner-1.png',
    mobiTitle: `ứng dụng công nghệ 
nâng tầm
nông nghiệp Việt Nam`,
    title: `ứng dụng công nghệ nâng tầm
nông nghiệp Việt Nam`,
    href: '/',
    maxWidth: 'lg:max-w-5xl',
  },
];
