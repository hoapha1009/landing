import { AppProps } from 'next/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/style.scss';

import Layout from '../components/layout/Layout';
import { DefaultHead } from '../components/layout/default-head';
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
          <Component {...pageProps} />
        </Layout>
      </ScreenProvider>
    </>
  );
}

export default MyApp;
