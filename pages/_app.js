import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>Happy Birthday Geeta Girumala 🥳 </title>
    <link rel="icon" type="image/x-icon" href="/fav.svg" />
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
