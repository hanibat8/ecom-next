import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Head from 'next/head'
import App from '@/components/App'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Head>
        <title>My next app</title>
      </Head>
      <body className={inter.className}>
        <App>
          <Layout>{children}</Layout>
        </App>
        
      </body>
    </html>
  )
}
