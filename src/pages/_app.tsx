import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { DefaultHead } from '../components/layout/default-head';
import Layout from '../components/layout/Layout';
import { ScreenProvider } from '../lib/providers/screen-provider';
import '../styles/style.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate='%s | Green Agri'
        defaultTitle='Green Agri'
        description='Công ty Cổ phần Công nghệ Green Agri / Green Check là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp'
        canonical='https://greenagri.com.vn/'
        openGraph={{
          type: 'website',
          url: 'https://greenagri.com.vn/',
          title: 'Green Agri',
          description:
            'Công ty Cổ phần Công nghệ Green Agri / Green Check là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp',
          images: [
            {
              url: 'https://i.imgur.com/QanmG6r.png',
              width: 1200,
              height: 630,
              alt: 'Công ty Cổ phần Công nghệ Green Agri / Green Check là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp',
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
