import { useEffect } from 'react';
import Head from 'next/head';
import TagManager from 'react-gtm-module';
import '../styles/global.scss';
import '../styles/app.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTMID }), []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="preload"
          href="/fonts/OperatorMono/OperatorMonoBook.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="/fonts/OperatorMono/OperatorMonoBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
        <link href="/fonts/OperatorMono/fontface.css" rel="stylesheet" /> */}
        {/* <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.facebook.com" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
