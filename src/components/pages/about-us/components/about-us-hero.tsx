import { useScreen } from '../../../../hooks/use-screen';

export function AboutUsHero() {
  const isLg = useScreen('lg');
  return (
    <div className='main-container pb-8 lg:p-16 lg:pb-24'>
      <div className='flex flex-col justify-between gap-3 lg:flex-row lg:gap-12'>
        <div
          data-aos='fade-up'
          data-aos-delay={100}
          className='ml-auto mr-auto w-auto text-center lg:mr-16 lg:mt-12 lg:text-left xl:ml-0 xl:mr-14'
        >
          {isLg ? (
            <div className=' text-[48px] font-semibold !leading-[1.3] lg:text-5xl'>
              Giới thiệu
            </div>
          ) : (
            <div className=' text-[48px] font-semibold leading-[1.25] lg:text-5xl'>
              Giới thiệu
            </div>
          )}
          <div
            data-aos='fade-up'
            data-aos-delay={180}
            className='mt-4 text-base !leading-[1.7] lg:text-xl'
          >
            Với mong muốn cùng cộng đồng doanh nghiệp, người sản xuất, người
            tiêu dùng nâng cao hiệu năng trong việc tổ chức quản lý sản xuất,
            phân phối và tiêu thụ sản phẩm nói chung, đặc biệt là các sản phẩm
            nông nghiệp.
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay={150}
            className='mt-4 text-base !leading-[1.7] lg:mt-12 lg:text-xl'
          >
            Sau nhiều năm tìm hiểu, học hỏi, nghiên cứu và phát triển,{' '}
            <b>Công ty cổ phần Công nghệ Green Agri</b> đã xây dựng và triển
            khai các giải pháp công nghệ đến các doanh nghiệp, hợp tác xã, tổ
            hợp tác, nông hộ... nhằm số hóa các công việc trong quá trình sản
            xuất, thu hoạch, thu mua, chế biến và tiêu thụ sản phẩm thông qua 2
            nền tảng công nghệ là <b>Green Check</b> và <b>Green Agri</b>.
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay={120}
            className='mt-4 flex items-center justify-center gap-6 lg:mt-6 lg:justify-start lg:gap-8'
          >
            <img
              src='/images/logo-green-check-1.png'
              alt='logo-green-check-1'
              className='w-40 object-contain'
            />
            <img
              src='/images/logo-green-agri-1.png'
              alt='logo-green-agri-1'
              className='w-36 object-contain'
            />
          </div>
        </div>
        <img
          data-aos='fade-up'
          data-aos-delay={200}
          src='/images/about-us-hero.png'
          alt=''
          className='mt-3 shrink-0 grow-0 object-contain lg:mt-5 lg:w-1/3'
        />
      </div>
    </div>
  );
}
