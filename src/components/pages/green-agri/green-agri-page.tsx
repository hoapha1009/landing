import { About } from './components/about';
import { Benefit } from './components/benefit';
import { Introduce } from '../../shared/solution/introduce';
import { TargetCustomer } from './components/target-customer';
import { Form } from '../../shared/form/form';
import { SlidePart } from '../../shared/slide-part/slide-part';

export function GreenAgriPage() {
  return (
    <div className=''>
      <Introduce title={title} options={options} img={img} />
      <About />
      <Benefit />
      <TargetCustomer />
      <SlidePart title='đối tác green agri' className='bg-primary-light' />
      <Form />
    </div>
  );
}

const title = 'GreenAgri - Giải pháp thương mại điện tử và kênh phân phối. ';
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
