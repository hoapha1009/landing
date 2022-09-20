import { FeaturesItem } from './features-item';

export function FeaturesBanner() {
  return (
    <div className="relative mb-12 flex h-[476px] max-h-[476px] w-full flex-row overflow-hidden bg-[url('/images/bg.png')] bg-cover bg-no-repeat  lg:mb-32 lg:h-[725px] lg:max-h-[725px]">
      {/* <div className="flex flex-row wrapper-features">
        <img src='/images/features-banner.png' alt='banner'/>
        <div className="max-w-md my-auto text-5xl font-semibold leading-tight text-white ml-11">CÁC TÍNH NĂNG TIÊU BIỂU CỦA GAT</div>
      </div> */}
      <div className='main-container'>
        <FeaturesItem
          title='CÁC TÍNH NĂNG TIÊU BIỂU CỦA GAT'
          image='/images/features-banner.png'
          titleClassName='text-white text-5xl max-w-md  text-[23px] lg:text-left text-center !leading-[1.4] bg-gradient-to-r from-[#65AFF4] to-primary bg-clip-text text-transparent'
          className='mt-10 flex h-auto flex-col-reverse lg:mt-0'
        />
      </div>
    </div>
  );
}
