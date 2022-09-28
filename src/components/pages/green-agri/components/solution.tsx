import { OptionRow } from '../../../shared/option-row/option-row';
import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

interface Solution {
  title: string;
  subtitle: string;
  img: {
    url: string;
    alt: string;
  };
  mainFeatures: {
    url: string;
    content: string;
  }[];
  benefits: {
    url: string;
    content: string;
  }[];
}

interface SolutionProps {
  item: Solution;
  className?: string;
}

export function Solution({ item, className = '', ...props }: SolutionProps) {
  return (
    <div className={`py-4 lg:py-10 ${className}`}>
      <div className='main-container'>
        <Title text={item.title} />
        <Subtitle className='' text={item.subtitle} />
        <img
          src={item.img.url}
          alt={item.img.alt}
          className='mx-auto mt-8 mb-10 w-2/3 rounded-md object-contain'
        />
        <div className='box-content flex flex-col items-stretch overflow-hidden rounded-md border border-gray-100 shadow-lg lg:flex-row'>
          <Part
            type='mainFeatures'
            title='Tính năng chính'
            options={item.mainFeatures}
          />
          <Part
            type='benefits'
            title='Lợi ích'
            options={item.benefits}
            className='bg-primary-dark text-white'
          />
        </div>
      </div>
    </div>
  );
}

interface PartProps {
  type: 'mainFeatures' | 'benefits';
  title: string;
  options: {
    url: string;
    content: string;
  }[];
  className?: string;
}

function Part({ type, title, options, className = '', ...props }: PartProps) {
  return (
    <div className={`py-8 pl-6 lg:w-1/2 ${className}`}>
      <Title text={title} className='!text-left' />
      <div className='mt-4 flex flex-col gap-3'>
        {options.map((option, index) => (
          <OptionRow
            content={option.content}
            url={option.url}
            key={index}
            contentClassName={`text-left ${
              type === 'benefits' && '!text-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
