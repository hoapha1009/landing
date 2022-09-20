import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

export function AboutUsSolution() {
  return (
    <div className='main-container py-16 lg:px-16'>
      <Title text='Giải pháp green agri' />
      <Subtitle
        text='Bộ giải pháp hàng đầu cho ngành nông nghiệp'
        className='mx-auto mt-4 mb-10 max-w-lg'
      />
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
        {MOCK_DATA.map((item, index) => (
          <AboutUsSolutionCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}

function AboutUsSolutionCard({
  data,
}: {
  data: { image: string; title: string; content: string };
}) {
  return (
    <div className='min-h-[150px] rounded-md border bg-gray-100 p-3 shadow-md lg:p-6'>
      <div className='flex flex-row items-center'>
        <img
          src={data.image}
          alt='leaf'
          className='mr-2 w-1/6 object-contain lg:mr-4 lg:w-auto'
        />
        <div className='font-saira text-base font-semibold lg:text-2xl'>
          {data.title}
        </div>
      </div>
      <div className='mt-3 text-base font-medium text-gray-600 lg:mt-7 lg:text-lg'>
        {data.content}
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    image: '/images/leaf.png',
    title: 'Giải pháp nhật ký canh tác',
    content:
      'Ghi chép nhật ký các hoạt động nội bộ trong suốt quá trình trồng trọt và chăn nuôi',
  },
  {
    image: '/images/search2.png',
    title: 'Giải pháp truy xuất nguồn gốc',
    content: 'Minh bạch thông tin sản phẩm chính hãng tới người dùng.',
  },
  {
    image: '/images/coop.png',
    title: 'Giải pháp quản lý kênh phân phối',
    content:
      'Tích hợp các giải pháp trong 1 QR Code: Chống hàng giả, chống phá giá, bảo hành điện tử',
  },
  {
    image: '/images/user.png',
    title: 'CRM Platform',
    content: 'Nền tảng tạo ứng dụng chăm sóc khách hàng.',
  },
];
