import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ishini | Dashboard',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MaxWidthWrapper>{children}</MaxWidthWrapper>
}
