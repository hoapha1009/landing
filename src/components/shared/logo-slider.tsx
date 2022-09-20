import Link from 'next/link';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useScreen } from '../../hooks/use-screen';

SwiperCore.use([Pagination, Autoplay, Navigation]);

export interface LogoSliderProps {
  url: string;
  href: string;
}

export function LogoSlider() {
  const isLg = useScreen('lg');

  return (
    <Swiper
      slidesPerView='auto'
      spaceBetween={56}
      grabCursor
      className='pb-16'
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        bulletActiveClass: 'bg-blue-400',
        clickable: true,

        bulletClass:
          'inline-block w-3 h-3 bg-gray-400 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-blue-500 transform translate-y-3',
      }}
    >
      {isLg ? (
        <>
          {MOCK_DATA.map((item, index) => (
            <SwiperSlide key={index} className='w-40'>
              <Link href={item.href}>
                <a>
                  <img src={`/images/${item.url}`} alt={item.url} />
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </>
      ) : (
        <>
          {MOCK_DATA_MOBILE.map((item, index) => (
            <SwiperSlide key={index} className='grid grid-cols-2 gap-12'>
              {item.list.map((logo, index) => (
                <Link key={index} href={logo.href}>
                  <a className='block'>
                    <img
                      src={`/images/${logo.url}`}
                      alt={logo.url}
                      height='100%'
                    />
                  </a>
                </Link>
              ))}
            </SwiperSlide>
          ))}
        </>
      )}
    </Swiper>
  );
}

export const MOCK_DATA: LogoSliderProps[] = [
  {
    url: 'partner-1.png',
    href: '',
  },
  {
    url: 'partner-2.png',
    href: '',
  },
  {
    url: 'partner-3.png',
    href: '',
  },
  {
    url: 'partner-4.png',
    href: '',
  },
  {
    url: 'partner-5.png',
    href: '',
  },
  {
    url: 'partner-6.png',
    href: '',
  },
  {
    url: 'partner-7.png',
    href: '',
  },
];

const MOCK_DATA_MOBILE = [
  {
    list: [
      {
        url: 'partner-5.png',
        href: '',
      },
      {
        url: 'partner-4.png',
        href: '',
      },
      {
        url: 'partner-10.png',
        href: '',
      },
      {
        url: 'partner-1.png',
        href: '',
      },
      {
        url: 'partner-9.png',
        href: '',
      },
      {
        url: 'partner-8.png',
        href: '',
      },
    ],
  },
  {
    list: [
      {
        url: 'partner-5.png',
        href: '',
      },
      {
        url: 'partner-4.png',
        href: '',
      },
      {
        url: 'partner-10.png',
        href: '',
      },
      {
        url: 'partner-1.png',
        href: '',
      },
      {
        url: 'partner-9.png',
        href: '',
      },
      {
        url: 'partner-8.png',
        href: '',
      },
    ],
  },
  {
    list: [
      {
        url: 'partner-5.png',
        href: '',
      },
      {
        url: 'partner-4.png',
        href: '',
      },
      {
        url: 'partner-10.png',
        href: '',
      },
      {
        url: 'partner-1.png',
        href: '',
      },
      {
        url: 'partner-9.png',
        href: '',
      },
      {
        url: 'partner-8.png',
        href: '',
      },
    ],
  },
  {
    list: [
      {
        url: 'partner-5.png',
        href: '',
      },
      {
        url: 'partner-4.png',
        href: '',
      },
      {
        url: 'partner-10.png',
        href: '',
      },
      {
        url: 'partner-1.png',
        href: '',
      },
      {
        url: 'partner-9.png',
        href: '',
      },
      {
        url: 'partner-8.png',
        href: '',
      },
    ],
  },
];
