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
          text='Xây dựng nền tảng công nghệ để số hóa các công đoạn trong chuỗi giá trị nông nghiệp, tạo thành một hệ sinh thái có liên kết các khâu trong chuỗi để đạt hiệu năng cao nhất'
          className='mx-auto !mt-2 w-5/6 font-light !text-white'
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
          className='m-auto object-contain'
        />
      </div>
      <div className='my-8 grid grid-cols-1 gap-8 whitespace-pre-wrap px-4 lg:grid-cols-2 lg:px-0'>
        {MOCK_DATA.map((item, index) => (
          <HomeSolutionCard key={index} solution={item} />
        ))}
      </div>
    </div>
  );
}

function HomeSolutionCard(solution) {
  return (
    <div className='flex flex-col justify-between gap-4 rounded-md bg-white p-4 lg:p-8'>
      <div className='flex-1'>
        <img src={solution.solution.url} alt='image' />
        <div className='mt-4 font-saira text-[23px] font-semibold'>
          {solution.solution.title}
        </div>
        <div className='mt-4 min-h-[165px] indent-0 leading-7'>
          {solution.solution.content}
        </div>
      </div>
      <div className=''>
        <Button variant='primary' className=''>
          <Link href={solution.solution.href}>TÌM HIỂU THÊM</Link>
        </Button>
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    url: './images/logo-green-agri-2.png',
    title: 'Giải pháp Green Agri',
    content: `Là giải pháp thương mại điện tử cho các doanh nghiệp nói chung đặc biệt là các doanh nghiệp nông nghiệp để quản lý và hỗ trợ kênh phân phối.
Ngoài ra còn giúp doanh nghiệp quản lý dữ liệu khách hàng để từ đó thực hiện các chương trình khuyến mại, chăm sóc, dịch vụ khách hàng hiệu quả, đúng đối tượng.`,
    href: '/green-agri',
  },
  {
    url: './images/logo-green-check.png',
    title: 'Giải pháp Green Check',
    content: `Là giải pháp truy xuất nguồn gốc ghi nhận đầy đủ, kịp thời các hoạt động từ quá trình canh tác đến thu hoạch, thu mua, chế biến và phân phối sản phẩm đến người tiêu dùng, thông qua việc mã hóa và định danh bằng mã QR code cho từng công việc, công đoạn. 
Đảm bảo tính minh bạch, rõ ràng trong việc kiểm soát chất lượng sản phẩm, góp phần khẳng định chất lượng và xây dựng thương hiệu sản phẩm.`,
    href: '/green-check',
  },
];
