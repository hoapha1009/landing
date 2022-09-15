import NextImage from '../../NextImage';
import { OptionRow } from '../../shared/option-row/option-row';

export function Benefit() {
  return (
    <div className='pt-10 pb-16'>
      <div className='main-container rounded-xl bg-primary-dark p-24'>
        <div className='text-center text-3xl font-bold uppercase text-white'>
          Lợi ích của green agri
        </div>
        <div className='mt-16 grid auto-rows-fr grid-cols-3 gap-8'>
          {LIST.map((item, index) => (
            <div
              key={index}
              className='relative rounded-xl bg-white px-4 pt-20 pb-12'
            >
              <div className='text-xl font-bold'>{item.title}</div>
              <div className='mt-3 flex flex-col gap-3'>
                {item.options.map((option, index) => (
                  <OptionRow
                    key={index}
                    content={option.content}
                    className='text-lg'
                  />
                ))}
              </div>
              <div className='absolute top-0 left-1/2 h-[100px] w-[100px] -translate-x-14 -translate-y-12 transform rounded-full bg-gradient-to-r from-primary to-accent p-[3px]'>
                <div className='flex h-full items-center justify-center rounded-full bg-white text-white'>
                  <NextImage
                    src={item.img}
                    alt={item.img.split('/')[2]}
                    width={60}
                    height={60}
                    className='rounded-full'
                  />
                </div>
              </div>
              {/* <div className='flex items-center justify-center w-24 h-24 bg-white rounded-full'></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const LIST = [
  {
    img: '/images/coop.png',
    title: 'Doanh nghiệp',
    options: [
      {
        content:
          'Nắm dữ liệu thị trường, khách hàng. Hạn chế rủi ro, chủ động sản xuất hàng hóa',
      },
      { content: 'Khai thác chương trình khuyến mãi/hậu mãi hiệu quả' },
      {
        content:
          'Tăng doanh thu hiệu quả qua kênh phân phối online cũng như đội ngũ CTV',
      },
      {
        content:
          'Xóa bỏ rào cản địa lý, lợi ích nhóm. Giảm thiểu khó khăn trong tư vấn, đào tạo và vận hành',
      },
    ],
  },
  {
    img: '/images/group.png',
    title: 'Kênh phân phối',
    options: [
      {
        content:
          'Nền tảng cho việc vận hành, chăm sóc khách hàng, quản lý nhân viên và CTV',
      },
      {
        content:
          'Cập nhật thông tin, chính sách giá, chính sách tích lũy một cách nhanh chóng',
      },
      {
        content: 'Đa dạng kênh phân phối bán sỉ và lẻ',
      },
      {
        content:
          'Cân đối ngân sách kinh doanh. Áp dụng phương thức dropshipping',
      },
    ],
  },
  {
    img: '/images/user.png',
    title: 'Người dùng',
    options: [
      {
        content:
          'Đảm bảo mua hàng chính hãng đúng kênh phân phối của doanh nghiệp với giá niêm yết',
      },
      {
        content:
          'Dễ tiếp cận và tham gia chương trình ưu đãi, khuyến mãi, chăm sóc khách hàng từ doanh nghiệp',
      },
      {
        content:
          'Được tích lũy điểm và hạng thành viên khi mua hàng tại doanh nghiệp hay tại tất cả các kênh phân phối',
      },
      {
        content:
          'Có thể kiếm thêm thu nhập từ các chính sách cộng tác viên, chính sách mua sỉ của doanh nghiệp',
      },
    ],
  },
];
