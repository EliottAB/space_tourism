import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Space tourism',
  description: 'Come explore the space with space tourism !',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
