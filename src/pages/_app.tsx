import type { AppProps } from 'next/app'
import { GlobalStyle } from './_app.styled'

import ShelfProvider from '@/context/ShelfContext'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShelfProvider>
      <GlobalStyle />      
      <Component {...pageProps} />
    </ShelfProvider>
  )
}
