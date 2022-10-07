import Button from '../../buttons/Button';
import { useScreen } from '../../../hooks/use-screen';

interface IntroduceProps {
  name: string;
  title: string;
  img: {
    src: string;
    alt: string;
  };
}

export function Introduce({ name, img, title, ...props }: IntroduceProps) {
  const isLg = useScreen('lg');

  if (!isLg) {
    return (
      <div className='bg-primary-light py-8' data-aos='fade-up'>
        <div className='main-container'>
          <div className='mb-3 text-center font-saira text-4xl font-bold uppercase text-primary'>
            {name}
          </div>
          <div className='text-center text-2xl font-bold leading-tight'>
            {title}
          </div>
          <img
            src={img.src}
            alt={img.alt}
            className='mx-auto object-contain '
          />
          <div className='mt-8 text-center'>
            <Button
              variant='primary'
              className='!px-8 !py-3'
              onClick={() => {
                const el = document.getElementById('form');

                if (el)
                  el.scrollIntoView({ block: 'center', behavior: 'smooth' });
              }}
            >
              LIÊN HỆ NGAY
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
          <div className='mb-3 font-saira text-5xl font-bold uppercase text-primary'>
            {name}
          </div>
          <div className='text-5xl font-bold leading-tight'>{title}</div>
          <Button
            variant='primary'
            className='mt-8 !px-8 !py-3'
            onClick={() => {
              const el = document.getElementById('form');

              if (el)
                el.scrollIntoView({ block: 'center', behavior: 'smooth' });
            }}
          >
            LIÊN HỆ NGAY
          </Button>
        </div>
        <div className='ml-auto w-5/12 shrink-0 grow-0'>
          <img
            src={img.src}
            alt={img.alt}
            width='100%'
            height='100%'
            className='object-contain '
          />
        </div>
      </div>
    </div>
  );
}
