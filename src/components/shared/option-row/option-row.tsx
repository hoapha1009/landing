import NextImage from '../../NextImage';

interface OptionRowProps {
  content: string;
  className?: string;
  contentClassName?: string;
}

export function OptionRow({
  content,
  className = '',
  contentClassName = '',
}: OptionRowProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <NextImage
        src='/images/leaf.png'
        alt='leaf'
        width={22}
        height={22}
        className='mt-1'
      />
      <div className={`flex-1 text-lg text-gray-600 ${contentClassName}`}>
        {content}
      </div>
    </div>
  );
}
