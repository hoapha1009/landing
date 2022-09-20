import Link from 'next/link';
import Button from '../../../../../buttons/Button';

export interface NewProps {
  image: string;
  topic: string;
  date: string;
  title: string;
  href: string;
}

export function HomeNewsCard({ news }: { news: NewProps }) {
  return (
    <Link href='/'>
      <a>
        <div className='group flex cursor-pointer flex-row items-center gap-2 lg:flex-col lg:gap-0'>
          <div className='shrink-0 basis-2/5 overflow-hidden rounded-md'>
            <img
              src={`images/${news.image}`}
              className='h-full w-full'
              alt='image-new'
            />
          </div>
          <div className='flex flex-col justify-around lg:block'>
            <div className='mt-0 mb-1 flex flex-row items-center lg:mt-3 lg:mb-3'>
              <div className='rounded-sm bg-[#E7F7F0] px-1 py-1 text-xs font-semibold text-primary lg:px-4 lg:text-base'>
                {news.topic}
              </div>
              <div className='px-1 py-1 text-xs font-semibold text-gray-500 lg:px-4 lg:text-base'>
                {news.date}
              </div>
            </div>
            <div className='text-ellipsis-2 font-saira text-base font-semibold group-hover:text-primary lg:text-xl'>
              {news.title}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
