import { NextSeo } from 'next-seo';
import { HomePage } from '../components/pages/home/home-page';

export default function Page() {
  return (
    <>
      {/* <Seo /> */}
      <NextSeo title='Trang chủ Green Agri' />
      <HomePage />
    </>
  );
}
