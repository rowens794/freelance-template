import Image from 'next/image'

interface Props {}

export default function Example(props: Props) {
  return (
    <div
      className="relative grid grid-cols-1 px-4 m-auto mt-24 bg-white max-w-8xl lg:grid-cols-2 lg:py-24"
      id="heading"
    >
      <div className="relative hidden w-full text-right lg:block">
        <div className="absolute z-40 w-10 h-10 rounded-md -top-4 -right-4 bg-primary-200 lg:-top-8 lg:-right-8 lg:h-20 lg:w-20"></div>
        <div className="absolute z-30 rounded-md -top-12 -right-8 h-7 w-7 bg-primary-50 lg:-top-2 lg:right-7 lg:h-16 lg:w-16"></div>
        <div className="absolute z-20 w-5 h-5 rounded-md top-2 right-2 bg-primary-400 lg:top-10 lg:-right-2 lg:h-12 lg:w-12"></div>
        <Image
          src={'/images/couple-on-website.jpeg'}
          width={600}
          height={500}
          objectFit="cover"
          alt="Build a great website for your practice"
          className="z-10 object-right-top rounded-sm shadow-2xl"
        />
      </div>
      <div className="relative z-20 flex items-center w-full py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="w-full h-48 text-center lg:text-left">
          <span className="text-base font-semibold tracking-wide uppercase text-primary-600"></span>
          <h1>
            <span className="block mt-1 text-2xl font-light text-gray-500 sm:text-4xl lg:text-4xl">
              Creating High-Value Websites
            </span>
            <span className="block mt-1 text-3xl font-bold text-primary-900 sm:text-4xl lg:text-4xl">
              for Financial Advisors
            </span>
          </h1>
          <p className="max-w-xl px-8 mx-auto mt-5 text-left text-gray-500 md:ml-0 lg:px-0 lg:text-xl">
            How advisors should think about the strategy behind their website.
          </p>
        </div>
      </div>
    </div>
  )
}
