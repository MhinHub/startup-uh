import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <meta name="application-name" content="Startup UH" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Startup UH" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#585554" />
        <meta name="msapplication-tap-highlight" content="yes" />
        <meta name="theme-color" content="#252627" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#585554" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icons/apple-touch-icon.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://startup-uh.vercel.app" />
        <meta name="twitter:title" content="Startup UH" />
        <meta name="twitter:image" content="icons/icon-192x192.png" />
        <meta name="twitter:image:alt" content="startup-hasanuddin" />
        <meta name="twitter:app:country" content="ID" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Startup UH" />
        <meta property="og:site_name" content="Startup UH" />
        <meta property="og:description" content="Startup UH adalah platform yang menyediakan informasi seputar startup di Universitas Hasanuddin." />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:url" content="https://startup-uh.vercel.app" />
        <meta property="og:image" content="icons/icon-192x192.png" />
        <meta property="og:image:alt" content="Startup UH" />

        <meta name="author" content="#BuildAppWithMin" />
        <script defer src="https://cloud.umami.is/script.js" data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ''}></script>
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ''} />
        <meta name="description" content="Startup UH adalah platform yang menyediakan informasi seputar startup di Universitas Hasanuddin." />
        <meta name="keywords" content="startup, universitas hasanuddin, startup uh, startup hasanuddin, startup unhas, startup makassar, startup sulawesi selatan" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
