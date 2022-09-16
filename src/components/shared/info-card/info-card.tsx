import NextImage from '../../NextImage';
import { OptionRow } from '../option-row/option-row';

interface Option {
  content: string;
}

interface Card {
  img: string;
  title: string;
  options: Option[];
}

interface InfoCardProps {
  item: Card;
}

export function InfoCard({ item }: InfoCardProps) {
  return (
    <div className='relative rounded-xl bg-white px-4 pt-20 pb-12'>
      <div className='text-2xl font-bold'>{item.title}</div>
      <div className='mt-3 flex flex-col gap-3'>
        {item.options.map((option, index) => (
          <OptionRow key={index} content={option.content} className='text-lg' />
        ))}
      </div>
      <div className='absolute top-0 left-1/2 h-[100px] w-[100px] -translate-x-14 -translate-y-12 transform rounded-full bg-gradient-to-r from-primary to-accent p-[3px]'>
        <div className='flex h-full items-center justify-center rounded-full bg-white text-white'>
          <NextImage
            src={item.img}
            alt={item.img.split('/')[2]}
            width={60}
            height={60}
            className='rounded-full'
          />
        </div>
      </div>
    </div>
  );
}
