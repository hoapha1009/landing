import { useState } from 'react';

export function AboutUsInfo() {
  const [showMore, setShowMore] = useState(false);

  const handleClickShowMoreButton = () => setShowMore(true);

  return (
    <div
      data-aos='fade-up'
      className='main-container rounded-lg bg-primary-dark bg-cover bg-center bg-no-repeat p-8 shadow-sm'
      style={{ backgroundImage: "url('./images/about-us.png')" }}
    >
      <div className=''>
        <img
          src='./images/logo.png.png'
          alt='logo'
          className='mx-auto w-32 object-contain lg:w-48'
        />
      </div>

      <div className='mt-20 grid gap-20 lg:grid-cols-4 lg:gap-8'>
        {MOCK_DATA.map((item, index) => (
          <AboutUseCardHorizontal
            data={item}
            key={index}
            index={index + 1}
            showMore={showMore}
            onClick={handleClickShowMoreButton}
          />
        ))}
      </div>
    </div>
  );
}

function AboutUseCardHorizontal({
  data,
  index,
  showMore,
  onClick,
}: {
  data: {
    image: string;
    content: string;
    title: string;
  };
  index: number;
  showMore: boolean;
  onClick: () => void;
}) {
  const delay = (index * 120).toString();

  return (
    <div
      data-aos='fade-up'
      data-aos-delay={delay}
      className='flex flex-col gap-2 rounded-md bg-white shadow-sm lg:gap-4'
    >
      <div className='mx-auto -mt-[55px] flex h-32 w-24 flex-row items-center justify-center rounded-full border-2 border-primary bg-white shadow-md'>
        <img src={data.image} alt='image' className='object-contain' />
      </div>

      <div className='flex h-full flex-col px-4 pt-2 pb-0'>
        <div>
          <div className='mb-3 text-center font-saira text-[23px] font-semibold uppercase'>
            {data.title}
          </div>
          <div className={`min-h-24 ${!showMore && 'lg:text-ellipsis-4'}`}>
            {data.content}
          </div>
        </div>
        {!showMore && (
          <div
            className='hidden cursor-pointer text-primary lg:block'
            onClick={() => onClick?.()}
          >
            Xem thêm
          </div>
        )}
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    title: 'Mục tiêu',
    image: '/images/target-1.png',
    content:
      'Mang lại lợi ích cho nông dân bằng việc số hóa quy trình canh tác,truy xuất nguồn gốc và phát triển kênh bán hàng qua nền tảng công nghệ',
  },
  {
    title: 'Sứ mệnh',
    image: '/images/target-3.png',
    content: `Đối với khách hàng: Xây dựng nền tảng và giải pháp công nghệ phù hợp, tối ưu với dịch vụ tư vấn và hỗ trợ vận hành hiệu quả, kịp thời. Đối với nhà đầu tư: Luôn đảm bảo minh bạch và hiệu quả. Đối với nhân viên: Luôn đổi mới, sáng tạo để tạo ra môi trường làm việc năng động với hiệu năng cao nhất`,
  },
  {
    title: 'Tầm nhìn',
    image: '/images/target-2.png',
    content:
      'Green Agri trở thành đơn vị xây dựng và cung cấp giải pháp công nghệ hàng đầu cho ngành nông nghiệp Việt Nam',
  },
  {
    title: 'Giá trị cốt lõi',
    image: '/images/target-4.png',
    content: 'Đức - Tín - Tâm - Trí - Nhân',
  },
];
