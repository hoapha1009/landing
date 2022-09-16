import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

export function AboutUsInfo() {
  return (
    <div className='main-container rounded-lg bg-primary-dark p-20 shadow-sm'>
      <Title text='giới thiệu về gat' className='text-white' />
      <Subtitle
        text='Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp
        Với đội ngũ chuyên gia trong lĩnh vực nông nghiệp và công nghệ thông tin. Chúng tôi sẽ xây dựng và đưa ra những giải pháp công nghệ để hỗ trợ các doanh nghiệp và người nông dân số hóa các qui trình, công đoạn trong sản xuất, canh tác để nâng cao hiệu năng cho sản xuất nông nghiệp trên cơ sở nền tảng công nghệ tối ưu và minh bạch'
        className='!mt-8 mb-16 !text-left text-lg font-normal text-white'
      />

      <div className='grid grid-cols-2 gap-x-52 gap-y-16'>
        <AboutUseCardHorizontal />
        <AboutUseCardHorizontal />
        <AboutUseCardHorizontal />
        <AboutUseCardHorizontal />
      </div>
    </div>
  );
}

function AboutUseCardHorizontal() {
  return (
    <div className=''>
      <div className='mb-4 text-right font-saira text-2xl font-semibold uppercase text-white'>
        Mục tiêu
      </div>
      <div
        className='relative rounded-md shadow-sm'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
      >
        <div className='absolute flex h-[125px] w-[125px] -translate-x-16 -translate-y-6 transform items-center justify-center rounded-full border-4 border-primary-dark bg-white'>
          <img src='/images/leaf.png' alt='' />
        </div>
        <div className='ml-auto max-w-[480px] p-7 pl-0 text-lg text-white'>
          Mang lại lợi ích cho nông dân bằng việc chuẩn hóa quy trình canh tác,
          truy xuất nguồn gốc và phát triển kênh bán hàng qua nền tảng công nghệ
        </div>
      </div>
    </div>
  );
}
