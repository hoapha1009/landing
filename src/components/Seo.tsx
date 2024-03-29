import Head from 'next/head';
import { useRouter } from 'next/router';

// !STARTERCONF Change these default meta
const defaultMeta = {
  title: 'Green Agri',
  siteName: 'Green Agri',
  description:
    'Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://greenagri.com.vn/',
  type: 'website',
  robots: 'follow, index',
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image: 'https://i.imgur.com/DyUsJDB.png',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // !STARTERCONF Follow config for opengraph, by deploying one on https://github.com/theodorusclarence/og
  // ? Uncomment code below if you want to use default open graph
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      {/* Primary Meta Tags */}
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
      <meta
        property='og:image:secure'
        content='https://i.imgur.com/DyUsJDB.png'
      />
      <meta property='og:image:width' content='1200'></meta>
      <meta property='og:image:height' content='630'></meta>
      <meta
        property='og:image:secure_url'
        content='https://i.imgur.com/DyUsJDB.png'
      />
      <meta property='og:image:type' content='image/png' />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://gat-mu.vercel.app/' />
      <meta property='twitter:title' content='Green Agri' />
      <meta
        property='twitter:description'
        content='Công ty Cổ phần Công nghệ Green Agri là đơn vị tiên phong trong lĩnh vực cung cấp các giải pháp công nghệ cho ngành nông nghiệp'
      />
      <meta
        property='twitter:image'
        content='https://i.imgur.com/DyUsJDB.png'
      />
    </Head>
  );

  // return (
  //   <Head>
  //     <title>{meta.title}</title>
  //     <meta name='robots' content={meta.robots} />
  //     <meta content={meta.description} name='description' />
  //     <meta property='og:url' content={`${meta.url}${router.asPath}`} />
  //     <link rel='canonical' href={`${meta.url}${router.asPath}`} />
  //     {/* Open Graph */}
  //     <meta property='og:type' content={meta.type} />
  //     <meta property='og:site_name' content={meta.siteName} />
  //     <meta property='og:description' content={meta.description} />
  //     <meta property='og:title' content={meta.title} />
  //     <meta name='image' property='og:image' content={meta.image} />
  //     {/* Twitter */}
  //     <meta name='twitter:card' content='summary_large_image' />
  //     <meta name='twitter:site' content='@th_clarence' />
  //     <meta name='twitter:title' content={meta.title} />
  //     <meta name='twitter:description' content={meta.description} />
  //     <meta name='twitter:image' content={meta.image} />
  //     {meta.date && (
  //       <>
  //         <meta property='article:published_time' content={meta.date} />
  //         <meta
  //           name='publish_date'
  //           property='og:publish_date'
  //           content={meta.date}
  //         />
  //         <meta name='author' property='article:author' content='GAT' />
  //       </>
  //     )}

  //     {/* Favicons */}
  //     {favicons.map((linkProps) => (
  //       <link key={linkProps.href} {...linkProps} />
  //     ))}
  //     <meta name='GAT-TileColor' content='#ffffff' />
  //     <meta name='GAT-TileImage' content='/images/logo.png' />
  //     <meta name='theme-color' content='#ffffff' />
  //   </Head>
  // );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

// !STARTERCONF this is the default favicon, you can generate your own from https://www.favicon-generator.org/ then replace the whole /public/favicon folder
const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/apple-icon-57x57.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/apple-icon-72x72.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-76x76.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-icon-180x180.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/manifest.json',
  },
];
