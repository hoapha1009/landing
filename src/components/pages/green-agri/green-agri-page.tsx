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
    <div data-aos='fade-up' className=''>
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
      <div data-aos='fade-up' className='pt-8'>
        {SOLUTION_LIST.map((item, index) => (
          <Solution
            key={index}
            item={item}
            index={index}
            className={`${index === 1 && 'bg-primary-light'}`}
          />
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
    title: 'GIẢI PHÁP Sàn thương mại điện tử',
    subtitle:
      'Là giải pháp giúp doanh nghiệp tương tác, cung cấp kịp thời cho khách hàng những thông tin về thị trường và tối ưu hóa việc bán, cung ứng các sản phẩm hàng hóa cho khách hàng thông qua nền tảng công nghệ. Ngoài ra còn giúp doanh nghiệp quản trị hiệu quả dữ liệu khách hàng để thực hiện các chương trình khuyến mãi, chăm sóc khách hàng, dịch vụ khách hàng... nhằm mở rộng và nâng cao hiệu quả bán hàng',
    img: {
      url: '/images/commercial-floor-solutions.png',
      alt: 'commercial-floor-solutions',
    },
    mainFeatures: [
      {
        url: '/images/star.png',
        content: 'Quản lý sản phẩm',
      },
      {
        url: '/images/star.png',
        content: 'Quản lý hệ thống phân phối',
      },
      {
        url: '/images/star.png',
        content: 'Quản lý kho',
      },
      {
        url: '/images/star.png',
        content: 'Quản lý quy trình xử lý đơn hàng',
      },
      {
        url: '/images/star.png',
        content: 'Quản lý giao hàng và thanh toán',
      },
      {
        url: '/images/star.png',
        content: 'Quản lý chương trình khuyến mãi và chăm sóc khách hàng',
      },
    ],
    benefits: [
      {
        url: '/images/leaf-2.png',
        content: 'Tối ưu hóa hàng tồn kho',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Tối ưu hóa chi phí bán hàng',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Mở rộng kênh phân phối và khách hàng',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Linh động triển khai chính sách bán hàng',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Triển khai, thực hiện hiệu quả các hoạt động Marketing',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Bán hàng và chăm sóc khách hàng 24/7',
      },
    ],
  },
  {
    title: 'GIẢI PHÁP Quản lý kênh phân phối',
    subtitle:
      'Là giải pháp để doanh nghiệp hoạch định, tổ chức, quản lý và kiểm tra hoạt động luân chuyển sản phẩ m trong kênh phân phối theo đúng mục tiêu, chính sách bán hàng của doanh nghiệp. Ngoài ra còn giúp doanh nghiệp mở rộng, phát triển, kết nối khách hàng cho hệ thống phân phối',
    img: {
      url: '/images/distribution-channel-solutions.png',
      alt: 'distribution-channel-solutions',
    },
    mainFeatures: [
      {
        url: '/images/star.png',
        content: 'Quản lý sản phẩm',
      },
      {
        url: '/images/star.png',
        content: 'Quản lý chính sách bán hàng',
      },
      {
        url: '/images/star.png',
        content: 'Quản lý quy trình bán và điều phối đơn hàng',
      },
      {
        url: '/images/star.png',
        content:
          'Quản lý chương trình khuyến mãi theo từng đối tượng khách hàng',
      },
      {
        url: '/images/star.png',
        content:
          'Quản lý chiết khấu thương mại cho kênh phân phối, Cộng tác viên',
      },
      {
        url: '/images/star.png',
        content: 'Quản lý tồn kho',
      },
      {
        url: '/images/star.png',
        content: 'Quản lý chính sách tích đổi điểm cho thành viên',
      },
      {
        url: '/images/star.png',
        content: 'Thống kê và báo cáo',
      },
    ],
    benefits: [
      {
        url: '/images/leaf-2.png',
        content: 'Tối ưu hóa Chuỗi cung ứng ',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Gia tăng năng lực canh tranh cho doanh nghiệp',
      },
      {
        url: '/images/leaf-2.png',
        content:
          'Quản trị hệ thống thông tin về kênh phân phối và khách hàng hiệu quả',
      },
      {
        url: '/images/leaf-2.png',
        content:
          'Theo dõi, cập nhật và quản trị kịp thời kết quả kinh doanh thông qua việc số hóa các số liệu và hoạt động kinh doanh',
      },
      {
        url: '/images/leaf-2.png',
        content:
          'Quản lý đơn hàng theo quy trình khép kín (theo đúng mục tiêu, chính sách bán hàng)',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Quản lý tồn kho hiệu quả',
      },
    ],
  },
  {
    title: 'GIẢI PHÁP CRM',
    subtitle:
      'Là giải pháp hỗ trợ doanh nghiệp tự động hóa quá trình thông báo các chính sách bán hàng ưu đãi đến khách hàng. Đồng thời tích điểm để thực hiện các chương trình hậu mãi nhằm kích thích nhu cầu mua hàng và xây dựng lòng trung thành của khách hàng',
    img: {
      url: '/images/loyalty-marketing-solutions.png',
      alt: 'loyalty-marketing-solutions',
    },
    mainFeatures: [
      {
        url: '/images/star.png',
        content: 'Tạo booking',
      },
      {
        url: '/images/star.png',
        content: 'Tạo và quản lý danh sách chương trình ưu đãi',
      },
      {
        url: '/images/star.png',
        content: 'Tích điểm thành viên',
      },
      {
        url: '/images/star.png',
        content: 'Đánh giá sản phẩm',
      },
      {
        url: '/images/star.png',
        content: 'Vòng xoay may mắn và đổi thưởng',
      },
      {
        url: '/images/star.png',
        content: 'Marketing cho thành viên mới',
      },
      {
        url: '/images/star.png',
        content: 'Quản lý danh mục nội dung',
      },
      {
        url: '/images/star.png',
        content: 'Quản lý thông tin khách hàng, nhóm khách hàng',
      },
      {
        url: '/images/star.png',
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
          'Kích thích sự chia sẻ, quảng bá từ khách hàng cũ đến khách hàng mới',
      },
      {
        url: '/images/leaf-2.png',
        content: 'Kích thích tái sử dụng app, tái mua hàng của khách hàng',
      },
    ],
  },
];
