import Head from 'next/head';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { AppProps } from 'next/app';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain="goerli">
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="A short description of your page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </ThirdwebProvider>
  );
}
