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
    <div className='relative rounded-xl border border-gray-50 bg-white px-6 pt-20 pb-8 shadow lg:pb-12'>
      <div
        data-aos='fade-up'
        data-aos-delay='100'
        className='font-saira text-[23px] font-semibold lg:text-2xl'
      >
        {item.title}
      </div>
      <div className='mt-3 flex flex-col gap-4'>
        {item.options.map((option, index) => (
          <OptionRow
            key={index}
            content={option.content}
            hasAnimation
            contentClassName='lg:text-lg'
          />
        ))}
      </div>
      <div className='absolute top-0 left-1/2 h-[100px] w-[100px] -translate-x-14 -translate-y-12 transform rounded-full bg-gradient-to-r from-primary to-accent p-[3px]'>
        <div className='flex h-full items-center justify-center rounded-full bg-white text-white'>
          <img
            src={item.img}
            alt={item.img.split('/')[2]}
            width={60}
            height={60}
            className='lazyload rounded-full'
          />
        </div>
      </div>
    </div>
  );
}
