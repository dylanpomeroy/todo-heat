import { Button } from '@mantine/core'
import { useSession, signIn, signOut, SessionProvider } from 'next-auth/react'
import Head from 'next/head'

export default function Home() {

  const { data: session } = useSession()

  return (
    <div className="container">
      <Head>
        <title>Todo Heat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Todo Heat</h1>
        <p>A persistent todo app for inconsistent people</p>
        <Button>I&apos;m a styled button from Mantine!</Button>

        {session ? (<><p>Signed in as {session.user.email}</p><Button onClick={() => signOut()}>Sign out</Button></>) : (<>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
        </>)}
      </main>
      <footer>
      </footer>
    </div>
  )
}
