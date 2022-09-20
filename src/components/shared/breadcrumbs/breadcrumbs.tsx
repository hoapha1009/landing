import Link from 'next/link';
import { Fragment } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

export interface BreadCrumb {
  href?: string;
  label: string;
}

interface PropsType {
  breadcrumbs: BreadCrumb[];
  className?: string;
}

export function BreadCrumbs({ breadcrumbs, className = '' }: PropsType) {
  const truncateLabel = (label: string) => {
    if (!label) return '';

    if (label.split(' ').length > 10) {
      return `${label.split(' ').slice(0, 10).join(' ')}...`;
    }

    return label;
  };

  return (
    <div
      data-aos='fade'
      className={`main-container flex flex-row items-center overflow-hidden text-sm font-semibold ${className}`}
    >
      {breadcrumbs.map((breadcrumb, index) => (
        <Fragment key={index}>
          {breadcrumb.href ? (
            <div className='flex shrink-0 grow-0 items-center'>
              <Link href={breadcrumb.href}>
                <a className=''>
                  <div className='whitespace-nowrap lowercase !text-primary transition-all duration-200 first-letter:uppercase hover:text-primary hover:underline'>
                    {breadcrumb.label}
                  </div>
                </a>
              </Link>
              <div className='px-1.5'>
                <AiOutlineRight className='font-semibold !text-primary' />
              </div>
            </div>
          ) : (
            <div className='flex-1 whitespace-nowrap first-letter:uppercase'>
              {truncateLabel(breadcrumb.label)}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
