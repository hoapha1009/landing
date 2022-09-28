import { Introduce } from '../../shared/solution/introduce';
import { TargetCustomer } from './components/target-customer';
import { Form } from '../../shared/form/form';
import { SlidePart } from '../../shared/slide-part/slide-part';
import { useScreen } from '../../../hooks/use-screen';
import { BreadCrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { Solution } from './components/solution';

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
      <Introduce title={title} img={img} name='green agri' />
      <div className='pt-8'>
        {SOLUTION_LIST.map((item, index) => (
          <Solution key={index} item={item} />
        ))}
      </div>
      <TargetCustomer title='các đối tượng khách hàng của green agri' />
      <SlidePart title='Đối tác GAT' className='bg-[#E7F7F0]' />
      <Form />
    </div>
  );
}

const title = 'Giải pháp Thương mại điện tử và Quản lý kênh phân phối';
const img = {
  src: '/images/green-agri-banner.png',
  alt: 'green-agri-banner',
};
const SOLUTION_LIST = [
  {
    title: 'GIẢI PHÁP Quản lý kênh phân phối',
    subtitle:
      'Là giải pháp hỗ trợ doanh nghiệp hoạch định, tổ chức, quản lý và kiểm tra hoạt động luân chuyển sản phầm trong kênh phân phối nhằm đảm bảo quy trình vận động của hàng hóa từ sản xuất đến người tiêu dùng đúng theo mục tiêu của doanh nghiệp.',
    img: {
      url: '/images/distribution-channel-solutions.png',
      alt: 'distribution-channel-solutions',
    },
    mainFeatures: [
      {
        url: '/images/leaf-2.png',
        content: 'Nhập số lượng – bán – tồn kho',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Quản lý kho',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Theo dõi chất lượng',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Điều phối giao hàng',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Tạo đơn, xử lý đơn, bán hàng  trực tuyến, Hóa đơn bán hàng',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Đặt lịch, Hợp đồng dịch vụ',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Quản trị CTV',
      },
    ],
    benefits: [
      {
        url: '/images/leaf-2.png',
        content: 'Quản trị thông tin trên một nền tảng duy nhất',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Gia tăng năng lực canh tranh cho doanh nghiệp',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Quản trị thông tin hiệu quả, tăng doanh thu và lợi nhuận ',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Tự động hóa các quy trình Tài chính',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Hiển thị hàng tồn kho theo thời gian thực',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Tối ưu hóa Chuỗi cung ứng',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Quản lý đơn hàng theo quy trình khép kín',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Tăng hiệu quả kho hàng',
      },
    ],
  },
  {
    title: 'GIẢI PHÁP Sàn thương mại điện tử',
    subtitle:
      'Là giải pháp hỗ trợ doanh nghiệp mở rộng kênh bán hàng thông qua các nền tảng, phương tiện điện tử. Trong đó, có ứng dụng phân phối và thanh toán online',
    img: {
      url: '/images/commercial-floor-solutions.png',
      alt: 'commercial-floor-solutions',
    },
    mainFeatures: [
      {
        url: '/images/leaf-2.png',
        content: 'Quản lý bán hành',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Quản lý sản phẩm',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Quản lý kho',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Quản lý đơn hàng',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Quản giao lý giao hàng',
      },
    ],
    benefits: [
      {
        url: '/images/leaf-2.png',
        content: 'Mở rộng thị trường',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Tiết kiệm chi phí',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Tăng lợi nhuận',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Giảm lưu kho hàng hóa',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Giảm chi phí mua bán',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Bán hàng và chăm sóc khách hàng 24/7',
      },
    ],
  },
  {
    title: 'Giải pháp Loyalty Marketing',
    subtitle:
      'Là giải pháp hỗ trợ doanh nghiệp tự động hóa quá trình thông báo ưu đãi đến khách hàng, sử dụng ưu đãi và tích điểm. giúp kích thích nhu cầu mua hàng cũng như xây dựng lòng trung thành của khách hàng',
    img: {
      url: '/images/loyalty-marketing-solutions.png',
      alt: 'loyalty-marketing-solutions',
    },
    mainFeatures: [
      {
        url: '/images/leaf-2.png',
        content: 'Tạo booking',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Tạo và quản lý danh sách chương trình ưu đãi',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Tích điểm thành viên',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Đánh giá sản phẩm',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Vòng xoay may mắn và đổi thưởng',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Marketing cho thành viên mới',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Quản lý danh mục nội dung',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Quản lý thông tin khách hàng, nhóm khách hàng',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Thống kê, báo cáo và đánh giá hiệu quả chiến dịch ưu đãi',
      },
    ],
    benefits: [
      {
        url: '/images/leaf-2.png',
        content: 'Gia tăng doanh số',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Gia tăng tương tác của khách hàng cho app của doanh nghiệp',
      },
      {
        url: '/images/leaf-2.png',
        content:
          'Nâng cao sự liên kết chặt chẽ, bền vững giữa khách hàng, doanh nghiệp',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Giảm chi phí bỏ ra cho marketing',
      },
      {
        url: '/images/leaf-2.png',
        content:
          'Kích thích sự chia sẻ, quảng báo từ khách hàng cũ đến khách hàng mới',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Kích thích tái sử dụng app, tái mua hàng của khách hàng',
      },
    ],
  },
];
