import { Introduce } from '../shared/solution/introduce';

export function GreenAgriPage() {
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
    width: 800,
    height: 308,
  };

  return (
    <div className=''>
      <Introduce title={title} options={options} img={img} />
    </div>
  );
}
