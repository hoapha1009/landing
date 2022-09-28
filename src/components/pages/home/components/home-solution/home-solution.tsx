import Link from 'next/link';
import { useScreen } from '../../../../../hooks/use-screen';
import Button from '../../../../buttons/Button';
import { Subtitle } from '../../../../shared/subtitle/subtitle';
import { Title } from '../../../../shared/title/title';

export function HomeSolution() {
  const isLg = useScreen('lg');
  return (
    <div
      data-aos='fade-up'
      className='main-container rounded-xl bg-primary-dark px-1 pt-8 pb-3 lg:px-8 lg:py-16 xl:px-16'
    >
      <div className='mb-8 px-3 lg:px-0'>
        <Title text='giải pháp gat' className='text-white' />
        <Subtitle
          text='Giải quyết các vấn đề còn hạn chế trong chuỗi giá trị nông nghiệp'
          className='!mt-2 font-light !text-white'
        />
      </div>
      <div className='mt-8'>
        <img
          src={
            isLg
              ? './images/home-solution-main.png'
              : './images/main-solution-mobile.png'
          }
          alt='image'
          className='m-auto'
        />
      </div>
      <div className='my-8 grid grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:px-0'>
        {MOCK_DATA.map((item, index) => (
          <HomeSolutionCard key={index} solution={item} />
        ))}
      </div>
    </div>
  );
}

function HomeSolutionCard(solution) {
  return (
    <div className='rounded-md bg-white p-4 lg:p-8'>
      <img src={solution.solution.url} alt='image' />
      <div className='mt-4 font-saira text-[23px] font-semibold'>
        {solution.solution.title}
      </div>
      <div className='mt-4 min-h-[165px] '>{solution.solution.content}</div>
      <Button variant='primary' className='mt-4'>
        <Link href={solution.solution.href}>TÌM HIỂU THÊM</Link>
      </Button>
    </div>
  );
}

const MOCK_DATA = [
  {
    url: './images/logo-green-agri-2.png',
    title: 'Giải pháp Green Agri',
    content:
      'Là giải pháp thương mại điện tử và quản lý kênh phân phối cho các doanh nghiệp trong lĩnh vực nông nghiệp. Hỗ trợ nền tảng công nghệ và giúp tiếp cận thêm kênh online hiệu quả. Ngoài ra, giúp doanh nghiệp mở rộng kênh phân phối đến các đại lý các tỉnh và mạng lưới cộng tác viên. ',
    href: '/green-agri',
  },
  {
    url: './images/logo-green-check.png',
    title: 'Giải pháp Green Check',
    content:
      'Là giải pháp truy xuất nguồn gốc từ nông trại đến bàn ăn hỗ trợ mã QR để theo dõi và đáp ứng các tiêu chuẩn chất lượng của nông sản. Loại bỏ hàng giả và đảm bảo rằng tất cả nông sản khi đến tay người tiêu dùng cuối là sản phẩm tốt nhất.',
    href: '/green-check',
  },
];
