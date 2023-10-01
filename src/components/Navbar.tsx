'use client'
import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button, buttonVariants } from './ui/button'
import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/nextjs'

type NavbarProps = {}

const Navbar = ({}: NavbarProps) => {
  const { isLoaded, isSignedIn } = useAuth()

  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 flex font-semibold">
            <span>Ishini.</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            {isLoaded && !isSignedIn && (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Pricing
                </Link>
                <SignInButton mode="modal">
                  <Button size={'sm'} variant={'outline'}>
                    Login
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size={'sm'}>Register</Button>
                </SignUpButton>
              </>
            )}
            {isLoaded && isSignedIn && (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
