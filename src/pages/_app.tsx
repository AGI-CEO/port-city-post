import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import '../styles/global.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import Footer from '../components/footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  )
}
