import '@/styles/globals.css'
import React, { ReactNode } from 'react';
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '800'] })

export default function App({ Component, pageProps }: AppProps)
{
  const getLayout: (page: ReactNode) => ReactNode =
    (Component as any).getLayout || ((page: ReactNode) => page);

  return getLayout(
    <>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
