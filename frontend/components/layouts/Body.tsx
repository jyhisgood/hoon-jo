import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Body = ({ children }: Props) => {
  return <div className="min-h-screen px-20">{children}</div>;
};

export default Body;
