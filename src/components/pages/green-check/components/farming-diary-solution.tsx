import NextImage from '../../../NextImage';
import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

export function FarmingDiarySolution() {
  return (
    <div className='main-container py-24 text-center'>
      <Title text='GIẢI PHÁP NHẬT KÝ CANH TÁC' />
      <Subtitle
        className='mx-auto w-5/6'
        text='Là giải pháp cung cấp nền tảng ghi nhận lại hoạt động sản xuất của người
        nông dân và các mốc thời gian tương ứng với các hoạt động đó. Nhật ký sẽ
        tập hợp các thông tin về quá trình tạo ra sản phẩm, hình thành nên một
        hồ sơ sản phẩm'
      />
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
    <div className='rounded-md border border-gray-50 bg-gray-50 p-8 shadow'>
      <div className='flex items-center gap-4'>
        <NextImage
          src={item.img.url}
          alt={item.img.alt}
          width={47}
          height={47}
        />
        <div className='font-saira text-2xl font-semibold'>{item.title}</div>
      </div>
      <div className='mt-8 text-left text-xl'>{item.content}</div>
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
    content:
      'Hỗ trợ thu thập dữ liệu quá trình sản xuất, số hóa và cung cấp dữ liệu cho truy xuất nguồn gốc sản phẩm nông sản',
  },
  {
    img: {
      url: '/images/coop.png',
      alt: 'coop-image',
    },
    title: 'Tăng cao hiệu quả canh tác',
    content:
      'Tăng năng suất canh tác, cải thiện sản lượng và chất lượng sản phẩm đồng thời giảm chi phí các hoạt động canh tác',
  },
  {
    img: {
      url: '/images/leaf2.png',
      alt: 'leaf2-image',
    },
    title: 'Chuẩn hóa quy trình',
    content:
      'Giúp chuẩn hóa quy trình sản xuất theo các tiêu chuẩn như VietGap, GlobalGap và Organic',
  },
];
