import { Subtitle } from '../../shared/subtitle/subtitle';
import { Title } from '../../shared/title/title';

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
      </div>
    </div>
  );
}
