import Head from 'next/head';
import Script from 'next/script';

// import { AnalyticConfig } from "../../dist/graphql/modules/shop/shopConfig/analytic/analyticConfig.graphql";

export function DefaultHead() {
  return (
    <>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-7G5K593S56'
      />
      <Script
        id='dangerouslySetInnerHTML-script'
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-7G5K593S56');
              `,
        }}
      />
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width, user-scalable=yes'
        ></meta>
        <link rel='icon' type='image/x-icon' href='/favicon/favicon.ico?v=3' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&family=Saira:wght@400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
    </>
  );
}
