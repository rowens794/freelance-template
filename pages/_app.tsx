import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'
const isProduction = process.env.NODE_ENV === 'production'

//headers
import CenteredBorderHeader from '../page-sections/navigation/centered-header'
import Footer from '../page-sections/footers/simple-centered'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <div className="relative">
      <CenteredBorderHeader />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
