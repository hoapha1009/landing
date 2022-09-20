export function FeaturesItem({
  image,
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  wrapContentClassName = '',
}: {
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
      data-aos='fade-up'
      className={`my-auto flex max-w-fit items-center  lg:mx-32 lg:mt-3 lg:h-full lg:flex-row  xl:mx-60 ${className}`}
    >
      <div className='w-7/12 lg:w-2/5'>
        <img src={image} alt='image' className='w-full' />
      </div>
      <div
        className={`${
          wrapContentClassName ? wrapContentClassName : 'lg:ml-11 '
        }`}
      >
        <div
          className={`my-auto  mb-4 font-semibold uppercase leading-[1.4] lg:text-4xl  ${titleClassName}`}
        >
          {title}
        </div>

        {subtitle && (
          <div
            className={`max-w-[600px] font-normal leading-8 text-gray-600 lg:text-xl ${subtitleClassName}`}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}
