import { LogoSlider } from '../logo-slider';
import { Title } from '../title/title';

interface SlidePartProps {
  className?: string;
  title: string;
  type?: 'partner' | 'customer';
}

export function SlidePart({
  title = '',
  className = '',
  type = 'partner',
}: SlidePartProps) {
  return (
    <div
      className={`py-8 lg:py-24 ${className}`}
      data-aos='fade-up'
      data-aos-delay={600}
    >
      <div className='main-container'>
        <Title text={title} />
        <div className='mt-8 rounded-md border border-gray-200 bg-white p-12 shadow-md'>
          <LogoSlider type={type} />
        </div>
      </div>
    </div>
  );
}
