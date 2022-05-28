import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ThemeProvider } from 'styled-components';
import { theming } from '@store-front/theming';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to app!</title>
      </Head>
      <ThemeProvider theme={theming(process.env.NEXT_PUBLIC_THEME_NAME)}>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
