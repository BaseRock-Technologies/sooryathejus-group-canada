import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sooryathejus Groups',
  description: 'Digital Marketting and Real Estate Services',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
