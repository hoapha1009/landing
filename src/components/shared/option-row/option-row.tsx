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
      <img
        src='/images/leaf.png'
        alt='leaf'
        className='lazyload mt-1 h-[22px] w-[22px]'
      />
      <div className={`flex-1 text-gray-600 ${contentClassName}`}>
        {content}
      </div>
    </div>
  );
}
