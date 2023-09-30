import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Sofia_Sans } from 'next/font/google'

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
    <html lang="en">
      <body
        className={cn(
          'grainy min-h-screen font-sans antialiased',
          sofia.className,
        )}>
        {children}
      </body>
    </html>
  )
}
