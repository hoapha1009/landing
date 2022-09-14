import Button from '../../buttons/Button';
import NextImage from '../../NextImage';

interface IntroduceProps {
  title: string;
  options: {
    content: string;
  }[];
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

export function Introduce({ img, title, options, ...props }: IntroduceProps) {
  return (
    <div className='py-16 bg-primary-light'>
      <div className='flex items-center gap-2 main-container'>
        <div className='flex-1'>
          <div className='text-5xl font-bold leading-snug'>{title}</div>
          <div className='flex flex-col gap-4 mt-4'>
            {options.map((option, index) => (
              <div key={index} className='flex gap-2'>
                <NextImage
                  src='/images/leaf.png'
                  alt='leaf'
                  width={22}
                  height={22}
                  className='mt-1'
                />
                <div className='flex-1 text-xl font-gray-600'>
                  {option.content}
                </div>
              </div>
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
