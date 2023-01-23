import Head from 'next/head';

import { Navbar } from '../ui';

type Props = React.FC<{ children: React.ReactNode; title?: string }>;

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: Props = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name='author' content='Gerardo Miranda' />
        <meta name='description' content={`informacion sobre el pokemon ${title}`} />
        <meta name='keyworks' content={`${title} pokemon, pokedex`} />
        <meta property='og:title' content={`informacion de ${title}`} />
        <meta property='og:description' content={`esta es la pagina de ${title}`} />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
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
