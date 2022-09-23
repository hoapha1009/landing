import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

export function AboutUsInfo() {
  return (
    <div
      data-aos='fade-up'
      className='main-container rounded-lg bg-primary-dark bg-cover bg-center bg-no-repeat p-3 shadow-sm lg:p-16'
      style={{ backgroundImage: "url('./images/about-us.png')" }}
    >
      <Title text='giới thiệu gat' className='mt-3 text-white lg:mt-0' />
      <Subtitle
        text='Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp
        Với đội ngũ chuyên gia trong lĩnh vực nông nghiệp và công nghệ thông tin. Chúng tôi sẽ xây dựng và đưa ra những giải pháp công nghệ để hỗ trợ các doanh nghiệp và người nông dân số hóa các qui trình, công đoạn trong sản xuất, canh tác để nâng cao hiệu năng cho sản xuất nông nghiệp trên cơ sở nền tảng công nghệ tối ưu và minh bạch'
        className='!mt-8 mb-16 !text-left text-lg !font-normal !text-white'
      />

      <div className='grid grid-cols-1 gap-10 pl-16  pr-0 pb-16 lg:grid-cols-2 lg:gap-[92px] lg:pr-16'>
        {MOCK_DATA.map((item, index) => (
          <AboutUseCardHorizontal data={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

function AboutUseCardHorizontal({
  data,
  index,
}: {
  data: { image: string; content: string; title: string };
  index: number;
}) {
  const delay = (index * 100).toString();

  return (
    <div
      data-aos='fade-up'
      data-aos-delay={delay}
      className='flex flex-col gap-2 lg:gap-4'
    >
      <div className='bg-transparent text-right font-saira text-2xl font-semibold uppercase text-white'>
        {data.title}
      </div>
      <div
        className='flex h-full min-h-28 rounded-md shadow-sm'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
      >
        <div className='-ml-16 -mt-9 flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-primary-dark bg-white lg:h-[120px] lg:w-[120px]'>
          <img src={data.image} alt='' className='' />
        </div>
        <div className='z-20 h-full w-full rounded-md p-2 text-base text-white lg:p-4 lg:text-lg'>
          {data.content}
        </div>
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    title: 'Mục tiêu',
    image: '/images/target-1.png',
    content:
      'Mang lại lợi ích cho nông dân bằng việc chuẩn hóa quy trình canh tác,truy xuất nguồn gốc và phát triển kênh bán hàng qua nền tảng công nghệ',
  },
  {
    title: 'Sứ mệnh',
    image: '/images/target-3.png',
    content:
      'Xây dựng nền tảng và giải pháp công nghệ phù hợp, tối ưu với dịch vụ tư vấn và hỗ trợ vận hành hiệu quả, kịp thời',
  },
  {
    title: 'Tầm nhìn',
    image: '/images/target-2.png',
    content:
      'Green Agri trở thành đơn vị xây dựng và cung cấp giải pháp công nghệ hàng đầu cho ngành nông nghiệp Việt Nam',
  },
  {
    title: 'Giá trị cốt lõi',
    image: '/images/target-4.png',
    content: 'Đức - Tín - Tâm - Trí - Nhân',
  },
];
