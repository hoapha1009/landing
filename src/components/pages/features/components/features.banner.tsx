import { FeaturesItem } from './features-item';

export function FeaturesBanner() {
  return (
    <div className="relative mb-32 flex  h-[725px] max-h-[725px] w-full flex-row bg-[url('/images/home-banner.png')]  bg-cover bg-no-repeat py-16">
      {/* <div className="flex flex-row wrapper-features">
        <img src='/images/features-banner.png' alt='banner'/>
        <div className="max-w-md font-semibold text-5xl ml-11 text-white leading-tight my-auto">CÁC TÍNH NĂNG TIÊU BIỂU CỦA GAT</div>
      </div> */}
      <div className='wrapper-features'>
        <FeaturesItem
          title='CÁC TÍNH NĂNG TIÊU BIỂU CỦA GAT'
          image='/images/features-banner.png'
          titleClassName='text-white text-5xl max-w-md leading-tight -ml-11'
        />
      </div>
    </div>
  );
}
