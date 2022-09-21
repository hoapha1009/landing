import { Swiper, SwiperSlide } from 'swiper/react';
import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

export function FarmingDiarySolution() {
  return (
    <div
      data-aos='fade-up'
      className='main-container py-8 text-center lg:py-24'
    >
      <Title text='GIẢI PHÁP NHẬT KÝ CANH TÁC' />
      <Subtitle
        className='mx-auto w-full lg:w-3/4'
        text='Là giải pháp cung cấp nền tảng ghi nhận lại hoạt động sản xuất của người nông dân và các mốc thời gian tương ứng với các hoạt động đó. Nhật ký sẽ tập hợp các thông tin về quá trình tạo ra sản phẩm, hình thành nên một hồ sơ sản phẩm'
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        grabCursor
        className='mx-auto w-full pb-10 lg:w-2/3'
        loop={true}
        freeMode={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          bulletActiveClass: 'bg-primary',
          clickable: true,

          bulletClass:
            'inline-block w-3 h-3 bg-gray-400 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-primary transform translate-y-3',
        }}
      >
        {IMAGE_LIST.map((item, index) => (
          <SwiperSlide key={index} className=''>
            <img
              src={`/images/${item.url}`}
              alt={item.url}
              height='100%'
              className='mx-auto rounded-lg object-contain'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Title text='lợi ích của nhật ký canh tác' className='mt-8 lg:mt-14' />
      <div className='mt-4 grid w-full gap-4 lg:mt-8 lg:auto-rows-fr lg:grid-cols-3 lg:gap-8'>
        {LIST.map((item, index) => (
          <Card key={index} item={item} index={index + 1} />
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
  index: number;
}

export function Card({ item, index, ...props }: CardProps) {
  const delay = (index * 200).toString();

  return (
    <div
      data-aos='fade-up'
      data-aos-delay={delay}
      className='rounded-md border border-gray-50 bg-gray-50 p-4 shadow lg:p-6'
    >
      <div className='flex items-center gap-4'>
        <img src={item.img.url} alt={item.img.alt} width={47} height={47} />
        <div className='font-saira text-xl font-semibold lg:text-2xl'>
          {item.title}
        </div>
      </div>
      <div className='mt-2 text-left lg:text-xl'>{item.content}</div>
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

const IMAGE_LIST = [
  {
    url: 'solution-diary-1.png',
    alt: 'solution-diary-1',
  },
  {
    url: 'solution-diary-2.png',
    alt: 'solution-diary-2',
  },
  {
    url: 'solution-diary-3.png',
    alt: 'solution-diary-3',
  },
  {
    url: 'solution-diary-4.png',
    alt: 'solution-diary-4',
  },
];
