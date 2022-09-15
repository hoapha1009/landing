interface InputProps {
  type?: 'text' | 'tel' | 'email' | 'number';
  inputClassName?: string;
  number?: boolean;
}

export function Input({
  type = 'text',
  number = false,
  inputClassName,
  ...props
}: InputProps) {
  return <div className='focus-within: '></div>;
}
