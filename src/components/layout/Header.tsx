import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import Button from '../buttons/Button';
import NextImage from '../NextImage';

export default function Header() {
  const router = useRouter();
  console.log('🚀 ~ file: Header.tsx ~ line 11 ~ Header ~ router', router);
  const [scrollTop, setScrollTop] = useState(0);
  const isScrolled = useMemo(() => scrollTop > 50, [scrollTop]);
  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop);
  };

  const indexOfSelectedMenu = useMemo(() => {
    const indexOfSolutionMenu = MENU_TAB_LIST.findIndex(
      (menu) => menu?.isSolutionPage
    );
    const solutionMenuSubTabHrefList = MENU_TAB_LIST[
      indexOfSolutionMenu
    ]?.subTabs?.map((subTab) => subTab.href);
    if (solutionMenuSubTabHrefList?.includes(router.pathname)) {
      return indexOfSolutionMenu;
    }
    const indexOfMenu = MENU_TAB_LIST.findIndex((menu) =>
      router.pathname.includes(menu.href as string)
    );
    return indexOfMenu;
  }, [router.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className='z-100 sticky top-0 w-full'>
      <div
        className={`flex h-20 items-center justify-between bg-white px-14 text-lg transition-all
    ${
      isScrolled
        ? 'border-gray border-b shadow-sm'
        : 'border-transparent shadow-none'
    }
    `}
      >
        <div className='flex items-center gap-1'>
          <Link href='/'>
            <a className='mr-8 block'>
              <NextImage
                src='/images/logo.png'
                alt='logo'
                width={102}
                height={36}
              />
            </a>
          </Link>
          {MENU_TAB_LIST.map((tab, index) =>
            tab?.subTabs ? (
              <div key={index} className='group relative inline-block'>
                <button className='inline-flex items-center rounded hover:bg-gray-100'>
                  <span
                    className={`mr-1 px-4 py-2 ${
                      indexOfSelectedMenu === index && 'text-primary'
                    }`}
                  >
                    {tab.title}
                  </span>
                  <i className='text-xl'>
                    <RiArrowDownSLine />
                  </i>
                </button>
                <ul className='absolute hidden rounded shadow group-hover:block'>
                  {tab.subTabs.map((subTab, index) => (
                    <li key={index} className=''>
                      <Link href={subTab.href}>
                        <a className='block whitespace-nowrap py-3 px-8 hover:bg-gray-100'>
                          {subTab.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link key={index} href={tab.href as string}>
                <a
                  className={`block rounded px-4 py-2 hover:bg-gray-100 ${
                    router.asPath === tab.href && 'text-primary'
                  }`}
                >
                  {tab.title}
                </a>
              </Link>
            )
          )}
        </div>
        <div className=''>
          <Button variant='primary'>Đăng ký tư vấn</Button>
        </div>
      </div>
    </header>
  );
}

interface SubMenu {
  href: string;
  title: string;
}

interface Menu {
  title: string;
  href?: string;
  subTabs?: SubMenu[];
  isSolutionPage?: boolean;
}

const MENU_TAB_LIST: Menu[] = [
  { href: '/about-us', title: 'Về GAT' },
  {
    title: 'Giải pháp',
    isSolutionPage: true,
    subTabs: [
      { href: '/green-agri', title: 'Green Agri' },
      { href: '/green-check', title: 'Green Check' },
    ],
  },
  { href: '/features', title: 'Tính năng' },
  { href: '/recruit', title: 'Tuyển dụng' },
  { href: '/guide', title: 'Hướng dẫn' },
  { href: '/news-and-blog', title: 'Tin tức & Blog' },
  { href: '/join-us', title: 'Tham gia cộng đồng' },
];
