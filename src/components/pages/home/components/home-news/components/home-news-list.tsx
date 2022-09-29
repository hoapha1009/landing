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
    image: 'news-blogs-2.png',
    topic: 'Tin nông nghiệp',
    date: '28/09/2022',
    title:
      'Đồng Nai: Nông dân liên kết cùng doanh nghiệp trồng lúa hữu cơ có lợi nhiều bề',
    href: '/',
  },
  {
    image: 'news-blogs-3.png',
    topic: 'Tình hình mùa vụ',
    date: '28/09/2022',
    title:
      'Đưa công nghệ cao vào chăn nuôi, tận dụng hiệu quả chất thải, nâng cao giá trị sản phẩm',
    href: '/',
  },
  {
    image: 'news-blogs-4.png',
    topic: 'Tình hình dịch hại',
    date: '28/09/2022',
    title:
      'Đào ao dưới nuôi tôm, trên trồng thứ rau bò lan man, ra trái nằm la liệt, nông dân Kiên Giang thu lời kép',
    href: '/',
  },
];
