import React from 'react';
import type { AppProps } from 'next/app';
import EstatesProvider from 'contexts/real-estates/components';
import Header from 'layout/header/header';
import 'styles/base/reset.scss';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <EstatesProvider>
      <Header />
      <Component {...pageProps} />
    </EstatesProvider>
  );
}
export default MyApp;
