import { ReactNode } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

import { Roboto, Noto_Sans_KR, Pacifico, Bodoni_Moda } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  preload: false,
  weight: ['100', '400', '700', '900'],
});

const bodoniModa = Bodoni_Moda({
  preload: false,
  weight: ['400', '500', '500', '600', '700', '800', '900'],
  variable: '--bodoniModa',
});

const pacifico = Pacifico({
  preload: false,
  weight: ['400'],
  variable: '--pacifico',
});

const roboto = Roboto({
  preload: false,
  weight: ['100', '400', '700', '900'],
  variable: '--roboto',
});

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const cls = (...classnames: string[]) => {
    return classnames.join(' ');
  };
  return (
    <main
      className={cls(
        notoSansKr.className,
        roboto.variable,
        pacifico.variable,
        bodoniModa.variable
      )}
    >
      {/* <Header /> */}
      <Body>{children}</Body>
      {/* <Footer /> */}
    </main>
  );
};

export default MainLayout;
