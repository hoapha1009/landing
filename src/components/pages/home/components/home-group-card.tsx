import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';
import { Card } from '../../../shared/card/card';

export function HomeGroupCard({
  text,
  subtitle,
}: {
  text: string;
  subtitle?: string;
}) {
  return (
    <div data-aos='fade-up' className='main-container lg:0 py-8 xl:p-16'>
      <Title text={text} className={subtitle ? '' : 'mb-10'} />
      {subtitle && <Subtitle text={subtitle} className='mx-auto max-w-lg' />}
      <div className='grid w-full auto-rows-fr grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8'>
        {MOCK_DATA.map((item, index) => (
          <Card
            key={index}
            index={index}
            item={item}
            className='gap-4 border-2 bg-[#FAFAFA] px-2 py-4 lg:gap-8 lg:px-6 lg:py-0 lg:pb-10 lg:pt-[38px]'
            contentClass='text-gray-600 lg:text-lg text-base'
          />
        ))}
      </div>
    </div>
  );
}

const MOCK_DATA = [
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
