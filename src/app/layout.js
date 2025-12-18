// src/app/layout.js
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import FallingSakura from '@/components/FallingSakura';

import OpeningGate from '@/components/OpeningGate';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: {
    template: '%s - Maldev Wedding',
    default: 'Maldev Wedding Invitation',
  },
  description: 'Digital wedding invitation by Maldev & Wedding',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <OpeningGate />
        <FallingSakura />
        <Header />
        {children}
      </body>
    </html>
  );
}