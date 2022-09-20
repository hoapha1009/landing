import { useScreen } from '../../../hooks/use-screen';
import { BreadCrumbs } from '../../shared/breadcrumbs/breadcrumbs';
import { Form } from '../../shared/form/form';
import { AboutOurPlatform } from './components/about-our-platform';
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
      <AboutOurPlatform />
      <Form />
    </div>
  );
}
