import type { AppProps } from 'next/app'
import { GlobalStyle } from './_app.styled'

import CartProvider from '@/context/ShelfContext'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <GlobalStyle />      
      <Component {...pageProps} />
    </CartProvider>
  )
}
