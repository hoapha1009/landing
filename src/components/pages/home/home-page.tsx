import { HomeBanner } from './components/home-banner';
import { HomeCustomer } from './components/home-customer';
import { HomeNews } from './components/home-news/home-news';
import { HomePartner } from './components/home-partner';
import { HomeSolution } from './components/home-solution/home-solution';

export function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeSolution />
      <HomePartner />
      <HomeCustomer />
      <HomeNews />
    </>
  );
}
