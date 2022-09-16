import { Form } from '../../shared/form/form';
import { AboutOurPlatform } from './components/about-our-platform';
import { Welcome } from './components/welcome';

export function NewsAndBlogPage() {
  return (
    <>
      <Welcome />
      <AboutOurPlatform />
      <Form />
    </>
  );
}
