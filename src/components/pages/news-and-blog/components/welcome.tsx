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
      <div className='mx-auto mb-4 w-2/3 text-center text-[23px] font-bold leading-9 lg:mb-8 lg:w-full lg:text-5xl'>
        Welcome to Cropin’s Resource Section
      </div>
      <Subtitle
        className='mx-auto !mb-4 !text-left lg:w-5/6 lg:!text-center lg:leading-8'
        text='We, at Cropin, are on our way to building the world’s first ag-tech resource library based on our experiences, the projects implemented, problems solved, and trillions of farm pixel-level datasets we have collected over a decade from 52 countries.'
      />
      <Subtitle
        text='You will find case studies, whitepapers, use cases, and reports covering the entire agri-value chain housed here.'
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
      className='no-scrollbar mx-auto mt-8 mb-6 flex flex-nowrap items-center gap-3 overflow-x-scroll whitespace-nowrap rounded-md border border-gray-200 p-2 shadow-md lg:mb-12 lg:w-1/2 lg:gap-2 lg:whitespace-normal'
    >
      {TAB_LIST.map((tab, index) => (
        <div
          key={index}
          id={tab.value}
          className={`flex-1 cursor-pointer rounded-md px-4 py-3 text-center ${
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
      <div className='flex flex-col justify-between gap-5 lg:mt-12 lg:flex-row'>
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
          <div className='font-saira text-[23px] font-semibold leading-9 group-hover:text-primary'>
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
              <div className='flex flex-1 flex-col justify-between lg:gap-6'>
                <div className='flex items-center gap-2'>
                  <Chip text='Thông tin mùa vụ' />
                  <div className='text-xs lg:text-base'>08/03/2022</div>
                </div>
                <div className='text-ellipsis-2 font-saira font-medium group-hover:text-primary lg:text-[23px] lg:font-semibold lg:leading-9'>
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-aos='fade-up' className='mt-4 flex justify-center lg:mt-8'>
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
      'Uncovering the grain of truth: Remote sensing to drive pest control in rice farming',
  },
  {
    img: {
      url: '/images/news-blogs-2.png',
      alt: 'news-blogs-2-image',
    },
    title: 'Post-harvesting losses - how to minimize using technology',
  },
  {
    img: {
      url: '/images/news-blogs-3.png',
      alt: 'news-blogs-3-image',
    },
    title: 'Seed production challenges & solutions - how technology helps',
  },
  {
    img: {
      url: '/images/news-blogs-4.png',
      alt: 'news-blogs-4-image',
    },
    title: 'Faster seed certification - how technology helps',
  },
  {
    img: {
      url: '/images/news-blogs-5.png',
      alt: 'news-blogs-5-image',
    },
    title:
      'Enforcing package of practices in farming - how farm digitization helps',
  },
];

const TAB_LIST = [
  { value: 'caseStudy', label: 'Case Study' },
  { value: 'blogs', label: 'Blogs' },
  { value: 'whitePaper', label: 'White Paper' },
  { value: 'thoughtLeadership', label: 'Thought Leadership' },
  { value: 'webinar', label: 'Webinar' },
];
