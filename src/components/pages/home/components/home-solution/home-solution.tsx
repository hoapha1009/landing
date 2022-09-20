import { Subtitle } from '../../../../shared/subtitle/subtitle';
import { Title } from '../../../../shared/title/title';
import { HomeSolutionTabs } from './home-solution-tabs';

export function HomeSolution() {
  return (
    <div className='main-container rounded-xl bg-primary-dark py-16 px-[74px]'>
      <div className='mb-8'>
        <Title text='giải pháp gat' className='text-white' />
        <Subtitle
          text='Miêu tả giải pháp của GAT Miêu tả giải pháp của GAT Miêu tả giải pháp của GAT'
          className='mx-auto max-w-lg !text-white'
        />
      </div>

      <div className='flex flex-row gap-x-10'>
        <HomeSolutionTabs />
        <div className='pt-16'>
          <img src='/images/home-solution.png' alt='image' />
        </div>
      </div>
    </div>
  );
}
