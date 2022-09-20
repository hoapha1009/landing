import { HomeNewsCard } from './home-news-card';

export function HomeNewList() {
  return (
    <div className='grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-8'>
      {MOCK_DATA.map((item, index) => (
        <HomeNewsCard news={item} key={index} index={index} />
      ))}
    </div>
  );
}

const MOCK_DATA = [
  {
    image: 'home-news-share-1.png',
    topic: 'Thông tin mùa vụ',
    date: '11/8/2000',
    title: 'Bật mí 4 cách bán hàng trên facebook hiệu quả cho người mới',
    href: '/',
  },
  {
    image: 'home-news-share-1.png',
    topic: 'Thông tin dịch hại',
    date: '11/8/2000',
    title: 'Bật mí 4 cách bán hàng trên facebook hiệu quả cho người mới',
    href: '/',
  },
  {
    image: 'home-news-share-2.png',
    topic: 'Thông tin thị trường',
    date: '11/8/2000',
    title: 'Bật mí 4 cách bán hàng trên facebook hiệu quả cho người mới',
    href: '/',
  },
];
