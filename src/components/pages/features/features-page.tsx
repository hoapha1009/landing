import { useScreen } from '../../../hooks/use-screen';
import { BreadCrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { SlidePart } from '../../shared/slide-part/slide-part';
import { Subtitle } from '../../shared/subtitle/subtitle';
import { Title } from '../../shared/title/title';
import { FeaturesItem } from './components/features-item';
import { FeaturesOther } from './components/features-other';
import { FeaturesSlider } from './components/features-slider';
import { FeaturesBanner } from './components/features.banner';

export function FeaturesPage() {
  const isLg = useScreen('lg');
  return (
    <>
      <div>
        {!isLg && (
          <BreadCrumbs
            breadcrumbs={[
              { label: 'Trang chủ', href: `/` },
              { label: 'Tính năng' },
            ]}
            className='pt-2 pb-6'
          />
        )}
      </div>
      <FeaturesBanner />

      <div className='main-container'>
        <div data-aos='fade-up' className=''>
          <Title text='Chi tiết tính năng Ưu đãi' className='' />
          <Subtitle
            text='GAT đã đồng hành cùng hơn 500+ doanh nghiệp xây dựng App riêng mang tên thương hiệu, tạo nhóm khách hàng trung thành, giúp tăng doanh thu và hỗ trợ quá trình chăm sóc khách hàng'
            className='mx-auto mb-12 max-w-screen-lg text-gray-600'
          />
        </div>

        {isLg ? (
          MOCK_DATA_FEATURES.map((item, index) => (
            <FeaturesItem
              key={index}
              className={`${item.reverse ? 'lg:flex-row-reverse' : ''} `}
              title={item.title}
              titleClassName='!leading-[1.3] max-w-[550px]'
              subtitle={item.subtitle}
              image={item.image}
              wrapContentClassName={item.reverse ? 'mr-28' : 'ml-12'}
            />
          ))
        ) : (
          <FeaturesSlider />
        )}
      </div>

      <FeaturesOther />
      <SlidePart title='Khách hàng green argi' />
    </>
  );
}

export const MOCK_DATA_FEATURES = [
  {
    title: 'Quản lý danh sách ưu đãi',
    subtitle:
      'Khách hàng có thể quản lý mọi ưu đãi của mình một cách dễ dàng. Khi nhìn vào danh sách ưu đãi, khách hàng sẽ biết mình đang có bao nhiêu ưu đãi đã dùng, ưu đãi chưa dùng và cả hạn sử dụng của những ưu đãi đó.',
    image: '/images/features-banner.png',
    reverse: false,
  },
  {
    title: 'Quản lý ưu đãi theo thương hiệu',
    subtitle:
      'Mỗi thương hiệu sẽ có nhiều ưu đãi khác nhau. Khi tổng hợp lại nhiều thương hiệu thì sẽ có càng nhiều ưu đãi. Chính vì vậy, tính năng này giúp khách hàng quản lý ưu đãi của mình theo từng thương hiệu để dễ dàng hơn trong việc sử dụng.',
    image: '/images/features-banner-2.png',
    reverse: true,
  },
  {
    title: 'Hiển thị lịch sử sử dụng',
    subtitle:
      'Tính năng này cho phép khách hàng nắm được lịch sử sử dụng ưu đãi của mình khi cần thiết. Đồng thời, nó sẽ giúp khách hàng không bỏ sót ưu đãi nào. Ngoài ra, khi có bất kì sự cố nào về việc sử dụng ưu đãi thì chỉ cần vào lịch sử sử dụng, vấn đề của khách hàng sẽ được giải quyết dễ dàng hơn.',
    image: '/images/features-banner.png',
    reverse: false,
  },
  {
    title: 'Quản lý ưu đãi theo thương hiệu',
    subtitle:
      'Mỗi thương hiệu sẽ có nhiều ưu đãi khác nhau. Khi tổng hợp lại nhiều thương hiệu thì sẽ có càng nhiều ưu đãi. Chính vì vậy, tính năng này giúp khách hàng quản lý ưu đãi của mình theo từng thương hiệu để dễ dàng hơn trong việc sử dụng.',
    image: '/images/features-banner-2.png',
    reverse: true,
  },
];
