import '../styles/globals.css';
import { ReactNode } from 'react';
import Navbar from './komponents/navbar';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Shopping List App</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;