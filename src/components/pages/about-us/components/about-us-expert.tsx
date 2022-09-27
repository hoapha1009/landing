import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

export function AboutUsExpert() {
  return (
    <div
      data-aos='fade-up'
      className='main-container mx-auto py-16 lg:w-[792px] lg:px-16'
    >
      <Title text='Đội ngũ chuyên gia' />
      <Subtitle
        text='Với đội ngũ là những chuyên gia đầu ngành và giàu kinh nghiệm trong lĩnh vực nông nghiệp và công nghệ thông tin.'
        className='mx-auto mt-4 mb-10 '
      />
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
        {MOCK_DATA.map((item, index) => (
          <ExpertCard key={index} expert={item} delay={index} />
        ))}
      </div>
    </div>
  );
}

function ExpertCard({ expert, delay }) {
  return (
    <div
      className='rounded-md border-2 bg-white p-[14px] shadow-md'
      data-aos='fade-up'
      data-aos-delay={(delay + 1) * 50}
    >
      <img src={expert.url} alt='avatar' className='rounded-md' />

      <div className='mt-3 font-saira text-[20px] font-semibold uppercase'>
        {expert.name}
      </div>
      <div className="font-primary-list relative mt-[3px]  pb-1 text-base text-primary before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-[45%] before:bg-primary before:content-['']">
        {expert.position}
      </div>
      <div className='mt-[3px] text-[#6C6C6C]'>{expert.desc}</div>
    </div>
  );
}

const MOCK_DATA = [
  {
    url: '/images/expert-1.png',
    name: 'Phạm Thanh Thọ',
    position: 'Phó Chủ tịch Hội đồng Quản trị',
    desc: 'Hơn 25 năm kinh nghiệm trong lĩnh vực nông nghiệp.',
  },
  {
    url: '/images/expert-2.png',
    name: 'Nguyễn văn thanh bình',
    position: 'Tổng giám đốc',
    desc: 'Hơn 25 năm kinh nghiệm trong lĩnh vực nông nghiệp.',
  },
  {
    url: '/images/expert-3.png',
    name: 'Minh đức Uy',
    position: 'Phó Giám đốc Công nghệ',
    desc: 'Hơn 25 năm kinh nghiệm trong lĩnh vực nông nghiệp.',
  },
  {
    url: '/images/expert-4.png',
    name: 'Diệp mỹ dương',
    position: 'Giám đốc Công nghệ',
    desc: 'Hơn 25 năm kinh nghiệm trong lĩnh vực nông nghiệp.',
  },
];
