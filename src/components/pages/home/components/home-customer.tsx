import { LogoSlider } from '../../../shared/logo-slider';
import { Title } from '../../../shared/title/title';

export function HomeCustomer() {
  return (
    <div className='py-24'>
      <Title text='Khác hàng green agri' className='mb-8' />
      <div className='main-container rounded-md border bg-white p-12 shadow-md'>
        <LogoSlider />
      </div>
    </div>
  );
}
