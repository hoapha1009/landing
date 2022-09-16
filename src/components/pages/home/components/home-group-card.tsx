import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';
import { Card } from '../../../shared/card/card';

export function HomeGroupCard({ text, subtitle }) {
  return (
    <div className='main-container p-20 '>
      <Title text={text} />
      <Subtitle text={subtitle} className='mx-auto max-w-lg' />
      <div className='flex flex-row justify-between '>
        {MOCK_DATA.map((item, index) => (
          <Card
            key={index}
            index={index}
            item={item}
            className='h-80 w-80 px-6 py-8 pb-16'
            contentClass='!mt-12 h-auto'
            imageClass='w-[100px]'
          />
        ))}
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    img: {
      url: '/images/leaf.png',
      alt: 'lá cây',
    },
    content: 'Location and crop agnostic AI models',
  },
  {
    img: {
      url: '/images/scan.png',
      alt: 'lá cây',
    },
    content: 'Intelligence at a crop, plot and pin code level.',
  },
  {
    img: {
      url: '/images/virut.png',
      alt: 'lá cây',
    },
    content: 'Convergence of satellite imagery and cloud ',
  },
  {
    img: {
      url: '/images/user.png',
      alt: 'lá cây',
    },
    content: 'Satellite imagery and cloud computing',
  },
];
