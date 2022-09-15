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
}

export function Card({ item, className, contentClass, imageClass }: CardProps) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-between rounded-xl border border-gray-100 shadow ${className}`}
    >
      <img
        src={item.img.url}
        alt={item.img.alt}
        height='100%'
        className={imageClass}
      />
      <div className={`mt-auto h-full text-center ${contentClass}`}>
        {item.content}
      </div>
    </div>
  );
}
