import { NextSeo } from 'next-seo';
import { GreenCheckPage } from '../../components/pages/green-check/green-check-page';

export default function Page() {
  return (
    <>
      <NextSeo title='Trang ứng dụng Green Check' />
      <GreenCheckPage />
    </>
  );
}
