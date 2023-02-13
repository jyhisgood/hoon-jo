import { appWithTranslation } from 'next-i18next';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ConfigProvider from '~/components/ConfigProvider';
import MainLayout from '~/components/layouts/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ConfigProvider>
  );
}

export default appWithTranslation(MyApp);
