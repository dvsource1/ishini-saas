import { SignInButton, SignOutButton, SignUpButton } from '@clerk/nextjs'
import { ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

type MobileNavProps = {
  isSignedIn: boolean | undefined
}

const MobileNav = ({ isSignedIn }: MobileNavProps) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggleOpen = () => setOpen(prev => !prev)

  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [pathname])

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen()
    }
  }

  return (
    <div className="sm:hidden">
      <Menu
        onClick={toggleOpen}
        className="relative z-50 h-5 w-5 text-zinc-700"
      />

      {isOpen ? (
        <div className="fixed inset-0 z-0 w-full animate-in fade-in-20 slide-in-from-top-5">
          <ul className="absolute grid w-full gap-3 border-b border-zinc-200 bg-white px-10 pb-8 pt-20 shadow-xl">
            {isSignedIn && (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent('/dashboard')}
                    className="flex w-full items-center font-semibold"
                    href="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <SignOutButton>
                    <Button
                      variant={'destructive'}
                      className="flex w-full items-center font-semibold">
                      Log Out
                    </Button>
                  </SignOutButton>
                </li>
              </>
            )}
            {!isSignedIn && (
              <>
                <li>
                  <li>
                    <Link
                      onClick={() => closeOnCurrent('/pricing')}
                      className="flex w-full items-center font-semibold"
                      href="/pricing">
                      Pricing
                    </Link>
                  </li>
                </li>
                <li>
                  <SignInButton mode="modal">
                    <Button
                      className="flex w-full items-center font-semibold"
                      variant={'outline'}>
                      Login
                    </Button>
                  </SignInButton>
                </li>
                <li>
                  <SignUpButton mode="modal">
                    <Button className="flex w-full items-center font-semibold">
                      Register
                    </Button>
                  </SignUpButton>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default MobileNav
