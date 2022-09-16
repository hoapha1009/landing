import { useState } from 'react';
import Button from '../../../buttons/Button';
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
    <div className='main-container py-24'>
      <div className='mb-8 text-center text-5xl font-bold'>
        Welcome to Cropin’s Resource Section
      </div>
      <Subtitle
        className='mx-auto w-5/6 leading-8'
        text='We, at Cropin, are on our way to building the world’s first ag-tech resource library based on our experiences, the projects implemented, problems solved, and trillions of farm pixel-level datasets we have collected over a decade from 52 countries.'
      />
      <Subtitle
        text='You will find case studies, whitepapers, use cases, and reports covering the entire agri-value chain housed here.'
        className='!mt-0'
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
  return (
    <div className='mx-auto mt-8 mb-12 flex w-1/2 items-center gap-2 rounded-md border border-gray-200 p-2 shadow-md'>
      {TAB_LIST.map((tab, index) => (
        <div
          key={index}
          className={`flex-1 cursor-pointer whitespace-nowrap rounded-md px-4 py-3 text-center ${
            selectedTab === tab.value
              ? 'bg-primary text-white'
              : 'hover:bg-gray-200'
          }`}
          onClick={() => onSelect?.(tab.value)}
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
      <div className='mt-12 flex justify-between gap-5'>
        <div className='group flex-1 cursor-pointer'>
          <img
            src={NEWS_LIST[0].img.url}
            alt={NEWS_LIST[0].img.alt}
            className='rounded group-hover:brightness-75'
            width='100%'
            height='100%'
          />
          <div className='mt-3 text-2xl font-bold leading-9 group-hover:text-primary'>
            {NEWS_LIST[0].title}
          </div>
        </div>
        <div className='flex flex-1 flex-col gap-3'>
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
              <div className='flex-1 text-2xl font-bold leading-9 group-hover:text-primary'>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-8 flex justify-center'>
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
