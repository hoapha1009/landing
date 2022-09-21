export function FeaturesItem({
  image,
  title,
  subtitle,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  wrapContentClassName = '',
  imageClassName = '',
}: {
  image: string;
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  wrapContentClassName?: string;
  imageClassName?: string;
}) {
  return (
    <div
      data-aos='fade-up'
      className={`my-auto flex max-w-fit items-center  lg:mx-32 lg:mt-3 lg:h-full lg:flex-row  xl:mx-60 ${className}`}
    >
      <div
        data-aos='fade-up'
        data-aos-delay={300}
        className={`w-7/12 lg:w-2/5 ${imageClassName}`}
      >
        <img src={image} alt='image' className='w-full' />
      </div>
      <div
        className={`${
          wrapContentClassName ? wrapContentClassName : 'lg:ml-11 '
        }`}
      >
        <div
          data-aos='fade-up'
          data-aos-delay={100}
          className={`my-auto  mb-4 font-bold uppercase leading-[1.4] lg:text-4xl  ${titleClassName}`}
        >
          {title}
        </div>

        {subtitle && (
          <div
            data-aos='fade-up'
            data-aos-delay={150}
            className={`max-w-[600px]  !leading-[1.7] text-gray-600 lg:text-xl ${subtitleClassName}`}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}
