import { appWithTranslation } from 'next-i18next';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ConfigProvider from '~/components/ConfigProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default appWithTranslation(MyApp);
