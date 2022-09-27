import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';
import { FeatMain } from '../../green-agri/components/feat-main';
import { Benefit } from './benefit';

export function TraceabilitySolution() {
  return (
    <div data-aos='fade-up' className='bg-[#E7F7F0] py-8 lg:py-24'>
      <div className='main-container'>
        <Title text='giải pháp truy xuất nguồn gốc' />
        <Subtitle
          className='mx-auto !text-left lg:w-3/4 lg:!text-center'
          text='Là giải pháp cho phép người tiêu dùng và các bên liên quan trong chuỗi giá trị nông nghiệp truy xuất lịch sử các thông tin về quy trình sản xuất, chế biến, phân phối và khách hàng tiêu dùng cuối'
        />
        <div className='w-full pr-4'>
          <img
            data-aos='zoom-in'
            data-delay='50'
            data-duration='500'
            src='/images/solution-origin.png'
            alt='solution-origin-image'
            className='w-full '
          />
        </div>
        <div className='mt-8'>
          <FeatMain options={LIST} />
        </div>
        <Benefit />
      </div>
    </div>
  );
}

const LIST = [
  {
    url: '/images/leaf-2.png',
    content: 'Hỗ trợ truy xuất nguồn gốc từ đầu tới cuối chuỗi cung ứng',
  },
  {
    url: '/images/leaf-2.png',
    content: 'Hỗ trợ đăng ký mã số sản phẩm và đánh giá vùng trồng, nhà xưởng.',
  },
  {
    url: '/images/leaf-2.png',
    content:
      'Theo dõi nhật ký các hoạt động sản xuất nội bộ: xuống giống, bón phân, xử lý dịch hại, chăm sóc, thu hoạch, chế biến, đóng gói ngay tại thời diểm thực hiện ',
  },
  {
    url: '/images/leaf-2.png',
    content:
      'Ghi chép các hoạt động tư vấn, kiểm tra, giám sát khu vực sản xuất, nhà máy chế biến và đóng gói',
  },
  {
    url: '/images/leaf-2.png',
    content:
      'Quản lý thông tin phân phối, vận chuyển hoàn hóa tới tay người tiêu dùng, đảm bảo tính minh bạch thông tin sản phẩm',
  },
];
