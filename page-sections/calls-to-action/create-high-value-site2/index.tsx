import Image from 'next/image'
import Link from 'next/link'

export default function Example() {
  return (
    <div className="relative py-16 my-16 bg-white sm:my-24 lg:my-36">
      <div
        className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl bg-primary-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div
              className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
              aria-hidden="true"
            />
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="relative overflow-hidden aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <div className="absolute top-0 left-0 z-20 w-full h-full rounded-3xl bg-primary-400 opacity-20" />

                <Image
                  src="/images/couple-on-website.jpeg"
                  objectFit="cover"
                  layout="fill"
                  alt="Create a great website for your practice"
                  className="relative z-10 object-cover object-center rounded-3xl"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-primary-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div
              className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute transform bottom-full left-full translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-primary-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute transform top-full -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-primary-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div className="relative max-w-md px-4 py-12 mx-auto space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <h2
                className="text-3xl font-extrabold text-white"
                id="join-heading"
              >
                Creating High Value Websites
              </h2>
              <p className="text-lg text-white">
                Read the guide on how Financial Advisors can create a website
                that creates real value for their practice.
              </p>
              <Link href="/create-value-through-the-web">
                <a className="block w-full px-5 py-3 text-base font-medium text-center bg-white border border-transparent rounded-md shadow-md text-primary-700 hover:bg-gray-50 sm:inline-block sm:w-auto">
                  Read Guide
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
