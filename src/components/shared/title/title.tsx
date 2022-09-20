interface TitleProps {
  text: string;
  className?: string;
}

export function Title({ text = '', className = '' }: TitleProps) {
  return (
    <div
      className={`text-center font-saira text-[23px] font-semibold uppercase lg:text-4xl ${className}`}
    >
      {text}
    </div>
  );
}
