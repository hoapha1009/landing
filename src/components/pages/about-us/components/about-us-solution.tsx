import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

export function AboutUsSolution() {
  return (
    <div className='main-container p-16'>
      <Title text='Giải pháp green agri' />
      <Subtitle
        text='Miêu tả giải pháp của GAT Miêu tả giải pháp của GAT Miêu tả giải pháp của GAT'
        className='mx-auto mt-4 mb-10 max-w-lg'
      />
      <div className='grid grid-cols-2 gap-8'>
        <AboutUsSolutionCard />
        <AboutUsSolutionCard />
        <AboutUsSolutionCard />
        <AboutUsSolutionCard />
      </div>
    </div>
  );
}

function AboutUsSolutionCard() {
  return (
    <div className='rounded-md bg-gray-100 p-5 shadow-sm'>
      <div className='flex flex-row items-center'>
        <img src='/images/leaf.png' alt='leaf' className='mr-4' />
        <div className='font-saira text-2xl font-semibold'>
          Giải pháp nhật ký canh tác
        </div>
      </div>
      <div className='mt-7 text-lg font-medium text-gray-400'>
        Ghi chép nhật ký các hoạt động nội bộ trong suốt quá trình trồng trọt và
        chăn nuôi
      </div>
    </div>
  );
}
