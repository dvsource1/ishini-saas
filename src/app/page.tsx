import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function Home() {
  return (
    <MaxWidthWrapper className='mt-28 sm:mt-40 mb-12 flex flex-col items-center justify-center text-center '>
      <div className="mx-auto flex mb-4 space-x-2 px-7 py-2 shadow-md hover:shadow-lg backdrop-blur max-w-fit justify-center items-center overflow-hidden bg-white hover:bg-white/50 rounded-full border border-gray-200 hover:border-gray-300 transition-all">
        <p className="text-sm font-semibold text-gray-700">App is now Live!</p>
      </div>
    </MaxWidthWrapper>
  )
}
