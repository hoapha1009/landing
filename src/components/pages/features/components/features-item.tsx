export function FeaturesItem({
  reverse = false,
  image,
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}: {
  reverse?: boolean;
  image: string;
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  return (
    <div
      className={`flex flex-row items-center ${
        reverse ? 'flex-row-reverse' : ''
      } ${className}`}
    >
      <div>
        <img src={image} alt='image' />
      </div>
      <div className={`w-[998px] ${reverse ? 'mr-[100px]' : 'ml-[100px]'}`}>
        <div
          className={`my-auto  mb-4 max-w-[33rem] text-4xl font-semibold uppercase leading-tight  ${titleClassName}`}
        >
          {title}
        </div>

        {subtitle && (
          <div
            className={`text-xl font-normal text-gray-400 ${subtitleClassName}`}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}
