import { OptionRow } from '../option-row/option-row';
import Button from '../../buttons/Button';

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
            className='ml-auto'
          />
        </div>
      </div>
    </div>
  );
}
