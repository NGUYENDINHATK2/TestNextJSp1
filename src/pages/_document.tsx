import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-member-accessibility
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility, @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <script
            async
            defer
            data-domain={process.env.URL}
            src="https://plausible.io/js/plausible.js"
          />
          <title>Next.js + Tailwind CSS</title>
          {/* link font-awesome */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.6/css/all.css?v=21" />
        </Head>
        <body 
          style={{
            margin: 0,
            padding: 0,
            fontFamily: 'Inter, sans-serif',
            boxSizing: 'border-box',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
