import Head from 'next/head';
import { Navbar } from '../ui';

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
      <Navbar />
      <main
        style={{
          padding: '0 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
