import { useState } from 'react';
import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

type TabValue =
  | 'caseStudy'
  | 'blogs'
  | 'whitePaper'
  | 'thoughtLeadership'
  | 'webinar';

export function Welcome() {
  const [selectedTab, setSelectedTab] = useState<TabValue>('caseStudy');

  return (
    <div className='main-container py-24'>
      <Title text='Welcome to Cropin’s Resource Section' className='mb-6' />
      <Subtitle text='We, at Cropin, are on our way to building the world’s first ag-tech resource library based on our experiences, the projects implemented, problems solved, and trillions of farm pixel-level datasets we have collected over a decade from 52 countries.' />
      <Subtitle
        text='You will find case studies, whitepapers, use cases, and reports covering the entire agri-value chain housed here.'
        className='!mt-0'
      />
      <TabList />
    </div>
  );
}

interface TabListProps {
  selectedTab: string;
  onSelect: (value: string) => void;
}

export function TabList() {
  return (
    <div className='mt-8 mb-12 flex w-1/2 items-center gap-2 rounded-xl border border-gray-100 shadow'>
      {TAB_LIST.map((tab, index) => (
        <TabItem key={index} tab={tab} />
      ))}
    </div>
  );
}

interface Tab {
  value: string;
  label: string;
}

export function TabItem({ tab }: { tab: Tab }) {
  return (
    <div className='rounded-md px-4 py-2 hover:text-primary'>{tab.label}</div>
  );
}

const TAB_LIST = [
  { value: 'caseStudy', label: 'Case Study' },
  { value: 'blogs', label: 'Blogs' },
  { value: 'whitePaper', label: 'White Paper' },
  { value: 'thoughtLeadership', label: 'Thought Leadership' },
  { value: 'webinar', label: 'Webinar' },
];
