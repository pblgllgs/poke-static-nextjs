import Head from 'next/head';

interface LayoutProps {
  siteName?: string;
  children: React.ReactNode;
}

export const LayoutPropsInterface = ({ children, siteName }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{siteName || 'Pokemon App'}</title>
        <meta charSet="utf-8" />
        <meta name="author" content="pblgllgs" />
        <meta name="description" content="info" />
        <meta name="keywords" content="xxx pokemon, pokedex" />
      </Head>

      <main>{children}</main>
    </>
  );
};
