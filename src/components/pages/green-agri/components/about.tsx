import { Card } from '../../../shared/card/card';
import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';
import { Swiper, SwiperSlide } from 'swiper/react';

export function About() {
  return (
    <div
      className='main-container py-8 text-center lg:pt-24 lg:pb-6'
      data-aos='fade-up'
    >
      <Title text='Về green agri' />
      <Subtitle
        className='mx-auto !text-left lg:w-3/4 lg:!text-center'
        text='Là giải pháp thương mại điện tử và quản lý kênh phân phối cho các doanh nghiệp trong lĩnh vực nông nghiệp. Hỗ trợ nền tảng công nghệ cho doanh nghiệp kinh doanh truyền thống tiếp cận thêm kênh online hiệu quả. Ngoài ra, giúp doanh nghiệp mở rộng kênh phân phối đến các đại lý các tỉnh và mạng lưới cộng tác viên.'
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
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
              className='mx-auto rounded-lg object-contain '
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='mt-8 grid w-full auto-rows-fr grid-cols-2 gap-4 px-0 md:grid-cols-4 lg:gap-5'>
        {LIST.map((item, index) => (
          <Card
            index={index + 1}
            key={index}
            item={item}
            className='gap-5 bg-gray-50 p-4 text-lg lg:gap-8 lg:p-8'
            contentClass='text-gray-600'
          />
        ))}
      </div>
    </div>
  );
}

const LIST = [
  {
    img: {
      url: '/images/automation.png',
      alt: 'about-green-agri-1',
    },
    content:
      'Quản lý đa kênh trên một nền tảng kiểm soát hoạt động bán hàng mọi lúc mọi nơi và quản lý thông tin sản phẩm phân phối tới người dùng',
  },
  {
    img: {
      url: '/images/update.png',
      alt: 'about-green-agri-2',
    },
    content:
      'Theo dõi tình trang hàng tồn, báo cáo luân chuyển hàng hóa giữa các kênh bán hàng',
  },
  {
    img: {
      url: '/images/handle.png',
      alt: 'about-green-agri-3',
    },
    content:
      'Quản lý thu chi kiểm soát hoạt động bán hàng và linh hoạt kết nối, xây dựng các chương trình khuyến mãi cho các nhóm khách hàng khác nhau',
  },
  {
    img: {
      url: '/images/information.png',
      alt: 'about-green-agri-4',
    },
    content:
      'Hệ thống API mở kết nối ERP, Call center và các phần mềm chuyên biệt của doanh nghiệp',
  },
];

const IMAGE_LIST = [
  {
    url: 'about-greenAgri-1.png',
    alt: 'about-greenAgri-1',
  },
  {
    url: 'about-greenAgri-2.png',
    alt: 'about-greenAgri-2',
  },
  {
    url: 'about-greenAgri-3.png',
    alt: 'about-greenAgri-3',
  },
  {
    url: 'about-greenAgri-4.png',
    alt: 'about-greenAgri-4',
  },
];
