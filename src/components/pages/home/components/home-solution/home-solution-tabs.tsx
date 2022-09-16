import { useState } from 'react';
import Button from '../../../../buttons/Button';
import { OptionRow } from '../../../../shared/option-row/option-row';

export function HomeSolutionTabs() {
  const [show, setShow] = useState(0);
  return (
    <div className='w-[917px] flex-1 overflow-hidden rounded-md bg-transparent'>
      <div className='flex flex-row items-center bg-primary-dark'>
        {MOCK_DATA.map((item, index) => (
          <div
            key={index}
            className={`rounded-t-md border-[12px]  ${
              show !== index ? 'border-primary-dark' : 'border-white'
            }`}
          >
            <div
              className={`bg-white   ${show !== index ? 'rounded-md' : ''} `}
            >
              <Button
                onClick={() => setShow(index)}
                className={` border-0 px-8 transition duration-300 ease-in-out hover:bg-none ${
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
        className={`h-full bg-white px-6 ${
          show === 0 ? 'rounded-tr-md' : 'rounded-t-md'
        }`}
      >
        <div className='mb-4 pt-6 text-lg font-semibold'>
          {MOCK_DATA[show].topic}
        </div>
        {MOCK_DATA[show].contens.map((content, indx) => (
          <div key={indx} className='mb-8 last:mb-0'>
            {/* <li className='list-type-none mr-3 flex flex-row items-start text-lg'>
              <img src='/images/leaf.png' alt='leaf' className='mr-4 w-5' />
              <span>{content}</span>
            </li> */}
            <OptionRow key={indx} content={content} />
          </div>
        ))}
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    appName: 'App Nhân Viên',
    topic: 'Hệ sinh thái GAT',
    contens: [
      'Là nơi để khách hàng và doanh nghiệp tương tác với nhau mà không phải thông qua một nền tảng thứ 3 nào khác.',
      'App được đặt tên theo Brandname của doanh nghiệp, tạo sự khác biệt với các thương hiệu đối thủ khác.',
      'Khách hàng có thể quản lý được lịch sử mua hàng, điểm tích luỹ, được cập nhập các chương trình khuyến mãi, thông báo của doanh nghiệp...',
      'Nhận feedback từ khách hàng một cách nhanh chóng, hạn chế tạo ra bad review khó khắc phục như trước đây.',
    ],
  },
  {
    appName: 'App Quản lý',
    topic: 'Hệ sinh thái GAT',
    contens: [
      'Là nơi để khách hàng và doanh nghiệp tương tác với nhau mà không phải thông qua một nền tảng thứ 3 nào khác.',
      'App được đặt tên theo Brandname của doanh nghiệp, tạo sự khác biệt với các thương hiệu đối thủ khác.',
    ],
  },
  {
    appName: 'App khách hàng',
    topic: 'Hệ sinh thái GAT',
    contens: [
      'Là nơi để khách hàng và doanh nghiệp tương tác với nhau mà không phải thông qua một nền tảng thứ 3 nào khác.',
      'App được đặt tên theo Brandname của doanh nghiệp, tạo sự khác biệt với các thương hiệu đối thủ khác.',
      'Khách hàng có thể quản lý được lịch sử mua hàng, điểm tích luỹ, được cập nhập các chương trình khuyến mãi, thông báo của doanh nghiệp...',
      'Nhận feedback từ khách hàng một cách nhanh chóng, hạn chế tạo ra bad review khó khắc phục như trước đây.',
    ],
  },
];
