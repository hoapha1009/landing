import { SlidePart } from '../../shared/slide-part/slide-part';
import { AboutUsHero } from './components/about-us-hero';
import { AboutUsInfo } from './components/about-us-info';
import { AboutUsSolution } from './components/about-us-solution';

export function AboutUsPage() {
  return (
    <>
      <AboutUsHero />
      <AboutUsInfo />
      <AboutUsSolution />
      <SlidePart title='Khách hàng Green Agri' className='bg-primary-light' />
      <SlidePart title='Đối tác CỦA gREEN aGRI' />
    </>
  );
}
