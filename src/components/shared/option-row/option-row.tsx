interface OptionRowProps {
  content: string;
  className?: string;
  contentClassName?: string;
  index?: number;
  hasAnimation?: boolean;
  url?: string;
}

export function OptionRow({
  content,
  className = '',
  contentClassName = '',
  index,
  url = '/images/leaf.png',
  hasAnimation = false,
}: OptionRowProps) {
  const delay = (index * 200).toString();

  return (
    <div
      className={`flex gap-2 ${className}`}
      {...(hasAnimation && { 'data-aos': 'fade-up', 'data-aos-delay': delay })}
    >
      <img src={url} alt='leaf' className=' mt-1 h-[22px] w-[22px]' />
      <div className={`flex-1 text-gray-600 ${contentClassName}`}>
        {content}
      </div>
    </div>
  );
}
