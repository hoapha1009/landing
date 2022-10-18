import Image from 'next/image';

interface Card {
  img: {
    url: string;
    alt: string;
  };
  content: string;
}

interface CardProps {
  className?: string;
  contentClass?: string;
  imageClass?: string;
  item: Card;
  index: number;
}

export function Card({
  index,
  item,
  className,
  contentClass,
  imageClass,
}: CardProps) {
  const delay = (index * 200).toString();

  return (
    <div
      data-aos='fade-up'
      data-aos-delay={delay}
      className={`flex h-full flex-col items-center justify-between rounded-xl border border-gray-100 shadow ${className}`}
    >
      <div className='relative h-20 w-20 shrink-0 grow-0'>
        <Image
          src={item.img.url}
          alt={item.img.alt}
          layout='fill'
          className={`${imageClass}`}
        />
      </div>
      <div className={`mt-auto h-full text-center ${contentClass}`}>
        {item.content}
      </div>
    </div>
  );
}
