import React from 'react'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TRC Sports</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
