import { OptionRow } from '../../../shared/option-row/option-row';
import { Title } from '../../../shared/title/title';

export function FeatMain({ options }) {
  return (
    <div className='rounded-md border bg-[#FAFAFA] p-4 shadow-sm lg:mt-12 lg:p-8'>
      <Title
        text='Tính năng chính'
        className='mb-8 hidden text-[23px] lg:block lg:text-[40px]'
      />
      <div className='grid gap-2.5 lg:grid-cols-2 lg:gap-8'>
        {options?.map((item, index) => (
          <OptionRow
            hasAnimation
            index={index + 1}
            content={item.content}
            url={item.url}
            key={index}
            contentClassName='text-left'
          />
        ))}
      </div>
    </div>
  );
}
