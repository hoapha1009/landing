import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-primary-dark'>
      <div className='main-container'>
        <div className='flex pt-16 lg:flex-row lg:justify-between'>
          <InformationGat />
          <div className='shrink-0 grow-0'>
            <MenusLink />
            <QRcode />
          </div>
        </div>
        <div className='flex flex-col items-center py-6 mx-5 text-sm font-medium text-gray-400 border-t border-t-white lg:flex-row lg:justify-between'>
          <div>Copyright © 2022 GreenAgri Software. All rights reserved. </div>
          <div>Quy định sử dụng | Chính sách bảo mật</div>
        </div>
      </div>
    </footer>
  );
}

function InformationGat() {
  return (
    <div className='w-[450px] shrink-0 grow-0'>
      <img srcSet='/images/logo.png 2x' alt='logo' />
      <div className='mt-4 mb-4 text-lg font-semibold text-white uppercase'>
        Cty CP Công nghệ Green Agri
      </div>
      {MOCKS_DATA.map((item, index) => (
        <div key={index} className='mb-6'>
          <div className='text-lg font-semibold text-white '>{item.name}</div>
          <div className='mt-2'>
            {item.contacts.map((contact, idx) => (
              <div
                className='text-sm font-medium text-gray-400 lg:text-base'
                key={idx}
              >
                {contact}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className='flex flex-row gap-4 mb-6'>
        {IMAGE_SOCIAL.map((item, index) => (
          <Link href={item.href} key={index}>
            <a>
              <img src={`images/${item.img}`} alt={item.img} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

function MenusLink() {
  return (
    <div className='flex flex-row'>
      {MOCKS_LINK.map((item, index) => (
        <div key={index} className='mr-32 last:mr-0'>
          <div className='mb-8 text-lg font-medium text-white uppercase'>
            {item.name}
          </div>
          {item.menus.map((menu, idx) => (
            <Link href={menu.href} key={idx}>
              <a className='block mb-2 text-sm font-medium text-gray-400 last:mb-0 hover:text-primary lg:text-base'>
                {menu.name}
              </a>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

function QRcode() {
  return (
    <div className='flex flex-row mt-12'>
      <img src='/images/QR.png' alt='qrcode' />
      <div className='flex flex-col justify-around ml-4'>
        <div className='font-semibold text-white lg:text-lg'>
          Tải app GreenAgri
        </div>
        <div className='font-medium text-gray-400'>Link IOS</div>
        <div className='font-medium text-gray-400'>Link Android</div>
      </div>
    </div>
  );
}

const MOCKS_DATA = [
  {
    name: 'Trung tâm kinh doanh Hồ Chí Minh',
    contacts: [
      'Chung Cư Intresco An Khang',
      'Số 30, đường 19 An Khang building, Cao ốc, khu đô thị An Phú An Khánh, Thủ Đức, Thành phố Hồ Chí Minh',
      'Hotline: 090 4451 107',
      'Email: contact@greengroups.com.vn',
    ],
  },
  {
    name: 'Trụ sở Vũng Tàu',
    contacts: [
      'Thôn Sông Xoài 1, xã Láng Lớn, huyện Châu Đức tỉnh Bà Rịa-Vũng Tàu',
      'Hotline: 090 4451 107',
      'Email: contact@greengroupsvungtau.com.vn',
    ],
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

const MOCKS_LINK = [
  {
    name: 'gat',
    menus: [
      {
        name: 'Về Gat',
        href: '/about-us',
      },
      {
        name: 'Giải pháp',
        href: '',
      },
      {
        name: 'Tính năng',
        href: '',
      },
      {
        name: 'Tuyển dụng',
        href: '',
      },
      {
        name: 'Hướng dẫn',
        href: '',
      },
      {
        name: 'Tin tức & Blog',
        href: '',
      },
      {
        name: 'Tham gia cộng đồng',
        href: '',
      },
    ],
  },
  {
    name: 'Giải pháp',
    menus: [
      {
        name: 'Nhật ký canh tác',
        href: '',
      },
      {
        name: 'Truy xuất nguồn gốc',
        href: '',
      },
      {
        name: 'Quản lý kênh phân phối',
        href: '',
      },
      {
        name: 'CRM Platform',
        href: '',
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
