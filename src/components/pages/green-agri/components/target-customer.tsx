import { Card } from '../../../shared/card/card';

export function TargetCustomer() {
  return (
    <div className='pb-24' data-aos='fade-up'>
      <div className='mb-10 text-center text-3xl font-bold uppercase'>
        các đối tượng khách hàng <br /> của green agri
      </div>
      <div className='mx-auto grid w-1/2 auto-rows-fr grid-cols-4 gap-8'>
        {LIST.map((item, index) => (
          <Card
            index={index + 1}
            key={index}
            item={item}
            className='gap-6 bg-primary-dark p-8 text-white'
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
