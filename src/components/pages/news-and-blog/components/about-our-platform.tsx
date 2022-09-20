import Button from '../../../buttons/Button';
import { OptionRow } from '../../../shared/option-row/option-row';
import { Title } from '../../../shared/title/title';

export function AboutOurPlatform() {
  return (
    <div data-aos='fade-up' className='bg-gray-50 py-8 lg:py-24'>
      <Title text='Know more about our platform' className='' />
      <div className='mx-auto mt-6 grid auto-rows-fr gap-4 px-2.5 lg:mt-10 lg:w-2/3 lg:grid-cols-3 lg:gap-8 lg:px-0'>
        {LIST.map((item, index) => (
          <Card key={index} index={index} item={item} />
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
  options: {
    content: string;
  }[];
}

interface CardProps {
  item: Card;
  index: number;
}

function Card({ item, index }: CardProps) {
  const delay = (index * 200).toString();

  return (
    <div
      data-aos='fade-up'
      data-aos-delay={delay}
      className='rounded border border-gray-200 p-4 shadow-md lg:p-7'
    >
      <div className='mx-auto w-7/12'>
        <img src={item.img.url} alt={item.img.alt} width='100%' height='100%' />
      </div>
      <div className='mt-8 font-saira text-[23px] font-semibold leading-8'>
        {item.title}
      </div>
      <div className='mt-5 mb-8 flex flex-col gap-4'>
        {item.options.map((option, index) => (
          <OptionRow
            key={index}
            content={option.content}
            contentClassName='lg:text-lg'
          />
        ))}
      </div>
      <div className='mb-4 flex justify-center lg:mb-0'>
        <Button variant='primary' className='!px-7'>
          LEARN MORE
        </Button>
      </div>
    </div>
  );
}

const LIST = [
  {
    img: {
      url: '/images/logo-green-agri.png',
      alt: 'logo-green-agri-image',
    },
    title: 'Applications for digitization',
    options: [
      {
        content:
          'Nắm dữ liệu thị trường, khách hàng. Hạn chế rủi ro, chủ động sản xuất hàng hóa',
      },
      {
        content: 'Khai thác chương trình khuyến mãi/hậu mãi hiệu quả',
      },
      {
        content:
          'Tăng doanh thu hiệu quả qua kênh phân phối online cũng như đội ngũ',
      },
    ],
  },
  {
    img: {
      url: '/images/logo-green-farm.png',
      alt: 'logo-green-farm.png',
    },
    title: 'Applications for digitization',
    options: [
      {
        content:
          'Nắm dữ liệu thị trường, khách hàng. Hạn chế rủi ro, chủ động sản xuất hàng hóa',
      },
      {
        content: 'Khai thác chương trình khuyến mãi/hậu mãi hiệu quả',
      },
      {
        content:
          'Tăng doanh thu hiệu quả qua kênh phân phối online cũng như đội ngũ',
      },
    ],
  },
  {
    img: {
      url: '/images/logo-green-retail.png',
      alt: 'logo-green-retail.png',
    },
    title: 'Applications for digitization',
    options: [
      {
        content:
          'Nắm dữ liệu thị trường, khách hàng. Hạn chế rủi ro, chủ động sản xuất hàng hóa',
      },
      {
        content: 'Khai thác chương trình khuyến mãi/hậu mãi hiệu quả',
      },
      {
        content:
          'Tăng doanh thu hiệu quả qua kênh phân phối online cũng như đội ngũ',
      },
    ],
  },
];
