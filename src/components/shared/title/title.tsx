interface TitleProps {
  text: string;
  className?: string;
}

export function Title({ text = '', className = '' }: TitleProps) {
  return (
    <div className={`text-center text-3xl font-bold uppercase ${className}`}>
      {text}
    </div>
  );
}
