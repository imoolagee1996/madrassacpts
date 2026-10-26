import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Jamia Sufiya Cape Town | Madrassa in Plumstead',
      },
      {
        name: 'description',
        content:
          'Jamia Sufiya Cape Town is a madrassa in Plumstead, Cape Town, guided by love, struggle, and faith.',
      },
    ],
    links: [{ rel: 'icon', href: '/favicon.png', type: 'image/png' }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
