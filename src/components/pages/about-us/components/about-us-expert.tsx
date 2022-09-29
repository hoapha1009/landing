import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

export function AboutUsExpert() {
  return (
    <div
      data-aos='fade-up'
      className='main-container mx-auto py-8 lg:w-11/12 lg:py-16 lg:px-16'
    >
      <Title text='Đội ngũ lãnh đạo' />
      <Subtitle
        text='Với đội ngũ là những chuyên gia đầu ngành và giàu kinh nghiệm trong lĩnh vực nông nghiệp và công nghệ thông tin.'
        className='mx-auto mt-4 mb-10'
      />
      <div className='mb-4 flex flex-col justify-center gap-6 lg:mb-8 lg:flex-row lg:gap-8'>
        {MOCK_DATA_1.map((item, index) => (
          <ExpertCard key={index} expert={item} delay={index} />
        ))}
      </div>
      <div className='flex flex-col justify-center gap-6 lg:flex-row lg:gap-8'>
        {MOCK_DATA_2.map((item, index) => (
          <ExpertCard key={index} expert={item} delay={index} />
        ))}
      </div>
    </div>
  );
}

function ExpertCard({ expert, delay }) {
  return (
    <div
      className='rounded-md border-2 bg-white p-[14px] text-center shadow-md'
      data-aos='fade-up'
      data-aos-delay={(delay + 1) * 50}
    >
      <img src={expert.url} alt='avatar' className='rounded-md' />

      <div className='mt-4 font-saira text-[20px] font-semibold uppercase'>
        {expert.name}
      </div>
      <div className='font-primary-list relative mt-[3px] text-base text-primary'>
        {expert.position}
      </div>
    </div>
  );
}

const MOCK_DATA_1 = [
  {
    url: '/images/expert-6.png',
    name: 'Bùi văn thắng',
    position: 'Chủ tịch Hội đồng Quản trị',
  },
  {
    url: '/images/expert-1.png',
    name: 'Phạm Thanh Thọ',
    position: 'Phó Chủ tịch Hội đồng Quản trị',
  },
];

const MOCK_DATA_2 = [
  {
    url: '/images/expert-2.png',
    name: 'Nguyễn văn thanh bình',
    position: 'Tổng giám đốc',
  },
  {
    url: '/images/expert-3.png',
    name: 'Minh đức Uy',
    position: 'Phó Tổng giám đốc',
  },
  {
    url: '/images/expert-5.png',
    name: 'Nguyễn Đức Huy',
    position: 'Giám đốc Sản phẩm',
  },
];
