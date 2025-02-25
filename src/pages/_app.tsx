import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { AppProps /* , AppContext */, type AppType } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';

import { Nunito } from 'next/font/google';

import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from '@/components/theme-provider';

const nunito = Nunito({
  subsets: ['latin'],
  fallback: ['system-ui', 'arial'],
});

const App: AppType<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
    </Head>
    <NextNprogress
      color="#ff2137"
      options={{ showSpinner: false }}
      showOnShallow={true}
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
    />
    <div className={nunito.className}>
      <ClerkProvider appearance={{ baseTheme: dark }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </ClerkProvider>
    </div>
  </>
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
