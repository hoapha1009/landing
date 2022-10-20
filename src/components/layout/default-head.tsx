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
        <title>Green Agri</title>
        <meta name='title' content='Green Agri' />
        <meta
          name='description'
          content='Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp'
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://gat-mu.vercel.app/' />
        <meta property='og:title' content='Green Agri' />
        <meta
          property='og:description'
          content='Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp'
        />
        <meta property='og:image' content='https://i.imgur.com/QanmG6r.png' />
        {/* <meta
          property='og:image:url'
          content='https://i.imgur.com/QanmG6r.png'
        /> */}
        {/* <meta
          property='og:image:secure'
          content='https://i.imgur.com/QanmG6r.png'
        /> */}
        {/* <meta property='og:image:width' content='1200'></meta>
        <meta property='og:image:height' content='630'></meta> */}
        {/* <meta
          property='og:image:secure_url'
          content='https://i.imgur.com/QanmG6r.png'
        />
        <meta property='og:image:type' content='image/png' /> */}

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://gat-mu.vercel.app/' />
        {/* <meta property='twitter:title' content='Green Agri' />
        <meta
          property='twitter:description'
          content='Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp'
        />
        <meta
          property='twitter:image'
          content='https://i.imgur.com/QanmG6r.png'
        />
        <meta
          property='twitter:image:secure_url'
          content='https://i.imgur.com/QanmG6r.png'
        />
        <meta property='twitter:image:type' content='image/png' /> */}

        <link rel='icon' type='image/x-icon' href='/favicon/favicon.ico?v=3' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='canonical' href='https://gat-mu.vercel.app/' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&family=Saira:wght@400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
    </>
  );
}
