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
    title:
      'Đồng Nai: Nông dân liên kết cùng doanh nghiệp trồng lúa hữu cơ có lợi nhiều bề',
    href: '/',
  },
  {
    image: 'home-news-share-2.png',
    topic: 'Thông tin dịch hại',
    date: '11/8/2000',
    title:
      'Đào ao dưới nuôi tôm, trên trồng thứ rau bò lan man, ra trái nằm la liệt, nông dân Kiên',
    href: '/',
  },
  {
    image: 'home-news-share-3.png',
    topic: 'Thông tin thị trường',
    date: '11/8/2000',
    title:
      'Giá mít Thái hôm nay 27/9: Giá mít giảm thêm 3.000 đồng/kg, vì sao cây mít Thái',
    href: '/',
  },
];
