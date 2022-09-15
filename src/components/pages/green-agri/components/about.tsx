import { Card } from '../../../shared/card/card';

export function About() {
  return (
    <div className='main-container py-16 text-center'>
      <div className='text-3xl font-bold uppercase'>Về green agri</div>
      <div className='mt-3 mb-8 text-xl'>
        Là giải pháp thương mại điện tử và kênh phân phối <br /> trong ngành
        nông nghiệp
      </div>
      <img
        src='/images/about-greenAgri.png'
        alt='about-green-agri'
        className='mx-auto w-2/3'
      />
      <div className='my-8 text-xl'>
        Hệ thống hỗ trợ nền tảng công nghệ cho doanh nghiệp kinh doanh truyền
        thống offline và kênh online hiệu quả. Hỗ trợ doanh nghiệp mở rộng kênh
        phân phối đến các đại lý các tỉnh, và phát triển mạng lưới sales/ cộng
        tác viên
      </div>
      <div className='grid w-full auto-rows-fr grid-cols-4 gap-5'>
        {LIST.map((item, index) => (
          <Card
            key={index}
            item={item}
            className='gap-8 bg-gray-50 p-8 text-lg'
          />
        ))}
      </div>
    </div>
  );
}

const LIST = [
  {
    img: {
      url: '/images/automation.png',
      alt: 'about-green-agri-1',
    },
    content: 'Tự động hóa quá trình bán hàng cho thành viên kênh phân phối',
  },
  {
    img: {
      url: '/images/update.png',
      alt: 'about-green-agri-2',
    },
    content: 'Cập nhật, tổng hợp và báo cáo tình hình của đội ngũ bán hàng',
  },
  {
    img: {
      url: '/images/handle.png',
      alt: 'about-green-agri-3',
    },
    content: 'Chủ động kiểm soát hàng tồn kho, xử lý đơn hàng,… ',
  },
  {
    img: {
      url: '/images/information.png',
      alt: 'about-green-agri-4',
    },
    content: 'Kiểm soát thông tin chính xác',
  },
];
