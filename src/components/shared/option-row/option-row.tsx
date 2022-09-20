import NextImage from '../../NextImage';

interface OptionRowProps {
  content: string;
  className?: string;
  contentClassName?: string;
  index?: number;
  hasAnimation?: boolean;
}

export function OptionRow({
  content,
  className = '',
  contentClassName = '',
  index,
  hasAnimation = false,
}: OptionRowProps) {
  const delay = (index * 200).toString();

  return (
    <div
      className={`flex gap-2 ${className}`}
      {...(hasAnimation && { 'data-aos': 'fade-up', 'data-aos-delay': delay })}
    >
      <NextImage
        src='/images/leaf.png'
        alt='leaf'
        width={22}
        height={22}
        className='mt-1'
      />
      <div
        className={`flex-1 text-base text-gray-600 lg:text-lg ${contentClassName}`}
      >
        {content}
      </div>
    </div>
  );
}
