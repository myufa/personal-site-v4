import NextDocument, {
    Html, Head, Main, NextScript
  } from 'next/document';

  class Document extends NextDocument {
    render() {
      return (
        <Html>
          <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
                rel="stylesheet" />
            <link
                href="https://use.typekit.net/mvf1fxm.css"
                rel="stylesheet" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }

  export default Document;