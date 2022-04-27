import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta charSet="utf-8" />
        <meta name="author" content="pblgllgs" />
        <meta name="description" content={`info ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};