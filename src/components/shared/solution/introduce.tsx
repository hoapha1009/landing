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
    <div className='py-16 bg-primary-light'>
      <div className='flex items-center gap-2 main-container'>
        <div className='flex-1'>
          <div className='text-5xl font-bold leading-tight'>{title}</div>
          <div className='flex flex-col gap-4 mt-4'>
            {options.map((option, index) => (
              <OptionRow
                key={index}
                content={option.content}
                className='text-xl'
              />
            ))}
          </div>
          <Button variant='primary' className='mt-8'>
            SỬ DỤNG NGAY
          </Button>
        </div>
        <div className='w-5/12 ml-auto shrink-0 grow-0'>
          <img
            src={img.src}
            alt={img.alt}
            width='90%'
            height='90%'
            className='ml-auto'
          />
        </div>
      </div>
    </div>
  );
}
