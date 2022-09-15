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
        <div
          className={`relative h-[400px] w-[440px] cursor-pointer overflow-hidden rounded-md bg-[url('/images/home-news-share-2.png')] bg-contain bg-no-repeat shadow-md`}
        >
          <div className='flex p-5'>
            <span className='mr-4 inline-block rounded-md bg-white px-4 py-1 text-blue-400'>
              {news.topic}
            </span>
            <span className='inline-block rounded-md bg-orange-400 px-4 py-1 text-white'>
              {news.date}
            </span>
          </div>

          <div className='mark-gradient absolute bottom-0 left-0 h-44 w-full'></div>
          <div className='absolute bottom-0 left-0 z-20 flex h-[10.5rem] w-full flex-col items-start justify-center p-5'>
            <div className='mb-4 text-2xl font-semibold text-white'>
              {news.title}
            </div>
            <Button
              variant='light'
              className='bg-white px-10 py-2 text-gray-700'
            >
              Xem thêm
            </Button>
          </div>
        </div>
      </a>
    </Link>
  );
}
