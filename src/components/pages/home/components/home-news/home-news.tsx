import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useScreen } from '../../../../../hooks/use-screen';
import { Title } from '../../../../shared/title/title';
import { HomeNewList } from './components/home-news-list';

export function HomeNews() {
  const isLg = useScreen('lg');

  return (
    <div className='bg-gray-50 py-8 lg:py-16'>
      <div className='main-container'>
        <div className='flex flex-row items-center justify-between'>
          <Title text='tin tức và chia sẻ' className='mb-4 lg:mb-8' />
          {isLg && (
            <div className='flex cursor-pointer flex-row items-center'>
              <Link href=''>
                <a className='border-transparent bg-transparent font-semibold text-primary no-underline'>
                  Xem thêm
                </a>
              </Link>
              <i className='ml-1 text-3xl font-semibold text-primary'>
                <RiArrowRightSLine />
              </i>
            </div>
          )}
        </div>
        <HomeNewList />
        {!isLg && (
          <div className='mt-3 flex flex-row justify-end'>
            <div className='flex flex-row items-center'>
              <Link href=''>
                <a className='cursor-pointer border-transparent bg-transparent font-semibold text-primary no-underline hover:text-primary-dark'>
                  Xem thêm
                </a>
              </Link>
              <i className='ml-2 text-3xl font-semibold text-primary'>
                <RiArrowRightSLine />
              </i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
