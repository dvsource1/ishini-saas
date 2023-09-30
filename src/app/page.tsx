import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40 ">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 hover:shadow-lg">
          <p className="text-sm font-semibold text-gray-700">
            App is now Live!
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Challage your{' '}
          <span className="font-extrabold text-pink-600">Science</span>{' '}
          <span className="text-blue-600">knowledge</span> in seconds.
        </h1>

        <p className="mt-5 max-w-prose text-stone-700 sm:text-lg">
          Welcome to our interactive A/L Science Knowledge Testing App! Dive
          into a smart and friendly learning experience that will put your
          science knowledge to the test. Explore a world of quizzes and
          challenges designed to help you excel in your A/L science studies.
        </p>

        <Link
          className={buttonVariants({ size: 'lg', className: 'mt-5' })}
          href={'/dasboard'}
          target="_blank">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
    </>
  )
}
