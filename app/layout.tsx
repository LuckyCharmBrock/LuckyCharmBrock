import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lucky Charm',
  description: 'Lucky Charm on Bitrock',
  generator: 'PopCatDev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
