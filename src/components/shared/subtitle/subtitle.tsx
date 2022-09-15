interface SubtitleProps {
  textColor?: string;
  text: string;
}

export function Subtitle({ textColor = 'text-gray-700', text }: SubtitleProps) {
  return (
    <div className={`mt-3 mb-8 text-center text-xl ${textColor}`}>{text}</div>
  );
}
