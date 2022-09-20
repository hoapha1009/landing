import { useState } from 'react';
import Button from '../../../../buttons/Button';
import { OptionRow } from '../../../../shared/option-row/option-row';

export function HomeSolutionTabs() {
  const [show, setShow] = useState(0);
  return (
    <div className='w-full flex-1 overflow-hidden rounded-md bg-transparent lg:w-[917px]'>
      <div className='flex flex-row items-center bg-primary-dark'>
        {MOCK_DATA.map((item, index) => (
          <div
            key={index}
            className={`min-w-fit rounded-t-md border-[12px] lg:min-w-none  ${
              show !== index ? 'border-primary-dark' : 'border-white'
            }`}
          >
            <div
              className={`bg-white   ${show !== index ? 'rounded-md' : ''} `}
            >
              <Button
                onClick={() => setShow(index)}
                className={` border-0 px-4  transition duration-300 ease-in-out hover:bg-none ${
                  show !== index
                    ? 'rounded-md bg-white text-gray-700 hover:text-gray-700'
                    : 'bg-primary'
                }`}
              >
                {item.appName}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`h-full bg-white px-6 py-2 lg:py-6 ${
          show === 0 ? 'rounded-tr-md' : 'rounded-t-md'
        }`}
      >
        <div className='mb-4 text-lg font-semibold '>
          {MOCK_DATA[show].topic}
        </div>
        {MOCK_DATA[show].contens.map((content, indx) => (
          <div key={indx} className='mb-3 lg:mb-6'>
            <OptionRow key={indx} content={content} />
          </div>
        ))}
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    appName: 'Thương mại điện tử',
    topic: 'Hệ sinh thái GAT',
    contens: [
      'Là nơi để khách hàng và doanh nghiệp tương tác với nhau mà không phải thônGiải pháp công nghệ tập trung tối ưu hiệu quả quản lý hệ thống kênh phân phối của doanh nghiệp.',
      'Dễ dàng quản lý và tuyển cộng tác viên, đại lý. Mở rộng mô hình kinh doanh.',
      'Tiết kiệm thời gian và chi phí quản lý. Đột phá doanh thu',
      'Dễ dàng trong việc tính toán khoa học thu nhập cho cộng tác viên và đại lý. ',
    ],
  },
  {
    appName: 'Truy xuất nguồn gốc',
    topic: 'Hệ sinh thái GAT',
    contens: [
      'Truy tìm lịch sử các thông tin về quy trình sản xuất, chế biến, phân phối và cho đến khi sản phẩm đến được tay người dùng',
      'Nâng cao vị thế thương hiệu cho doanh nghiệp, tạo dựng niềm tin với người tiêu dùng. Tạo môi trường kinh doanh minh bạch.',
      'Truy xuất nguồn gốc giúp giảm thiểu gian lận và làm giả thực phẩm. ',
      'Giúp người tiêu dùng mua được các sản phẩm chất lượng với đầy đủ thông tin nguồn gốc. ',
    ],
  },
  {
    appName: 'Nhật ký canh tác',
    topic: 'Hệ sinh thái GAT',
    contens: [
      'Là nơi để khách hàng và doanh nghiệp tCung cấp nền tảng ghi nhận lại hoạt động sản xuất của người nông dân và các mốc thời gian tương ứng với các hoạt động.',
      'Hỗ trợ thu thập dữ liệu quá trình sản xuất, số hóa và cung cấp dữ liệu cho truy xuất nguồn gốc sản phẩm nông sản.',
      'Tăng năng suất canh tác, cải thiện sản lượng và chất lượng sản phẩm đồng thời giảm chi phí các hoạt động canh tác',
      'Giúp chuẩn hóa quy trình sản xuất theo các tiêu chuẩn như VietGap, GlobalGap và Organic.',
    ],
  },
];
