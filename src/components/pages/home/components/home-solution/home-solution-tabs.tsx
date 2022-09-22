import { useState } from 'react';
import { useScreen } from '../../../../../hooks/use-screen';
import Button from '../../../../buttons/Button';
import { OptionRow } from '../../../../shared/option-row/option-row';

export function HomeSolutionTabs() {
  const isLg = useScreen('lg');
  const [show, setShow] = useState({ index: 0, image: 'tab-3.png' });

  return (
    <div
      data-aos='fade'
      data-aos-delay='100'
      className='w-full flex-1  rounded-md  lg:w-[917px] lg:overflow-hidden lg:bg-transparent'
    >
      <div className='lg:bg-transparent'>
        <div
          className='no-scrollbar mb-3 flex flex-row items-center gap-3 overflow-hidden overflow-x-scroll bg-primary-dark'
          style={{
            WebkitMaskImage:
              !isLg && show.index + 1 < MOCK_DATA.length
                ? 'linear-gradient(270deg,transparent .5%,#fff 20%)'
                : '',
          }}
        >
          {MOCK_DATA.map((item, index) => (
            <div
              key={index}
              id={item.appName}
              className={`min-w-fit lg:min-w-none  ${
                show.index !== index ? 'border-primary-dark' : ''
              }`}
            >
              <div>
                <Button
                  onClick={() => {
                    if (!isLg) {
                      const el = document.getElementById(item.appName);
                      el?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center',
                      });
                    }
                    setShow({ index: index, image: item.image });
                  }}
                  className={` border-0 px-4 font-semibold text-black transition duration-300 ease-in-out hover:bg-none ${
                    show.index !== index
                      ? 'rounded-md bg-white hover:text-black'
                      : 'bg-primary text-white'
                  }`}
                >
                  {item.appName}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-4 lg:flex-row'>
        <div
          className=' rounded-md bg-white px-6 py-2 lg:h-[395px]  lg:py-4'
          style={{ flex: 1 }}
        >
          <div className='mb-4 text-[23px] font-bold text-black '>
            {MOCK_DATA[show.index].topic}
          </div>
          {MOCK_DATA[show.index].contens.map((content, indx) => (
            <div key={indx} className='mb-3 lg:mb-6'>
              <OptionRow
                key={indx}
                content={content}
                contentClassName='text-lg'
              />
            </div>
          ))}
        </div>
        <img
          src={`/images/${show.image}`}
          alt='image'
          className='lazyload grow-0 rounded-md object-cover lg:h-[395px] lg:w-auto lg:w-[285px] xl:w-[325px]'
        />
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    appName: 'Thương mại điện tử',
    topic: 'Hệ sinh thái GAT',
    contens: [
      'Giải pháp công nghệ tập trung tối ưu hiệu quả quản lý hệ thống kênh phân phối của doanh nghiệp.',
      'Dễ dàng quản lý và tuyển cộng tác viên, đại lý. Mở rộng mô hình kinh doanh.',
      'Tiết kiệm thời gian và chi phí quản lý. Đột phá doanh thu.',
      'Dễ dàng trong việc tính toán khoa học thu nhập cho cộng tác viên và đại lý. ',
    ],
    image: 'tab-3.png',
  },
  {
    appName: 'Truy xuất nguồn gốc',
    topic: 'Hệ sinh thái GAT',
    contens: [
      'Truy tìm lịch sử các thông tin về quy trình sản xuất, chế biến, phân phối và cho đến khi sản phẩm đến được tay người dùng.',
      'Nâng cao vị thế thương hiệu cho doanh nghiệp, tạo dựng niềm tin với người tiêu dùng. Tạo môi trường kinh doanh minh bạch.',
      'Truy xuất nguồn gốc giúp giảm thiểu gian lận và làm giả thực phẩm. ',
      'Giúp người tiêu dùng mua được các sản phẩm chất lượng với đầy đủ thông tin nguồn gốc. ',
    ],
    image: 'tab-2.png',
  },
  {
    appName: 'Nhật ký canh tác',
    topic: 'Hệ sinh thái GAT',
    contens: [
      'Cung cấp nền tảng ghi nhận lại hoạt động sản xuất của người nông dân và các mốc thời gian tương ứng với các hoạt động.',
      'Hỗ trợ thu thập dữ liệu quá trình sản xuất, số hóa và cung cấp dữ liệu cho truy xuất nguồn gốc sản phẩm nông sản.',
      'Tăng năng suất canh tác, cải thiện sản lượng và chất lượng sản phẩm đồng thời giảm chi phí các hoạt động canh tác',
      'Giúp chuẩn hóa quy trình sản xuất theo các tiêu chuẩn như VietGap, GlobalGap và Organic.',
    ],
    image: 'tab-1.png',
  },
];
