import { HomePage } from '../components/pages/home/home-page';
import Seo from '../components/Seo';

export default function Page() {
  return (
    <>
      {/* <NextSeo title='Trang chủ Green Agri' /> */}
      <Seo />
      <HomePage />
    </>
  );
}
