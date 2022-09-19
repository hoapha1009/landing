interface SubtitleProps {
  className?: string;
  text: string;
}

export function Subtitle({ className = '', text }: SubtitleProps) {
  return (
    <div
      data-aos='fade'
      data-aos-delay='100'
      className={`mt-3 mb-8 text-center text-xl font-light leading-8 text-gray-600 ${className}`}
    >
      {text}
    </div>
  );
}
