import { useScreen } from '../../../hooks/use-screen';
import { BreadCrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { Form } from '../../shared/form/form';
import { Welcome } from './components/welcome';

export function NewsAndBlogPage() {
  const isLg = useScreen('lg');

  return (
    <div className=''>
      {!isLg && (
        <BreadCrumbs
          breadcrumbs={[
            { label: 'Trang chủ', href: `/` },
            { label: 'Tin tức & Blog' },
          ]}
          className=''
        />
      )}
      <Welcome />
      <Form className='lg:!bg-[#E7F7F0]' />
    </div>
  );
}
