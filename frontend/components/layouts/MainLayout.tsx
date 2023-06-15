import { ReactNode } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      {/* <Header /> */}
      <Body>{children}</Body>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
