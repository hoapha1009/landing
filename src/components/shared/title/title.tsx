interface TitleProps {
  textColor?: string;
  text: string;
}

export function Title({ textColor = 'text-gray-700', text }: TitleProps) {
  return (
    <div className={`text-center text-3xl font-bold uppercase ${textColor}`}>
      {text}
    </div>
  );
}
