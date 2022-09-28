import { OptionRow } from '../../../shared/option-row/option-row';
import { Title } from '../../../shared/title/title';

export function FeatMain({ options }) {
  return (
    <div className='rounded-md border bg-[#FAFAFA] p-4 shadow-sm lg:p-8'>
      <Title
        text='Tính năng chính'
        className='mb-8 text-[23px] lg:text-[40px]'
      />
      <div className='grid gap-2 lg:grid-cols-2 lg:gap-8'>
        {options?.map((item, index) => (
          <OptionRow
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
