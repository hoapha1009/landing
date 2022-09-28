import { useScreen } from '../../../hooks/use-screen';
import { BreadCrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { Form } from '../../shared/form/form';
import { SlidePart } from '../../shared/slide-part/slide-part';
import { Introduce } from '../../shared/solution/introduce';
import { TargetCustomer } from '../green-agri/components/target-customer';
import { FarmingDiarySolution } from './components/farming-diary-solution';
import { TraceabilitySolution } from './components/traceability-solution';

export function GreenCheckPage() {
  const title = 'Giải pháp Nhật ký canh tác và Truy xuất nguồn gốc';
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
      <Introduce title={title} img={img} name='green check' />
      <FarmingDiarySolution />
      <TraceabilitySolution />
      <TargetCustomer title='Các đối tượng khách hàng của Green Check' />
      <SlidePart title='Đối tác GAT' className='bg-[#E7F7F0]' />
      <Form />
    </div>
  );
}
