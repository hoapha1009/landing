import { useScreen } from '../../../../hooks/use-screen';

export function AboutUsHero() {
  const isLg = useScreen('lg');
  return (
    <div className='main-container pb-8 lg:p-16 lg:pb-24'>
      <div className='flex flex-col justify-between lg:flex-row'>
        <div
          data-aos='fade-up'
          data-aos-delay={100}
          className='ml-auto mr-auto w-auto max-w-[350px] text-center lg:mr-16 lg:mt-32 lg:w-[452px] lg:max-w-md lg:text-left xl:ml-0 xl:mr-52'
        >
          {isLg ? (
            <div className='font-saira text-[23px] font-semibold !leading-[1.3] lg:text-5xl'>
              Công nghệ xanh Sống an lành
            </div>
          ) : (
            <div className='font-saira text-[23px] font-semibold leading-[1.25] lg:text-5xl'>
              Công nghệ xanh - Sống an lành
            </div>
          )}
          <div
            data-aos='fade-up'
            data-aos-delay={150}
            className='mt-4 text-base font-medium  !leading-[1.5] text-gray-600 lg:text-xl'
          >
            Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh
            vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp
          </div>
        </div>
        <img
          data-aos='fade-up'
          data-aos-delay={200}
          src='/images/about-us-hero.png'
          alt=''
          className=' mt-5 object-contain lg:w-1/2'
        />
      </div>
    </div>
  );
}
