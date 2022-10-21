import { NextSeo } from 'next-seo';
import { AboutUsPage } from '../../components/pages/about-us/about-us-page';

export default function Page() {
  return (
    <>
      <NextSeo title='Trang giới thiệu' />
      <AboutUsPage />
    </>
  );
}
