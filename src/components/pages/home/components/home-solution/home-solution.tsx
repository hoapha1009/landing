import { Subtitle } from '../../../../shared/subtitle/subtitle';
import { Title } from '../../../../shared/title/title';
import { HomeSolutionTabs } from './home-solution-tabs';

export function HomeSolution() {
  return (
    <div
      data-aos='fade-up'
      className='main-container rounded-xl bg-primary-dark px-1 pt-8 pb-3 lg:px-8 lg:pt-16 lg:pb-8 xl:px-16'
    >
      <div className='mb-8 px-3 lg:px-0'>
        <Title text='giải pháp gat' className='text-white' />
        <Subtitle
          text='Bộ giải pháp hàng đầu cho ngành nông nghiệp'
          className='mx-auto max-w-lg !text-white'
        />
      </div>

      <div className='flex flex-col gap-3 px-2 lg:flex-row lg:gap-10 lg:px-0'>
        <HomeSolutionTabs />
        {/* <div className='lg:pt-16'>
          <img
            src='/images/home-solution.png'
            alt='image'
            className='w-full lg:w-auto'
          />
        </div> */}
      </div>
    </div>
  );
}
