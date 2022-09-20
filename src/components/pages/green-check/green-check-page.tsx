import { Form } from '../../shared/form/form';
import { SlidePart } from '../../shared/slide-part/slide-part';
import { Introduce } from '../../shared/solution/introduce';
import { FarmingDiarySolution } from './components/farming-diary-solution';
import { TraceabilitySolution } from './components/traceability-solution';

export function GreenCheckPage() {
  const title =
    'Green Check - Giải pháp Truy xuất nguồn gốc và Nhật ký canh tác';
  const options = [
    {
      content: 'Quản lý các mã Code để truy xuất nguồn gốc',
    },
    {
      content: 'Hỗ trợ bán hàng và triển khai chương trình khuyến mãi',
    },
    {
      content:
        'Marketing sản phẩm đến nhiều đối tượng khách hàng hơn. Có được nguồn data do khách hàng tự cung cấp',
    },
  ];
  const img = {
    src: '/images/green-check-banner.png',
    alt: 'green-check-banner',
  };

  return (
    <div className=''>
      <Introduce title={title} options={options} img={img} />
      <FarmingDiarySolution />
      <TraceabilitySolution />
      <SlidePart title='Đối tác Green Agri' className='!pb-0' />
      <Form />
    </div>
  );
}
