import { useScreen } from '../../../../hooks/use-screen';

export function AboutUsHero() {
  const isLg = useScreen('lg');
  return (
    <div className='main-container pb-8 lg:p-16 lg:pb-24'>
      <div className='flex flex-col justify-between lg:flex-row'>
        <div className='w-auto max-w-[300pz] text-center lg:mr-52 lg:mt-32 lg:w-[452px] lg:max-w-md lg:text-left'>
          {isLg ? (
            <div className='text-[23px] font-semibold leading-[1.25] lg:text-5xl'>
              Công nghệ xanh Sống an lành
            </div>
          ) : (
            <div className='text-[23px] font-semibold leading-[1.25] lg:text-5xl'>
              Công nghệ xanh - Sống an lành
            </div>
          )}
          <div className='mt-4 text-base font-medium leading-[1.5] text-gray-600 lg:text-xl'>
            Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh
            vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp
          </div>
        </div>
        <img src='/images/about-us-hero.png' alt='' className='mt-5 lg:w-1/2' />
      </div>
    </div>
  );
}
