import 'styles/base/reset.scss';

import type { AppProps } from 'next/app';
import React from 'react';
import EstatesProvider from 'contexts/real-estates/components';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <EstatesProvider>
      <Component {...pageProps} />
    </EstatesProvider>
  );
}
export default MyApp;
