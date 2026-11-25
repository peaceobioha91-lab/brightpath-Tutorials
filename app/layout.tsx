import { Bricolage_Grotesque, Nunito_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const headingFont = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-bricolage-grotesque',
})

const bodyFont = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'BrightPath Tutorials',
  description: 'BrightPath Tutorials',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  )
}
