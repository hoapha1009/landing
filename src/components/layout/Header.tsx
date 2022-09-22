import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import {
  RiAlignJustify,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
import { useScreen } from '../../hooks/use-screen';

import Button from '../buttons/Button';

export default function Header() {
  const isLg = useScreen('lg');
  const router = useRouter();
  const [scrollTop, setScrollTop] = useState(0);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
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

  useEffect(() => {
    setShowMenuMobile(false);
  }, [router.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-400  w-full bg-white ${
          isScrolled
            ? 'border-b border-gray-50 shadow'
            : 'border-transparent shadow-none'
        }`}
      >
        <div className='main-container flex h-20 items-center justify-between font-medium'>
          <div className='flex items-center gap-1'>
            <Link href='/'>
              <a className='mr-8 block'>
                <img
                  src='/images/logo.png'
                  alt='logo'
                  width={isLg ? 102 : 85}
                  height={isLg ? 36 : 30}
                  className='object-contain'
                />
              </a>
            </Link>
            {isLg && <MenuLink indexOfSelectedMenu={indexOfSelectedMenu} />}
          </div>
          <div className={!isLg ? 'flex flex-row items-center gap-x-2' : ''}>
            <Button
              variant='primary'
              className='px-3 text-sm lg:px-4 lg:text-base'
            >
              Đăng ký tư vấn
            </Button>
            {!isLg && (
              <Button
                variant='outline'
                className={`px-2.5  ${
                  showMenuMobile
                    ? '!bg-primary:'
                    : '!bg-transparent !text-primary'
                }`}
                onClick={() => setShowMenuMobile(!showMenuMobile)}
              >
                <i className='text-xl'>
                  <RiAlignJustify />
                </i>
              </Button>
            )}
          </div>
        </div>
        <MenuMobile isShow={showMenuMobile}>
          <MenuLink indexOfSelectedMenu={indexOfSelectedMenu} />
        </MenuMobile>
      </header>
      {!isLg && showMenuMobile && (
        <div
          onClick={() => setShowMenuMobile(false)}
          className='fixed top-0 left-0 z-200 h-full w-full'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.32)' }}
        ></div>
      )}
    </>
  );
}
export function MenuLink({ indexOfSelectedMenu }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const isLg = useScreen('lg');

  return (
    <>
      {MENU_TAB_LIST.map((tab, index) =>
        tab?.subTabs ? (
          <div key={index} className='group relative lg:inline-block'>
            <button
              className={`inline-flex w-full items-center justify-between rounded lg:w-auto lg:justify-start lg:hover:bg-gray-100 ${
                indexOfSelectedMenu === index && 'text-primary'
              }`}
              onClick={() => !isLg && setShow(!show)}
            >
              <span className={`mr-1 py-2 lg:pl-4 `}>{tab.title}</span>
              <i
                className={`px-0 text-xl  ${show ? '-rotate-180' : 'rotate-0'}`}
              >
                <RiArrowDownSLine />
              </i>
            </button>
            {!isLg ? (
              show && (
                <ul className='rounded bg-white transition duration-300 ease-in-out lg:absolute lg:hidden lg:shadow lg:group-hover:block'>
                  {tab.subTabs.map((subTab, index) => (
                    <li key={index} className=''>
                      <Link href={subTab.href} onClick={() => setShow(false)}>
                        <a
                          className={`block whitespace-nowrap px-6 py-2 hover:bg-gray-100 lg:px-8 lg:py-3 ${
                            router.pathname.includes(subTab.href)
                              ? 'text-primary'
                              : ''
                          }`}
                        >
                          {subTab.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )
            ) : (
              <>
                <ul className='absolute hidden rounded bg-white shadow group-hover:block'>
                  {tab.subTabs.map((subTab, index) => (
                    <li key={index} className=''>
                      <Link href={subTab.href}>
                        <a className='block whitespace-nowrap px-8 py-3 hover:bg-gray-100'>
                          {subTab.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : (
          <Link key={index} href={tab.href as string}>
            <a
              className={`block rounded py-2 hover:bg-gray-100 lg:px-4 ${
                router.asPath === tab.href && 'text-primary'
              }`}
            >
              {tab.title}
            </a>
          </Link>
        )
      )}
    </>
  );
}

export function MenuMobile({ children, isShow }) {
  return (
    <>
      {isShow && (
        <div className='absolute z-400 w-full animate-emerge-up bg-white pb-8'>
          <div className='main-container z-300 px-1'>{children}</div>
        </div>
      )}
    </>
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
  { href: '/', title: 'Trang chủ' },
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
  // { href: '/recruit', title: 'Tuyển dụng' },
  // { href: '/guide', title: 'Hướng dẫn' },
  { href: '/news-and-blog', title: 'Tin tức & Blog' },
  { href: '/join-us', title: 'Tham gia cộng đồng' },
];
