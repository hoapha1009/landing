import { LogoSlider } from '../logo-slider';
import { Title } from '../title/title';

interface SlidePartProps {
  className?: string;
  title: string;
}

export function SlidePart({ title = '', className = '' }: SlidePartProps) {
  return (
    <div className={`py-24 ${className}`} data-aos='fade-up'>
      <div className='main-container'>
        <Title text={title} />
        <div className='mt-8 rounded-md border border-gray-200 bg-white p-12 shadow-md'>
          <LogoSlider />
        </div>
      </div>
    </div>
  );
}
