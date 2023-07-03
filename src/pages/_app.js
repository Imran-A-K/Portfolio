import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat, Roboto_Mono } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-mont"
})
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
export default function App({ Component, pageProps }) {
  const router = useRouter()
  return  <>
  <Head >
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  </Head>
 
  <main className={`${montserrat.variable} ${roboto_mono.variable} font-mont bg-light w-full min-h-screen dark:bg-gray-900`}>
    <Navbar />
    <AnimatePresence mode="wait">
    <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
    <Footer />
  </main>
  </>
}
