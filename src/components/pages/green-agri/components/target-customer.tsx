import { Card } from '../../../shared/card/card';
import { Title } from '../../../shared/title/title';

export function TargetCustomer({ title }: { title: string }) {
  return (
    <div className='py-8 lg:py-24' data-aos='fade-up'>
      <Title text={title} className='mx-auto mb-10 ' />
      <div className='main-container mx-2.5 grid auto-rows-fr grid-cols-2 gap-4 lg:mx-auto lg:grid-cols-4 lg:gap-8'>
        {LIST.map((item, index) => (
          <Card
            index={index + 1}
            key={index}
            item={item}
            className='gap-6 bg-gray-50 p-4 text-gray-600 lg:p-8'
          />
        ))}
      </div>
    </div>
  );
}

const LIST = [
  {
    img: {
      url: '/images/local.png',
      alt: 'local-image',
    },
    content: 'Chính quyền địa phương',
  },
  {
    img: {
      url: '/images/enterprise.png',
      alt: 'enterprise-image',
    },
    content: 'Doanh nghiệp nông nghiệp',
  },
  {
    img: {
      url: '/images/research-unit.png',
      alt: 'research-unit-image',
    },
    content: 'Đơn vị nghiên cứu nông nghiệp',
  },
  {
    img: {
      url: '/images/third.png',
      alt: 'third-party-image',
    },
    content: 'Các bên thứ 3',
  },
];
