import React from 'react';
import type { AppProps } from 'next/app';
import Header from 'layout/header/header';
import 'styles/base/reset.scss';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      {/*<Header />*/}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
