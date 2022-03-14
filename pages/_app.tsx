import { NextPage } from 'next'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: ( page: ReactElement ) => ReactNode
}

type LasPropsDelApp = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: LasPropsDelApp) {
  // Si el componente hijo tiene un getLayout, se lo agrego, sino va la página por defecto
  const getLayout = Component.getLayout || ((page) => page)
  
  // return <Component {...pageProps} />

  return getLayout(
    <Component {...pageProps} />
  )
}

export default MyApp
