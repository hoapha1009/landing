import { RiArrowRightSLine } from 'react-icons/ri';
import { Title } from '../../../../shared/title/title';
import { HomeNewList } from './components/home-news-list';

export function HomeNews() {
  return (
    <div className='relative bg-gray-50'>
      <img
        src='/images/home-leaf-bg-1.png'
        className='absolute bottom-0 left-0'
      />
      <img
        src='/images/home-leaf-bg-2.png'
        className='absolute right-0 -top-[140px]'
      />
      <div className='main-container py-24'>
        <div className='flex flex-row items-center justify-between px-12'>
          <Title text='tin tức và chia sẽ' />
          <div className='flex flex-row items-center'>
            <a className='border-transparent bg-transparent font-semibold text-primary no-underline'>
              Xem thêm
            </a>
            <i className='ml-4 text-3xl font-semibold text-primary'>
              <RiArrowRightSLine />
            </i>
          </div>
        </div>
        <HomeNewList />
      </div>
    </div>
  );
}
