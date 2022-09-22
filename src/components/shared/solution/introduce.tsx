import { OptionRow } from '../option-row/option-row';
import Button from '../../buttons/Button';
import { useScreen } from '../../../hooks/use-screen';

interface IntroduceProps {
  title: string;
  options: {
    content: string;
  }[];
  img: {
    src: string;
    alt: string;
  };
}

export function Introduce({ img, title, options, ...props }: IntroduceProps) {
  const isLg = useScreen('lg');

  if (!isLg) {
    return (
      <div className='bg-primary-light py-8' data-aos='fade-up'>
        <div className='main-container'>
          <div className='text-center text-2xl font-bold leading-tight'>
            {title}
          </div>
          <img
            src={img.src}
            alt={img.alt}
            className='lazyload mx-auto object-contain'
          />
          <div className='mt-6 flex flex-col gap-4'>
            {options.map((option, index) => (
              <OptionRow key={index} content={option.content} />
            ))}
          </div>
          <div className='mt-8 text-center'>
            <Button variant='primary' className='!px-8 !py-3'>
              SỬ DỤNG NGAY
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-primary-light py-24' data-aos='fade-up'>
      <div className='main-container flex items-center gap-2'>
        <div className='flex-1'>
          <div className='text-5xl font-bold leading-tight'>{title}</div>
          <div className='mt-4 flex flex-col gap-4'>
            {options.map((option, index) => (
              <OptionRow
                key={index}
                content={option.content}
                contentClassName='text-xl leading-8'
              />
            ))}
          </div>
          <Button variant='primary' className='mt-8 !px-8 !py-3'>
            SỬ DỤNG NGAY
          </Button>
        </div>
        <div className='ml-auto w-5/12 shrink-0 grow-0'>
          <img
            src={img.src}
            alt={img.alt}
            width='100%'
            height='100%'
            className='lazyload object-contain'
          />
        </div>
      </div>
    </div>
  );
}
