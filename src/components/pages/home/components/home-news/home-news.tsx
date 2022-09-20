import { RiArrowRightSLine } from 'react-icons/ri';
import { Title } from '../../../../shared/title/title';
import { HomeNewList } from './components/home-news-list';

export function HomeNews() {
  return (
    <div className='main-container py-24'>
      <div className='flex flex-row items-center justify-between'>
        <Title text='tin tức và chia sẻ' className='mb-8' />
        <div className='flex flex-row items-center'>
          <a className='cursor-pointer border-transparent bg-transparent font-semibold text-primary no-underline hover:text-primary-dark'>
            Xem thêm
          </a>
          <i className='ml-2 text-3xl font-semibold text-primary'>
            <RiArrowRightSLine />
          </i>
        </div>
      </div>
      <HomeNewList />
    </div>
  );
}
