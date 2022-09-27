import { InfoCard } from '../../../shared/info-card/info-card';
import { Title } from '../../../shared/title/title';

export function Benefit() {
  return (
    <div data-aos='fade-up'>
      <Title
        text='Lợi ích của truy xuất nguồn gốc'
        className='mt-10 pb-4 lg:mt-14'
      />
      <div className='mt-16 grid gap-20 lg:auto-rows-fr lg:grid-cols-3 lg:gap-5 xl:gap-8'>
        {LIST.map((item, index) => (
          <InfoCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

const LIST = [
  {
    img: '/images/coop.png',
    title: 'Doanh nghiệp',
    options: [
      {
        content:
          'Tạo ưu thế cạnh tranh khi áp dụng truy xuất nguồn gốc vào sản xuất và tối ưu quá trình vận hành sản xuất',
      },
      {
        content: 'Quản lý hiệu quả vùng trồng và quy trình sản phẩm',
      },
      {
        content: 'Tối ưu về nhân sự và chi phí',
      },
    ],
  },
  {
    img: '/images/group.png',
    title: 'Cơ quan quản lý Nhà nước',
    options: [
      {
        content:
          'Truy xuất nguồn gốc giúp giảm thiểu gian lận và làm giả thực phẩm',
      },
    ],
  },
  {
    img: '/images/user.png',
    title: 'Người tiêu dùng',
    options: [
      {
        content:
          'Truy xuất nguồn gốc giúp người tiêu dùng mua được các sản phẩm chất lượng với đầy đủ thông tin nguồn gốc',
      },
    ],
  },
];
