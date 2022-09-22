import { useScreen } from '../../../../hooks/use-screen';
import { Title } from '../../../shared/title/title';

export function HomeValueChain() {
  const screen = useScreen();
  // console.log("isLg: ", isLg);

  if (Object.keys(screen).length <= 0) return <></>;
  return (
    <div data-aos='fade-up' className='main-container pt-8 lg:p-16 lg:pt-16'>
      <Title text='Chuỗi giá trị GAT' className='mb-10' />
      <img
        src={
          screen.lg
            ? '/images/home-string-value.png'
            : '/images/home-string-value-hor.png'
        }
        alt='home-string-value'
        className={`lazyload ${
          screen.lg ? 'w-full' : 'mx-auto w-full max-w-lg'
        }`}
      />
    </div>
  );
}
