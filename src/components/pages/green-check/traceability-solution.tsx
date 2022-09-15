import { InfoCard } from '../../shared/info-card/info-card';
import { Subtitle } from '../../shared/subtitle/subtitle';
import { Title } from '../../shared/title/title';

export function TraceabilitySolution() {
  return (
    <div className='bg-primary-light py-16'>
      <div className='main-container'>
        <Title text='giải pháp truy xuất nguồn gốc' />
        <Subtitle
          text={`Là giải pháp cho phép người tiêu
dùng cũng như các bên liên quan truy tìm lịch sử các thông tin về quy trình sản xuất, chế biến, phân phối và cho đến khi sản phẩm đến được tay người
dùng`}
        />
        <div className='w-full pr-4'>
          <img
            src='/images/solution-origin.png'
            alt='solution-origin-image'
            className='w-full'
          />
        </div>
        <Title text='Lợi ích của Green Agri' className='mt-14 pb-4' />
        <div className='mt-16 grid auto-rows-fr grid-cols-3 gap-8'>
          {LIST.map((item, index) => (
            <InfoCard key={index} item={item} />
          ))}
        </div>
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
          'Truy xuất nguồn gốc góp phần nâng cao vị thế thương hiệu, tạo dựng niềm tin với người tiêu dùng. ',
      },
      { content: 'Khai thác chương trình khuyến mãi/hậu mãi hiệu quả' },
      {
        content: 'Tạo môi trường kinh doanh minh bạch',
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
