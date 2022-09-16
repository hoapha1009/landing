import { HomeNewsCard } from './home-news-card';

export function HomeNewList() {
  return (
    <div className='flex flex-col justify-between p-12 lg:flex-row'>
      {MOCK_DATA.map((item, index) => (
        <HomeNewsCard news={item} key={index} />
      ))}
    </div>
  );
}

const MOCK_DATA = [
  {
    image: 'home-news-share-1.png',
    topic: 'Thông tin thị trường',
    date: '11/8/2000',
    title: 'Bật mí 4 cách bán hàng trên facebook hiệu quả cho người mới',
    href: '/',
  },
  {
    image: 'home-news-share-2.png',
    topic: 'Thông tin vụ mùa',
    date: '11/8/2000',
    title: 'Bật mí 4 cách bán hàng trên facebook hiệu quả cho người mới',
    href: '/',
  },
  {
    image: 'home-news-share-3.png',
    topic: 'Thông tin thị trường',
    date: '11/8/2000',
    title: 'Bật mí 4 cách bán hàng trên facebook hiệu quả cho người mới',
    href: '/',
  },
];
