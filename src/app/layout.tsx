import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Providers from './Providers'
import Script from "next/script";



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextAuth',
  description: 'NextAuth with Lytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Lytics Tracking Script */}
        <Script src="/lytics.js" type="text/javascript" strategy="beforeInteractive"/>
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
