import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'

type NavbarProps = {}

const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 flex font-semibold">
            <span>Ishini.</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/dashboard"
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}>
              Dashboard
            </Link>
            <Link
              href="/signup"
              className={buttonVariants({
                size: 'sm',
              })}>
              Sign Up
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
