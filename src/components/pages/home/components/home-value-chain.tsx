import { useScreen } from '../../../../hooks/use-screen';
import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

export function HomeValueChain() {
  const screen = useScreen();
  // console.log("isLg: ", isLg);

  if (Object.keys(screen).length <= 0) return <></>;
  return (
    <div className='main-container pt-8 lg:p-16 lg:pt-16'>
      <Title text='Chuỗi giá trị GAT' />
      <Subtitle
        text='Miêu tả giải pháp của GAT Miêu tả giải pháp của GAT Miêu tả giải pháp của GAT'
        className='mx-auto max-w-lg'
      />

      <img
        src={
          screen.lg
            ? '/images/home-string-value.png'
            : '/images/home-string-value-hor.png'
        }
        alt='home-string-value'
        className='w-full'
      />
    </div>
  );
}
