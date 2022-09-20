import { useScreen } from '../../../hooks/use-screen';
import { BreadCrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { SlidePart } from '../../shared/slide-part/slide-part';
import { AboutUsHero } from './components/about-us-hero';
import { AboutUsInfo } from './components/about-us-info';
import { AboutUsSolution } from './components/about-us-solution';

export function AboutUsPage() {
  const isLg = useScreen('lg');
  return (
    <>
      <div className='main-container'>
        {!isLg && (
          <BreadCrumbs
            breadcrumbs={[
              { label: 'Trang chủ', href: `/` },
              { label: 'Về GAT' },
            ]}
            className='pt-2 pb-6'
          />
        )}
      </div>
      <AboutUsHero />
      <AboutUsInfo />
      <AboutUsSolution />
      <SlidePart title='Khách hàng Green Agri' className='bg-primary-light' />
      <SlidePart title='Đối tác CỦA gREEN aGRI' />
    </>
  );
}
