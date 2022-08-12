import { Html, Head, Main, NextScript } from 'next/document'
import { MantineProvider } from '@mantine/core'
import { SessionProvider } from 'next-auth/react'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <Main />
          </MantineProvider>
        <NextScript />
      </body>
    </Html>
  )
}