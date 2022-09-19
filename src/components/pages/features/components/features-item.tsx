export function FeaturesItem({
  reverse = false,
  image,
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  wrapContentClassName = '',
}: {
  reverse?: boolean;
  image: string;
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  wrapContentClassName?: string;
}) {
  return (
    <div
      className={`my-auto mx-60 flex h-full max-w-fit flex-row items-center ${
        reverse ? 'flex-row-reverse' : ''
      } ${className}`}
    >
      <div className='w-2/5'>
        <img src={image} alt='image' className='w-full' />
      </div>
      <div className={`mx-11 ${wrapContentClassName}`}>
        <div
          className={`my-auto  mb-4 text-4xl font-semibold uppercase leading-[1.4]  ${titleClassName}`}
        >
          {title}
        </div>

        {subtitle && (
          <div
            className={`max-w-[600px] text-xl font-normal leading-8 text-gray-600 ${subtitleClassName}`}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}
