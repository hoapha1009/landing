import { useScreen } from '../../../hooks/use-screen';
import { BreadCrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { Form } from '../../shared/form/form';
import { SlidePart } from '../../shared/slide-part/slide-part';
import { Introduce } from '../../shared/solution/introduce';
import { FarmingDiarySolution } from './components/farming-diary-solution';
import { TraceabilitySolution } from './components/traceability-solution';

export function GreenCheckPage() {
  const title =
    'Green Check - Giải pháp Nhật ký canh tác và truy xuất nguồn gốc';
  const options = [
    {
      content: 'Quản lý các mã Code để truy xuất nguồn gốc',
    },
    {
      content:
        'Nền tảng Green Check cung cấp hai giải pháp bao gồm: Nhật ký canh tác và Truy xuất nguồn gốc.',
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
  const isLg = useScreen('lg');

  return (
    <div className=''>
      {!isLg && (
        <BreadCrumbs
          breadcrumbs={[
            { label: 'Trang chủ', href: `/` },
            { label: 'Green Check' },
          ]}
          className='pb-3'
        />
      )}
      <Introduce title={title} options={options} img={img} />
      <FarmingDiarySolution />
      <TraceabilitySolution />
      <SlidePart title='Đối tác GAT' className='bg-[#E7F7F0]' />
      <Form />
    </div>
  );
}
