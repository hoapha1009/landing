interface ChipProps {
  className?: string;
  text: string;
}

export function Chip({ className = '', text = '', ...props }: ChipProps) {
  return (
    <div
      className={`rounded bg-[#E7F7F0] px-4 py-1 text-xs text-primary shadow-sm ${className}`}
    >
      {text}
    </div>
  );
}
