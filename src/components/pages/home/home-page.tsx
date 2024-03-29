import { SlidePart } from '../../shared/slide-part/slide-part';
import { HomeAboutUs } from './components/home-about-us/home-about-us';
import { HomeBanner } from './components/home-banner';
import { HomeGroupCard } from './components/home-group-card';
import { HomeNews } from './components/home-news/home-news';
import { HomeSolution } from './components/home-solution/home-solution';

export function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeAboutUs />
      <HomeSolution />
      <HomeGroupCard text='Giá trị cộng đồng' options={MOCK_DATA_2} />
      <SlidePart
        title='Khách hàng GAT'
        className='bg-[#E7F7F0]'
        type='customer'
      />
      <SlidePart title='Đối tác GAT' />
      <HomeNews />
    </>
  );
}

export const MOCK_DATA_1 = [
  {
    img: {
      url: '/images/leaf.png',
      alt: 'lá cây',
    },
    content: 'Tự động hóa quá trình bán hàng cho thành viên kênh phân phối',
  },
  {
    img: {
      url: '/images/scan.png',
      alt: 'lá cây',
    },
    content:
      'Giảm thiểu gian lận, làm giả hàng hóa thông qua truy xuất nguồn gốc',
  },
  {
    img: {
      url: '/images/virut.png',
      alt: 'lá cây',
    },
    content: 'Chuẩn hóa quy trình sản xuất nông nghiệp theo các tiêu chuẩn',
  },
  {
    img: {
      url: '/images/user.png',
      alt: 'lá cây',
    },
    content: 'Đảm bảo quyền lợi cho các đối tác, lợi ích cho người tiêu dùng',
  },
];

export const MOCK_DATA_2 = [
  {
    img: {
      url: '/images/scan.png',
      alt: 'scan-image',
    },
    content: 'Góp phần số hóa nền nông nghiệp Việt Nam',
  },
  {
    img: {
      url: '/images/leaf2.png',
      alt: 'leaf-image',
    },
    content: 'Góp phần bảo vệ môi trường',
  },
  {
    img: {
      url: '/images/group.png',
      alt: 'group-image',
    },
    content: 'Góp phần nâng cao hiệu năng cho sản xuất nông nghiệp',
  },
  {
    img: {
      url: '/images/search2.png',
      alt: 'search-image',
    },
    content: 'Góp phần nâng cao tính minh bạch trong thương mại',
  },
];
