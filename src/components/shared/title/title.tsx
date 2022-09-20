interface TitleProps {
  text: string;
  className?: string;
}

export function Title({ text = '', className = '' }: TitleProps) {
  return (
    <div
      className={`text-center font-saira text-[23px] font-semibold uppercase leading-8 lg:text-4xl lg:leading-10 ${className}`}
    >
      {text}
    </div>
  );
}
