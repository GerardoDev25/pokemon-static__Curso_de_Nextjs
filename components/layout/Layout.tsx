import Head from 'next/head';

type Props = React.FC<{ children: React.ReactNode; title?: string }>;

export const Layout: Props = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name='author' content='Gerardo Miranda' />
        <meta name='description' content={`informacion sobre el pokemon ${title}`} />
        <meta name='keyworks' content={`${title} pokemon, pokedex`} />
      </Head>
      {/*  */}
      <main>{children}</main>
    </>
  );
};
