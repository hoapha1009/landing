import { AppProps } from 'next/app';
import '../styles/style.scss';

import { DefaultHead } from '../components/layout/default-head';
import Layout from '../components/layout/Layout';
import { ScreenProvider } from '../lib/providers/screen-provider';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultHead />
      <ScreenProvider>
        <Layout>
          {/* <DefaultSeo
            titleTemplate='%s | GreenAgri'
            defaultTitle='GreenAgri'
            description='GreenAgri - Giải pháp Thương mại điện tử và Quản lý kênh phân phối'
            canonical='https://greenagri.com.vn/'
            openGraph={{
              type: 'website',
              url: 'https://greenagri.com.vn/',
              title: 'Green Agri',
              description:
                'GreenAgri - Giải pháp Thương mại điện tử và Quản lý kênh phân phối',
              images: [
                {
                  url: 'https://i.imgur.com/TEWDd5D.png',
                  width: 1200,
                  height: 630,
                  alt: 'GreenAgri - Giải pháp Thương mại điện tử và Quản lý kênh phân phối.',
                },
              ],
              site_name: 'Green Agri',
            }}
          /> */}
          <Component {...pageProps} />
        </Layout>
      </ScreenProvider>
    </>
  );
}

export default MyApp;
