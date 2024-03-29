import { LogoSlider } from '../../../shared/logo-slider';
import { Title } from '../../../shared/title/title';

export function HomePartner() {
  return (
    <div className='bg-primary-light py-24'>
      <Title text='Đối tác của green agri' className='mb-8' />
      <div className='main-container rounded-md border bg-white p-12 shadow-md'>
        <LogoSlider />
      </div>
    </div>
  );
}
