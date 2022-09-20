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
        <div className='group cursor-pointer'>
          <div className='h-64 w-full overflow-auto rounded-md'>
            <img
              src={`images/${news.image}`}
              className='h-full w-full'
              alt='image-new'
            />
          </div>
          <div className='my-3 flex flex-row items-center'>
            <div className='rounded-sm bg-[#E7F7F0] px-4 py-1 font-semibold text-primary'>
              {news.topic}
            </div>
            <div className='px-4 py-1 font-semibold text-gray-500 '>
              {news.date}
            </div>
          </div>
          <div className='text-ellipsis-2 font-saira text-xl font-semibold group-hover:text-primary'>
            {news.title}
          </div>
        </div>
      </a>
    </Link>
  );
}
