import Link from 'next/link';
import { useScreen } from '../../hooks/use-screen';

export default function Footer() {
  return (
    <footer className='bg-primary-dark'>
      <div className='main-container'>
        <div className='flex flex-col pt-8 lg:pt-16 xl:flex-row xl:justify-between'>
          <InformationGat />
          <div className='shrink-0 grow-0'>
            <MenusLink />
            <QRcode />
          </div>
        </div>
        <div className='flex flex-col-reverse items-center border-t border-t-white py-6 text-sm font-medium text-gray-400 lg:mx-5 lg:flex-row lg:justify-between'>
          <div className='text-center text-xs text-[#CCCCCC] lg:text-base'>
            Copyright © 2022 GreenAgri Software. All rights reserved.{' '}
          </div>
          <div className='mb-1 text-[#CCCCCC] lg:mb-0'>
            <Link href='/'>
              <a className='hover:underline'>Quy định sử dụng </a>
            </Link>
            <span>|</span>
            <Link href='/'>
              <a className='hover:underline'> Chính sách bảo mật</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InformationGat() {
  return (
    <div className='shrink-0 grow-0 lg:w-[470px]'>
      <Link href='/'>
        <a>
          <img
            src='/images/logo.png'
            alt='logo'
            className='w-60 object-contain lg:w-72'
          />
        </a>
      </Link>
      <div className='mt-4 mb-4 text-lg font-semibold uppercase text-white'>
        Cty CP Công nghệ Green Agri
      </div>
      {MOCKS_DATA.map((item, index) => (
        <div key={index} className='mb-6'>
          <div className='font-saira text-xl font-semibold text-white'>
            {item.name}
          </div>
          <div className='mt-2'>
            <div className='mt-2 text-base text-[#CCCCCC]  lg:text-lg'>
              <p>
                <a
                  className='whitespace-pre-wrap hover:text-white hover:underline'
                  href={item.linkAddress}
                  target='_blank'
                  rel='noreferrer'
                >
                  {item.address}
                </a>
              </p>
              <p>
                <a
                  className='hover:text-white hover:underline'
                  href={`tel: +${item.hotline}`}
                >
                  Phone: {item.hotline}
                </a>
              </p>
              <p>
                <a
                  className='hover:text-white hover:underline'
                  href={`mailto:${item.email}`}
                >
                  Email: {item.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MenusLink() {
  const isLg = useScreen('lg');
  const datasLink = isLg ? MOCKS_LINK_DEKTOP : MOCKS_LINK_WEBAPP;
  return (
    <div className='flex flex-col gap-4 lg:flex-row lg:gap-16'>
      {datasLink.map((item, index) => (
        <div key={index}>
          <div className='mb-4 font-saira text-xl font-normal uppercase text-white'>
            {item.name}
          </div>
          <div className='grid grid-cols-2 gap-1 lg:grid-cols-1 lg:gap-2'>
            {item.menus.map((menu, idx) => (
              <Link href={menu.href} key={idx}>
                <a className='block text-base  text-[#CCCCCC] hover:text-white hover:underline lg:text-lg'>
                  {menu.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function QRcode() {
  return (
    <div className='mt-12 mb-4 flex flex-row xl:mb-0'>
      <img
        src='/images/qrCode.png'
        alt='qrcode'
        className='h-24 w-24 object-contain '
      />
      <div className='ml-4 flex flex-col justify-around'>
        <div className='font-saira font-semibold text-white lg:text-lg'>
          Tải app GreenAgri
        </div>
        <div className='font-medium text-gray-400 hover:text-white'>
          <Link href='/'>
            <a>
              <img
                src='./images/google-play.png'
                alt='google-play'
                className='object-contain '
              />
            </a>
          </Link>
        </div>
        <div className='font-medium text-gray-400 hover:text-white'>
          <Link href='/'>
            <a>
              <img
                src='./images/app-store.png'
                alt='app-store'
                className='object-contain '
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

const MOCKS_DATA = [
  {
    name: 'Văn phòng đại diện Hồ Chí Minh',
    address: `Chung Cư Intresco An Khang 
Số 30 đường 19, An Phú, Thành phố Thủ Đức`,
    hotline: '090 4451 107',
    email: 'contact@greengroups.com.vn',
    linkAddress:
      'https://www.google.com/maps/place/L%C3%B4+B+Chung+C%C6%B0+Intresco+An+Khang/@10.7971588,106.7375904,17z/data=!3m1!4b1!4m5!3m4!1s0x3175260e177ca075:0xf1962dca329764ca!8m2!3d10.7971588!4d106.7397791?hl=vi-VN',
  },
  {
    name: 'Trụ sở Vũng Tàu',
    address:
      'Thôn Sông Xoài 1, xã Láng Lớn, huyện Châu Đức tỉnh Bà Rịa-Vũng Tàu',
    hotline: '083 9787 272',
    email: 'contact@greengroupsvungtau.com.vn',
    linkAddress:
      'https://www.google.com/maps/search/Th%C3%B4n+S%C3%B4ng+Xo%C3%A0i+1,+x%C3%A3+L%C3%A1ng+L%E1%BB%9Bn,+huy%E1%BB%87n+Ch%C3%A2u+%C4%90%E1%BB%A9c+t%E1%BB%89nh+B%C3%A0+R%E1%BB%8Ba-V%C5%A9ng+T%C3%A0u/@10.6565782,107.1808849,13z/data=!3m1!4b1',
  },
];

const IMAGE_SOCIAL = [
  { img: 'facebook.png', href: 'http://www.facebook.com' },
  { img: 'twitter.png', href: 'http://www.twitter.com' },
  { img: 'youtube.png', href: 'http://www.youtube.com' },
  {
    img: 'in.png',
    href: 'instagram.com',
  },
];

const MOCKS_LINK_DEKTOP = [
  {
    name: 'GAT',
    menus: [
      {
        name: 'Về GAT',
        href: '/about-us',
      },
      {
        name: 'Giải pháp',
        href: '/',
      },
      // {
      //   name: 'Tính năng',
      //   href: '/features',
      // },
      {
        name: 'Tuyển dụng',
        href: '/',
      },
      // {
      //   name: 'Hướng dẫn',
      //   href: '/',
      // },
      {
        name: 'Tin tức & Blog',
        href: 'news-and-blog',
      },
      // {
      //   name: 'Tham gia cộng đồng',
      //   href: 'join-us',
      // },
    ],
  },
  {
    name: 'Giải pháp',
    menus: [
      {
        name: 'Green Check',
        href: '/green-check',
      },
      {
        name: 'Green Agri',
        href: '/green-agri',
      },
    ],
  },
  {
    name: 'Trung tâm hỗ trợ',
    menus: [
      {
        name: 'Hướng dẫn sử dụng',
        href: '',
      },
      {
        name: 'Tài liệu nhà phát triển',
        href: '',
      },
      {
        name: 'Tuyển dụng',
        href: '',
      },
      {
        name: 'Chính sách bảo mật',
        href: '',
      },
    ],
  },
];

const MOCKS_LINK_WEBAPP = [
  {
    name: 'gat',
    menus: [
      {
        name: 'Về Gat',
        href: '/about-us',
      },
      {
        name: 'Hướng dẫn',
        href: '/',
      },
      {
        name: 'Giải pháp',
        href: '/',
      },
      {
        name: 'Tin tức & Blog',
        href: 'news-and-blog',
      },
      {
        name: 'Tính năng',
        href: '/features',
      },
      {
        name: 'Tham gia cộng đồng',
        href: 'join-us',
      },
      {
        name: 'Tuyển dụng',
        href: '/',
      },
    ],
  },
  {
    name: 'Giải pháp',
    menus: [
      {
        name: 'Green Check',
        href: '/green-check',
      },
      {
        name: 'Green Agri',
        href: '/green-agri',
      },
    ],
  },
  {
    name: 'Trung tâm hỗ trợ',
    menus: [
      {
        name: 'Hướng dẫn sử dụng',
        href: '',
      },
      {
        name: 'Tuyển dụng',
        href: '',
      },
      {
        name: 'Tài liệu nhà phát triển',
        href: '',
      },
      {
        name: 'Chính sách bảo mật',
        href: '',
      },
    ],
  },
];
