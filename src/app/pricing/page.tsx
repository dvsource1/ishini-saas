import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { HelpCircle } from 'lucide-react'

export default function Pricing() {
  return (
    <MaxWidthWrapper className="mb-8 mt-24 max-w-5xl text-center">
      <div className="mx-auto mb-10 sm:max-w-lg">
        <h1 className="text-6xl font-bold sm:text-7xl">Pricing</h1>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Whether you&apos;re just trying out our service or need more,
          we&apos;ve got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-2">
        <TooltipProvider>
          <div className="relative rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="p-5">
              <h3 className="font-display my-3 text-center text-3xl font-bold">
                Free Forever
              </h3>
              <p className="text-gray-500">For geniuses</p>
              <p className="font-display my-5 text-6xl font-semibold">$0.00</p>
              <p className="text-gray-500">per month</p>
            </div>

            <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-1">
                <p>10 bonus quizes</p>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger className="ml-1.5 cursor-default">
                    <HelpCircle className="h-4 w-4 text-zinc-500" />
                  </TooltipTrigger>
                  <TooltipContent className="w-80 p-2">
                    Apartfrom daily free test.
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="p-5">
              <h3 className="font-display my-3 text-center text-3xl font-bold">
                Pro Student
              </h3>
              <p className="text-gray-500">For curiouses</p>
              <p className="font-display my-5 text-6xl font-semibold">$3.77</p>
              <p className="text-gray-500">per month</p>
            </div>

            <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-1">
                <p>100 bonus quizes</p>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger className="ml-1.5 cursor-default">
                    <HelpCircle className="h-4 w-4 text-zinc-500" />
                  </TooltipTrigger>
                  <TooltipContent className="w-80 p-2">
                    Apartfrom unlimited tests.
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </TooltipProvider>
      </div>
    </MaxWidthWrapper>
  )
}
