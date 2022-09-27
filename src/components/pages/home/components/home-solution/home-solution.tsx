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
      className='main-container rounded-xl bg-primary-dark px-1 pt-8 pb-3 lg:px-8 lg:pt-16 lg:pb-8 xl:px-16'
    >
      {isLg && (
        <div className='mb-8 px-3 lg:px-0'>
          <Title text='giải pháp gat' className='text-white' />
          <Subtitle
            text='Giải quyết các hạn chế trong chuỗi giá trị nông nghiệp'
            className='mx-auto max-w-lg !text-white'
          />
        </div>
      )}

      {/* <div className='flex flex-col gap-3 px-2 lg:flex-row lg:gap-10 lg:px-0'> */}
      {/* <HomeSolutionTabs /> */}
      {/* <div className='lg:pt-16'>
          <img
            src='/images/home-solution.png'
            alt='image'
            className='w-full lg:w-auto'
          />
        </div> */}
      {/* </div> */}

      {isLg && (
        <div className='mt-8'>
          <img
            src='./images/home-solution-main.png'
            alt='image'
            className='m-auto'
          />
        </div>
      )}
      <div className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2'>
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
      <div className='mt-4 min-h-[165px] text-xl text-[#6C6C6C]'>
        {solution.solution.content}
      </div>
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
