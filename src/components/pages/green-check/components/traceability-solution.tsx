import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';
import { Benefit } from './benefit';

export function TraceabilitySolution() {
  return (
    <div className='bg-primary-light py-16'>
      <div className='main-container'>
        <Title text='giải pháp truy xuất nguồn gốc' />
        <Subtitle
          text={`Là giải pháp cho phép người tiêu
dùng cũng như các bên liên quan truy tìm lịch sử các thông tin về quy trình sản xuất, chế biến, phân phối và cho đến khi sản phẩm đến được tay người
dùng`}
        />
        <div className='w-full pr-4'>
          <img
            src='/images/solution-origin.png'
            alt='solution-origin-image'
            className='w-full'
          />
        </div>
        <Benefit />
      </div>
    </div>
  );
}