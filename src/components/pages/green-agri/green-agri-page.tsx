import { About } from './components/about';
import { Benefit } from './components/benefit';
import { Introduce } from '../../shared/solution/introduce';
import { TargetCustomer } from './components/target-customer';
import { Form } from '../../shared/form/form';
import { SlidePart } from '../../shared/slide-part/slide-part';
import { useScreen } from '../../../hooks/use-screen';
import { BreadCrumbs } from '../../shared/breadcrumbs/breadcrumbs';

export function GreenAgriPage() {
  const isLg = useScreen('lg');

  return (
    <div className=''>
      {!isLg && (
        <BreadCrumbs
          breadcrumbs={[
            { label: 'Trang chủ', href: `/` },
            { label: 'Green Agri' },
          ]}
          className='pb-3'
        />
      )}
      <Introduce title={title} options={options} img={img} />
      <About />
      <Benefit />
      <TargetCustomer title='các đối tượng khách hàng của green agri' />
      <SlidePart title='Đối tác GAT' className='bg-[#E7F7F0]' />
      <Form />
    </div>
  );
}

const title = 'GreenAgri - Giải pháp thương mại điện tử và kênh phân phối.';
const options = [
  {
    content:
      'Số hóa dữ liệu kênh phân phối, khách hàng; hạn chế rủi ro về sự phụ thuộc kênh phân phối; chủ động sản xuất hàng hóa từ số liệu mua hàng sỉ, lẻ',
  },
  {
    content:
      'Có giải pháp công nghệ trực quan hỗ trợ trong việc vận hành, chăm sóc khách hàng và quản lý nhân viên, cộng tác viên',
  },
  {
    content:
      'Đảm bảo mua hàng chính hãng đúng kênh phân phối của doanh nghiệp với giá niêm yết',
  },
];
const img = {
  src: '/images/green-agri-banner.png',
  alt: 'green-agri-banner',
};
