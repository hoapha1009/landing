import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

export function HomeValueChain() {
  return (
    <div className='main-container p-20'>
      <Title text='Chuỗi giá trị GAT' />
      <Subtitle
        text='Miêu tả giải pháp của GAT Miêu tả giải pháp của GAT Miêu tả giải pháp của GAT'
        className='mx-auto max-w-lg'
      />

      <img
        src='/images/home-string-value.png'
        alt='home-string-value'
        className='w-full'
      />
    </div>
  );
}
