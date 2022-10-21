import { NextSeo } from 'next-seo';
import FeaturesInDevelopment from '../../components/shared/features-in-development/features-in-development';

export default function Page() {
  return (
    <>
      <NextSeo title='Trang tuyển dụng' />
      <FeaturesInDevelopment />
    </>
  );
}
