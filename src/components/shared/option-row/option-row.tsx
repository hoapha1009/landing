import NextImage from '../../NextImage';

interface OptionRowProps {
  content: string;
  className?: string;
}

export function OptionRow({ content, className, ...props }: OptionRowProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <NextImage
        src='/images/leaf.png'
        alt='leaf'
        width={22}
        height={22}
        className='mt-0.5'
      />
      <div className='flex-1 text-gray-600'>{content}</div>
    </div>
  );
}
