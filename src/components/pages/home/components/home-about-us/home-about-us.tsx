import { useRouter } from 'next/router';
import { useScreen } from '../../../../../hooks/use-screen';
import Button from '../../../../buttons/Button';

export function HomeAboutUs() {
  const router = useRouter();
  const isLg = useScreen('lg');

  if (!isLg) {
    return (
      <div data-aos='fade-up' className='main-container py-8'>
        <img
          src='./images/logo.png'
          alt='logo'
          className='mx-auto w-40 object-contain'
        />
        <div className='mx-auto my-6 text-center text-2xl font-bold uppercase'>
          nông nghiệp xanh - sống an lành
        </div>
        <img
          src='./images/home-about-us.png'
          alt='home-about-us-image'
          className='rounded-md object-contain'
        />
        <div className='my-6'>
          Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh
          vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp
        </div>
        <div className='flex justify-center'>
          <Button variant='primary' onClick={() => router.push('/about-us')}>
            TÌM HIỂU THÊM
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      data-aos='fade-up'
      className='main-container flex items-center gap-16 py-16'
    >
      <img
        src='./images/home-about-us.png'
        alt='home-about-us-image'
        className='w-1/2 shrink-0 grow-0 rounded-md object-contain'
      />
      <div className=''>
        <img
          src='./images/logo.png'
          alt='logo'
          className='w-40 object-contain'
        />
        <div className='mt-6 text-2xl font-bold uppercase text-primary'>
          nông nghiệp xanh - sống an lành
        </div>
        <div className='my-4 text-2xl'>
          Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh
          vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp
        </div>
        <Button variant='primary' onClick={() => router.push('/about-us')}>
          TÌM HIỂU THÊM
        </Button>
      </div>
    </div>
  );
}
