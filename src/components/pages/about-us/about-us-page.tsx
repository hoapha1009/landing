import { useScreen } from '../../../hooks/use-screen';
import { BreadCrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { SlidePart } from '../../shared/slide-part/slide-part';
import { AboutUsExpert } from './components/about-us-expert';
import { AboutUsHero } from './components/about-us-hero';
import { AboutUsInfo } from './components/about-us-info';

export function AboutUsPage() {
  const isLg = useScreen('lg');
  return (
    <>
      {!isLg && (
        <BreadCrumbs
          breadcrumbs={[{ label: 'Trang chủ', href: `/` }, { label: 'Về GAT' }]}
          className='pt-2 pb-6'
        />
      )}
      <AboutUsHero />
      <AboutUsInfo />
      <AboutUsExpert />
      {/* <AboutUsSolution /> */}
      {/* <SlidePart
        title='KHÁCH HÀNG GAT'
        className='bg-[#E7F7F0]'
        type='customer'
      />
      <SlidePart title='Đối tác GAT' /> */}
    </>
  );
}
