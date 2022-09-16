interface TitleProps {
  text: string;
  className?: string;
}

export function Title({ text = '', className = '' }: TitleProps) {
  return (
    <div className={`text-center text-4xl font-bold uppercase ${className}`}>
      {text}
    </div>
  );
}
