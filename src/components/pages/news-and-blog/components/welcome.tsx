import { useState } from 'react';
import { useScreen } from '../../../../hooks/use-screen';
import Button from '../../../buttons/Button';
import { Chip } from '../../../shared/chip/chip';
import { Subtitle } from '../../../shared/subtitle/subtitle';

type TabValue =
  | 'caseStudy'
  | 'blogs'
  | 'whitePaper'
  | 'thoughtLeadership'
  | 'webinar';

export function Welcome() {
  const [selectedTab, setSelectedTab] = useState<TabValue>('caseStudy');

  const handleSelect = (val: TabValue) => setSelectedTab(val);

  return (
    <div data-aos='fade-up' className='main-container py-8 lg:py-24'>
      <div className='mx-auto mb-4 w-2/3 text-center text-[23px] font-bold leading-8 lg:mb-8 lg:w-full lg:text-5xl'>
        Tin tức nông nghiệp mới nhất từ GAT
      </div>
      <Subtitle
        className='mx-auto !mb-4 !text-left lg:w-5/6 lg:!text-center lg:leading-8'
        text='Chúng tôi, tại GAT, đang trên đường xây dựng thư viện tài nguyên công nghệ nông nghiệp đầu tiên trên thế giới dựa trên kinh nghiệm của chúng tôi, các dự án đã thực hiện, các vấn đề đã giải quyết và hàng nghìn tỷ bộ dữ liệu cấp pixel trong ngành nông nghiệp mà chúng tôi đã thu thập trong suốt thời gian qua.'
      />
      <Subtitle
        text='Bạn sẽ tìm thấy các tin tức, nghiên cứu điển hình, các trường hợp sử dụng và báo cáo liên quan đến chuỗi giá trị nông nghiệp tại đây..'
        className='!mt-0 !text-left lg:!text-center'
      />
      <TabList selectedTab={selectedTab} onSelect={handleSelect} />
      <NewsAndBlogList selectedTab={selectedTab} />
    </div>
  );
}

interface TabListProps {
  selectedTab: TabValue;
  onSelect: (value: string) => void;
}

export function TabList({ selectedTab, onSelect }: TabListProps) {
  const isLg = useScreen('lg');

  return (
    <div
      data-aos='fade-up'
      className='no-scrollbar mx-auto mt-8 mb-6 flex flex-nowrap items-center gap-3 overflow-x-scroll whitespace-nowrap rounded-md border border-gray-200 p-2 shadow-md lg:mb-12 lg:w-[1171px] lg:gap-2 lg:whitespace-normal'
    >
      {TAB_LIST.map((tab, index) => (
        <div
          key={index}
          id={tab.value}
          className={`flex-1 cursor-pointer whitespace-nowrap rounded-md px-4 py-3 text-center ${
            selectedTab === tab.value
              ? 'bg-primary text-white'
              : 'hover:bg-gray-200'
          }`}
          onClick={() => {
            onSelect?.(tab.value);

            if (!isLg) {
              const el = document.getElementById(tab.value);
              el?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
              });
            }
          }}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}

interface NewsAndBlogListProps {
  selectedTab: TabValue;
}

function NewsAndBlogList({ selectedTab }: NewsAndBlogListProps) {
  return (
    <>
      <div className='flex flex-col justify-between gap-8 lg:mt-12 lg:flex-row lg:gap-5'>
        <div data-aos='fade-right' className='group flex-1 cursor-pointer'>
          <img
            src={NEWS_LIST[0].img.url}
            alt={NEWS_LIST[0].img.alt}
            className='rounded group-hover:brightness-75'
            width='100%'
            height='100%'
          />
          <div className='my-3 flex items-center gap-2'>
            <Chip text='Thông tin mùa vụ' />
            <div className='text-xs lg:text-base'>08/03/2022</div>
          </div>
          <div className='font-saira text-[23px] font-semibold leading-8 group-hover:text-primary'>
            {NEWS_LIST[0].title}
          </div>
        </div>
        <div data-aos='fade-left' className='flex flex-1 flex-col gap-3'>
          {NEWS_LIST.slice(1).map((item, index) => (
            <div key={index} className='group flex cursor-pointer gap-3'>
              <div className='w-1/3 shrink-0 grow-0'>
                <img
                  src={item.img.url}
                  alt={item.img.alt}
                  width='100%'
                  height='100%'
                  className='rounded group-hover:brightness-75'
                />
              </div>
              <div className='flex flex-1 flex-col md:gap-2 xl:gap-6'>
                <div className='flex items-center gap-2'>
                  <Chip text='Thông tin mùa vụ' />
                  <div className='text-xs lg:text-base'>08/03/2022</div>
                </div>
                <div className='text-ellipsis-2 font-saira font-medium group-hover:text-primary lg:text-[23px] lg:font-semibold lg:leading-8'>
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-4 flex justify-center lg:mt-8'>
        <Button variant='primary'>XEM TẤT CẢ TIN TỨC</Button>
      </div>
    </>
  );
}

const NEWS_LIST = [
  {
    img: {
      url: '/images/news-blogs-1.png',
      alt: 'news-blogs-1-image',
    },
    title:
      'Hội Nông dân Đà Nẵng tích cực hỗ trợ nông dân thu hoạch rau màu "chạy" bão Noru',
  },
  {
    img: {
      url: '/images/news-blogs-2.png',
      alt: 'news-blogs-2-image',
    },
    title:
      'Đồng Nai: Nông dân liên kết cùng doanh nghiệp trồng lúa hữu cơ có lợi nhiều bề',
  },
  {
    img: {
      url: '/images/news-blogs-3.png',
      alt: 'news-blogs-3-image',
    },
    title:
      'Đưa công nghệ cao vào chăn nuôi, tận dụng hiệu quả chất thải, nâng cao giá trị sản phẩm',
  },
  {
    img: {
      url: '/images/news-blogs-4.png',
      alt: 'news-blogs-4-image',
    },
    title:
      'Đào ao dưới nuôi tôm, trên trồng thứ rau bò lan man, ra trái nằm la liệt, nông dân Kiên...',
  },
  {
    img: {
      url: '/images/news-blogs-5.png',
      alt: 'news-blogs-5-image',
    },
    title:
      'Giá mít Thái hôm nay 27/9: Giá mít giảm thêm 3.000 đồng/kg, vì sao cây mít Thái...',
  },
];

const TAB_LIST = [
  { value: 'Nông nghiệp trong nước', label: 'Nông nghiệp trong nước ' },
  { value: 'Blogs', label: 'Blogs' },
  { value: 'Thời tiết nông vụ', label: 'Thời tiết nông vụ' },
  { value: 'Dự báo sâu bệnh', label: 'Dự báo sâu bệnh' },
  { value: 'Sự kiện nông nghiệp', label: 'Sự kiện nông nghiệp' },
  { value: 'Thị trường', label: 'Thị trường' },
  { value: 'Nông dân cảnh giác', label: 'Nông dân cảnh giác' },
];
