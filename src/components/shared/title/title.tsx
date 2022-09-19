interface TitleProps {
  text: string;
  className?: string;
}

export function Title({ text = '', className = '' }: TitleProps) {
  return (
    <div
      className={`text-center font-saira text-4xl font-semibold uppercase ${className}`}
    >
      {text}
    </div>
  );
}
