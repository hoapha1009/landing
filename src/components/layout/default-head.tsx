import Head from 'next/head';

// import { AnalyticConfig } from "../../dist/graphql/modules/shop/shopConfig/analytic/analyticConfig.graphql";

export function DefaultHead() {
  return (
    <>
      <Head>
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-7G5K593S56'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-7G5K593S56');
                `,
          }}
        ></script>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0'
        />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
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
