import { Html, Head, Main, NextScript } from 'next/document'
import { MantineProvider } from '@mantine/core'

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