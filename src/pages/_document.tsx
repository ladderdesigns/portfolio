import Document, { Html, Head, Main, NextScript } from "next/document";

// TODO: refactor this component to a functional component with "extends"

class _Document extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Security-Policy" content=""></meta>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicons/favicon-16x16.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicons/apple-touch-icon.png"
          />
          <link rel="manifest" href="favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta
            name="description"
            content="Ladder Designs is a website design and development agency that builds high-quality educational resources for educators and students."
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
