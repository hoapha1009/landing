import { FeaturesItem } from './features-item';

export function FeaturesBanner() {
  return (
    <div
      data-aos='fade-up'
      className="relative mb-24 flex h-[476px] max-h-[476px] w-full flex-row overflow-hidden bg-[url('/images/home-banner.png')] bg-cover  bg-no-repeat lg:h-[725px] lg:max-h-[725px]"
    >
      <div className='main-container'>
        <FeaturesItem
          title='CÁC TÍNH NĂNG TIÊU BIỂU CỦA GAT'
          image='/images/features-banner.png'
          titleClassName='text-white text-5xl max-w-md  text-[23px] lg:text-left text-center !leading-[1.4] bg-gradient-to-r from-[#65AFF4] to-primary bg-clip-text text-transparent'
          className='flex h-auto flex-col-reverse'
        />
      </div>
    </div>
  );
}
