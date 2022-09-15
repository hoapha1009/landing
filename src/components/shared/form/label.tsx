import { FaAsterisk } from 'react-icons/fa';
import { RiInformationFill } from 'react-icons/ri';

export interface PropsType {
  className?: string;
  text: string;
  subText?: string;
  description?: string;
  htmlFor?: string;
  tooltip?: string;
  required?: boolean;
  error?: string;
  subTextClassName?: string;
  children?: any;
}

export function Label({
  className = '',
  subTextClassName = '',
  ...props
}: PropsType) {
  return (
    <>
      <label
        htmlFor={props.htmlFor}
        className={`mb-1 flex min-h-6 w-full items-center pl-0.5 font-semibold text-gray-600 ${className}`}
      >
        <span className='text-error inline-flex items-center'>
          {props.text}
          {props.subText && (
            <span
              className={`ml-1 text-xs font-normal italic text-gray-500 ${subTextClassName}`}
            >
              {props.subText}
            </span>
          )}

          {props.required && (
            <sup
              className={`ml-1 text-[8px] ${
                props.error ? 'text-danger' : 'text-primary'
              }`}
            >
              <FaAsterisk />
            </sup>
          )}
          {props.tooltip && (
            <i
              className={`ml-1.5 inline-block text-sm ${
                props.error ? 'text-danger' : 'text-gray-500'
              }`}
              data-tooltip={props.tooltip}
            >
              <RiInformationFill />
            </i>
          )}
        </span>
        {props.children}
      </label>
      {props.description && (
        <div className='-mt-0.5 mb-1 pl-0.5 text-sm text-gray-600'>
          {props.description}
        </div>
      )}
    </>
  );
}
