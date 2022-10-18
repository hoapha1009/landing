import Image from 'next/image';
import { useRouter } from 'next/router';
import { useScreen } from '../../../../../hooks/use-screen';
import Button from '../../../../buttons/Button';

export function HomeAboutUs() {
  const router = useRouter();
  const isLg = useScreen('lg');

  if (!isLg) {
    return (
      <div data-aos='fade-up' className='main-container py-8'>
        <div className='relative h-12'>
          <Image
            src='/images/logo.png'
            alt='logo'
            objectFit='contain'
            layout='fill'
          />
        </div>
        <div className='mx-auto my-6 text-center text-2xl font-bold uppercase'>
          nông nghiệp xanh - sống an lành
        </div>
        <div className='relative h-56'>
          <Image
            src='/images/home-about-us.png'
            alt='home-about-us-image'
            objectFit='contain'
            layout='fill'
            className='rounded-md'
          />
        </div>
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
      <div className='relative w-1/2 shrink-0 grow-0 lg:h-[400px] xl:h-[420px] 2xl:h-[440px]'>
        <Image
          src='/images/home-about-us.png'
          alt='home-about-us-image'
          className='rounded-md'
          objectFit='contain'
          layout='fill'
          objectPosition='left'
        />
      </div>
      <div className=''>
        <div className='relative h-20'>
          <Image
            src='/images/logo.png'
            alt='logo-image'
            objectFit='contain'
            layout='fill'
            objectPosition='left'
          />
        </div>
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
