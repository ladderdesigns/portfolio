import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#99543D"
        />
        <meta name="theme-color" content="#FEE7D1" />
        <meta property="og:site_name" content="Ladder Designs" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ladderdesigns.netlify.app/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
