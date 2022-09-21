import Link from 'next/link';
import { useScreen } from '../../../../../../hooks/use-screen';

export interface NewProps {
  image: string;
  topic: string;
  date: string;
  title: string;
  href: string;
}

export function HomeNewsCard({
  news,
  index,
}: {
  news: NewProps;
  index: number;
}) {
  const isLg = useScreen('lg');
  const delay = (index * 200).toString();

  return (
    <Link href='/'>
      <a>
        <div
          data-aos='fade-up'
          data-aos-delay={delay}
          className={`group flex  cursor-pointer flex-row gap-2 ${
            isLg ? '' : 'items-center'
          } lg:flex-col lg:gap-0`}
        >
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
              <div className='px-1 py-1 text-xs font-semibold text-[#6C6C6C] lg:px-4 lg:text-base'>
                {news.date}
              </div>
            </div>
            <div className='text-ellipsis-2 font-saira text-base font-semibold group-hover:text-[#35936a] lg:text-xl'>
              {news.title}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
