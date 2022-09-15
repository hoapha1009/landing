interface SubtitleProps {
  className?: string;
  text: string;
}

export function Subtitle({ className = '', text }: SubtitleProps) {
  return (
    <div className={`mt-3 mb-8 text-center text-xl ${className}`}>{text}</div>
  );
}
