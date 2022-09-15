import { LogoSlider } from '../logo-slider';
import { Title } from '../title/title';

interface SlidePartProps {
  className?: string;
  title: string;
}

export function SlidePart({ title = '', className = '' }: SlidePartProps) {
  return (
    <div className={`py-16 ${className}`}>
      <div className='main-container'>
        <Title text={title} />
        <div className='mt-8 rounded-md border border-gray-200 pt-10 pb-10 shadow-md'>
          <LogoSlider />
        </div>
      </div>
    </div>
  );
}
