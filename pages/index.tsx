import { Button } from '@mantine/core'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Todo Heat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Todo Heat</h1>
        <p>A persistent todo app for inconsistent people</p>
        <Button>I'm a styled button from Mantine!</Button>
      </main>
      <footer>

      </footer>
    </div>
  )
}
