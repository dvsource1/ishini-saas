import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Sofia_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'

const sofia = Sofia_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ishini SAAS',
  description: "Ishini Wejensinghe's SAAS App",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            'bg-cool min-h-screen font-sans antialiased',
            sofia.className,
          )}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
