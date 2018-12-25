import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='author' content='uDev' />
          <meta name='description' content='uDev Homepage' />
          {/* <link rel='shortcut icon' href='/favicon.ico' /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
