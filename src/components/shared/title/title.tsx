interface TitleProps {
  text: string;
  className?: string;
}

export function Title({ text = '', className = '' }: TitleProps) {
  return (
    <div
      data-aos='fade-up'
      data-aos-delay='50'
      className={`text-center font-saira text-4xl font-semibold uppercase ${className}`}
    >
      {text}
    </div>
  );
}
