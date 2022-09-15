import NextImage from '../../../NextImage';

export function FarmingDiarySolution() {
  return (
    <div className='main-container py-16 text-center'>
      <div className='text-3xl font-bold uppercase'>
        GIẢI PHÁP NHẬT KÝ CANH TÁC
      </div>
      <div className='mt-3 mb-8 text-xl'>
        Là giải pháp cung cấp nền tảng ghi nhận lại hoạt động sản xuất của người
        nông dân và các mốc thời gian tương ứng với các hoạt động đó. Nhật ký sẽ
        tập hợp các thông tin về quá trình tạo ra sản phẩm, hình thành nên một
        hồ sơ sản phẩm
      </div>
      <img
        src='/images/solution-diary.png'
        alt='solution-diary-image'
        className='mx-auto w-2/3'
      />
      <div className='mt-8 grid w-full auto-rows-fr grid-cols-3 gap-8'>
        {LIST.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

interface Card {
  img: {
    url: string;
    alt: string;
  };
  title: string;
  content: string;
}

interface CardProps {
  item: Card;
}

export function Card({ item, ...props }: CardProps) {
  return (
    <div className='rounded-md border border-gray-50 bg-primary-light p-8 shadow'>
      <div className='ml-2.5 flex items-center gap-2'>
        <NextImage
          src={item.img.url}
          alt={item.img.alt}
          width={47}
          height={47}
        />
        <div className='text-2xl font-bold'>{item.title}</div>
      </div>
      <div className='mt-8 text-xl'>{item.content}</div>
    </div>
  );
}

const LIST = [
  {
    img: {
      url: '/images/scan.png',
      alt: 'scan-image',
    },
    title: 'Thu thập dữ liệu',
    content: 'Tự động hóa quá trình bán hàng cho thành viên kênh phân phối',
  },
  {
    img: {
      url: '/images/update.png',
      alt: 'about-green-agri-2',
    },
    title: 'Thu thập dữ liệu',
    content: 'Cập nhật, tổng hợp và báo cáo tình hình của đội ngũ bán hàng',
  },
  {
    img: {
      url: '/images/handle.png',
      alt: 'about-green-agri-3',
    },
    title: 'Thu thập dữ liệu',
    content: 'Chủ động kiểm soát hàng tồn kho, xử lý đơn hàng,… ',
  },
];
