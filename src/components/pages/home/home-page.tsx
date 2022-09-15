import { HomeBanner } from './components/home-banner';
import { HomeCustomer } from './components/home-customer';
import { HomeNews } from './components/home-news/home-news';
import { HomePartner } from './components/home-partner';

export function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomePartner />
      <HomeCustomer />
      <HomeNews />
    </>
  );
}
