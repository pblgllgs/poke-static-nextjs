import Head from 'next/head';
import { FC } from 'react';

export const LayoutFC: FC<{ siteName: string }> = ({ siteName }) => {
  return (
    <>
      <Head>
        <title>{siteName || 'Pokemon App'}</title>
        <meta charSet="utf-8" />
        <meta name="author" content="pblgllgs" />
        <meta name="description" content="info" />
        <meta name="keywords" content="xxx pokemon, pokedex" />
      </Head>

      <main></main>
    </>
  );
};
