import { SlidePart } from '../../shared/slide-part/slide-part';
import { HomeBanner } from './components/home-banner';
import { HomeGroupCard } from './components/home-group-card';
import { HomeNews } from './components/home-news/home-news';
import { HomeSolution } from './components/home-solution/home-solution';
import { HomeValueChain } from './components/home-value-chain';

export function HomePage() {
  return (
    <>
      <HomeBanner />

      <HomeGroupCard text='Ưu điểm GAT' />
      <HomeSolution />

      <HomeValueChain />
      <HomeGroupCard text='Giá trị cộng đồng' />

      <SlidePart title='Đối tác CỦA gREEN aGRI' className='bg-primary-light' />
      <SlidePart title='Khách hàng Green Agri' />
      {/* <HomePartner />
      <HomeCustomer /> */}
      <HomeNews />
    </>
  );
}
