import { useScreen } from '../../../../hooks/use-screen';

export function AboutUsHero() {
  const isLg = useScreen('lg');
  return (
    <div className='main-container pb-8 lg:p-16 lg:pb-24'>
      <div className='flex flex-col justify-between lg:flex-row'>
        <div
          data-aos='fade-up'
          data-aos-delay={100}
          className='ml-auto mr-auto w-auto max-w-[572px] text-center lg:mr-16 lg:mt-12 lg:w-[572px] lg:text-left xl:ml-0 xl:mr-14'
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
            data-aos-delay={150}
            className='mt-4 text-base font-medium  !leading-[1.5] text-[#6C6C6C] lg:text-xl'
          >
            Bắt nguồn từ thực trạng chuỗi giá trình ngành Nông nghiệp Việt Nam
            còn nhiều vấn đề hạn chế từ việc quản lý canh tác đến đầu ra sản
            phẩm.
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay={180}
            className='mt-12 text-base  font-medium !leading-[1.5] text-[#6C6C6C] lg:text-xl'
          >
            Điều này đã thôi thúc đội ngũ <b>Green Agri</b> xây dựng và phát
            triển các giải pháp công nghệ nhằm hỗ trợ các doanh nghiệp, hộ nông
            dân số hóa các quy trình sản xuất và mở rộng kênh bán hàng. Sau
            nhiều năm nghiên cứu và phát triển, Công ty cổ phần công nghệ{' '}
            <b>Green Agri</b> đã trở thành một trong những công ty tiên phong
            trong lĩnh vực ứng dụng các giải pháp công nghệ tiên tiến trong nông
            nghiệp.
          </div>
        </div>
        <img
          data-aos='fade-up'
          data-aos-delay={200}
          src='/images/about-us-hero.png'
          alt=''
          className='mt-5 object-contain lg:w-1/2'
        />
      </div>
    </div>
  );
}
