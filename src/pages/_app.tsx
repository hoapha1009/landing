import { AppProps } from 'next/app';
import '../styles/style.scss';

import { DefaultHead } from '../components/layout/default-head';
import { ScreenProvider } from '../lib/providers/screen-provider';
import Layout from '../components/layout/Layout';

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
          <Component {...pageProps} />
        </Layout>
      </ScreenProvider>
    </>
  );
}

export default MyApp;
