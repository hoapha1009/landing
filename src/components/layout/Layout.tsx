import Header from '@/components/layout/Header';

import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, [router.asPath]);

  // Put Header or Footer Here
  return (
    <div className='relative min-h-screen bg-white text-gray-700'>
      <>
        <Header />
        <div className=''>{children}</div>
        <Footer />
      </>
    </div>
  );
}
