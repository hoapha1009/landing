import { AppProps } from 'next/app';
import '../styles/style.scss';

import { DefaultHead } from '../components/layout/default-head';
import Layout from '../components/layout/Layout';
import { ScreenProvider } from '../lib/providers/screen-provider';
import { DefaultSeo } from 'next-seo';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate='%s | Green Agri'
        defaultTitle='Green Agri'
        description='Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp'
        canonical='https://greenagri.com.vn/'
        openGraph={{
          type: 'website',
          url: 'https://greenagri.com.vn/',
          title: 'Green Agri',
          description:
            'Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp',
          images: [
            {
              url: 'https://i.imgur.com/TEWDd5D.png',
              width: 1200,
              height: 630,
              alt: 'Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp',
            },
          ],
          site_name: 'Green Agri',
        }}
      />
      <DefaultHead />
      <ScreenProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScreenProvider>
    </>
  );
}

export default MyApp;
