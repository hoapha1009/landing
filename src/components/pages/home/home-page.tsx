import { SlidePart } from '../../shared/slide-part/slide-part';
import { HomeBanner } from './components/home-banner';
import { HomeGroupCard } from './components/home-group-card';
import { HomeNews } from './components/home-news/home-news';
import { HomeSolution } from './components/home-solution/home-solution';

export function HomePage() {
  return (
    <>
      <HomeBanner />

      <HomeGroupCard text='Ưu điểm GAT' options={MOCK_DATA_1} />
      <HomeSolution />

      {/* <HomeValueChain /> */}
      <HomeGroupCard text='Giá trị cộng đồng' options={MOCK_DATA_2} />

      <SlidePart title='Khách hàng GAT' className='bg-[#E7F7F0]' />
      <SlidePart title='Đối tác GAT' />
      {/* <HomePartner />
      <HomeCustomer /> */}
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
      url: '/images/leaf.png',
      alt: 'lá cây',
    },
    content: 'Tăng tính minh bạch thương mại',
  },
  {
    img: {
      url: '/images/scan.png',
      alt: 'lá cây',
    },
    content: 'Hiện đại hóa nền nông nghiệp Việt Nam',
  },
  {
    img: {
      url: '/images/virut.png',
      alt: 'lá cây',
    },
    content: 'Bảo vệ môi trường',
  },
  {
    img: {
      url: '/images/user.png',
      alt: 'lá cây',
    },
    content: 'Thúc đẩy phát triển kinh tế và giảm thiểu đói nghèo',
  },
];
