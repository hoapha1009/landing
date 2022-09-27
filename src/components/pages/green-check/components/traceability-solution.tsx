import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';
import { Benefit } from './benefit';

export function TraceabilitySolution() {
  return (
    <div data-aos='fade-up' className='bg-[#E7F7F0] py-8 lg:py-24'>
      <div className='main-container'>
        <Title text='giải pháp truy xuất nguồn gốc' />
        <Subtitle
          className='mx-auto !text-left lg:w-3/4 lg:!text-center'
          text='Là giải pháp cho phép người tiêu dùng và các bên liên quan trong chuỗi giá trị nông nghiệp truy xuất lịch sử các thông tin về quy trình sản xuất, chế biến, phân phối và khách hàng tiêu dùng cuối'
        />
        <div className='w-full pr-4'>
          <img
            data-aos='zoom-in'
            data-delay='50'
            data-duration='500'
            src='/images/solution-origin.png'
            alt='solution-origin-image'
            className='w-full '
          />
        </div>
        <Benefit />
      </div>
    </div>
  );
}
