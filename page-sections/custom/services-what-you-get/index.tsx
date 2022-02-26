import { CheckIcon } from '@heroicons/react/outline'
import Link from 'next/link'

let expectionTable = [
  '60-90 minute kickoff call',
  'Up-to a 5 Page Website',
  'Unlimited Edits to the Site',
  'Free Website Hosting',
  'Unlimited Support',
  'Logo & Graphic Design (if needed)',
]

export default function Index() {
  return (
    <div className="relative py-32 overflow-hidden bg-white">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative h-full mx-auto text-lg max-w-prose"
          aria-hidden="true"
        >
          <svg
            className="absolute transform translate-x-32 top-12 left-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute transform translate-x-32 bottom-12 left-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          <h1>
            <span className="block text-base font-semibold tracking-wide text-center uppercase text-primary-600">
              What do You Get, and
            </span>
            <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              What Does it Cost?
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            Every engagement is unique and we will adapt to ensure your needs
            are met. However, what you should expect when you work with us is
            the following:
          </p>

          <ul className="grid grid-cols-1 mt-8 ml-12 text-gray-500 list-disc sm:ml-8 sm:grid-cols-2">
            {expectionTable.map((item) => {
              return (
                <li key={item} className="py-2">
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        <PricingSection />
      </div>
    </div>
  )
}

const PricingSection = () => {
  const hobbyFeatures = [
    '2 Logo Revisions',
    'All Logo File Types',
    'Stock Images',
  ]
  const scaleFeatures = [
    '>5 Page Sites',
    'Blogging Capabilities, or',
    'Blog Post Writing',
  ]
  const growthFeatures = [
    'Copywriting & Design',
    'Unlimited Edits',
    '24/7 Customer Support',
    'Lifetime Updates',
    'Hosting Included',
  ]

  return (
    <div className="relative z-20 pb-12 mt-16 lg:mt-28 lg:pb-20">
      <div className="relative z-0">
        <div className="absolute inset-0 h-5/6 lg:h-2/3" />
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-7">
            <div className="max-w-md mx-auto border border-gray-300 rounded-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
              <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                <div className="flex flex-col flex-1">
                  <div className="px-6 py-10 bg-white">
                    <div>
                      <h3
                        className="text-2xl font-medium text-center text-gray-900"
                        id="tier-hobby"
                      >
                        Logos & Design
                      </h3>
                      <div className="flex items-center justify-center mt-4">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                            $
                          </span>
                          <span className="font-extrabold">0</span>
                        </span>
                        <span className="text-lg font-medium text-gray-500">
                          w/ Plan
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-gray-100 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                    <ul role="list" className="space-y-4">
                      {hobbyFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 w-6 h-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <div className="rounded-lg shadow-md">
                        <Link href="/contact">
                          <a
                            className="block w-full px-6 py-3 text-base font-medium text-center bg-white border border-transparent rounded-lg text-primary-600 hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Contact Us
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto mt-10 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
              <div className="relative z-10 rounded-lg shadow-xl">
                <div
                  className="absolute inset-0 border-2 rounded-lg pointer-events-none border-primary-600"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 top-0 transform translate-y-px">
                  <div className="flex justify-center transform -translate-y-1/2">
                    <span className="inline-flex px-4 py-1 text-sm font-semibold tracking-wider text-white uppercase rounded-full bg-primary-600">
                      Most popular
                    </span>
                  </div>
                </div>
                <div className="px-6 pt-12 pb-10 bg-white rounded-t-lg">
                  <div>
                    <h3
                      className="text-3xl font-semibold text-center text-gray-900 sm:-mx-6"
                      id="tier-growth"
                    >
                      Standard Plan
                    </h3>
                    <div className="flex items-center justify-center mt-4">
                      <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl">
                        <span className="mt-2 mr-2 text-4xl font-medium">
                          $
                        </span>
                        <span className="font-extrabold">150</span>
                      </span>
                      <span className="text-2xl font-medium text-gray-500">
                        /month
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pt-10 pb-8 border-t-2 border-gray-100 rounded-b-lg bg-gray-50 sm:px-10 sm:py-10">
                  <ul role="list" className="space-y-4">
                    {growthFeatures.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon
                            className="flex-shrink-0 w-6 h-6 text-green-500"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <div className="rounded-lg shadow-md">
                      <Link href="/contact">
                        <a
                          className="block w-full px-6 py-4 text-xl font-medium leading-6 text-center text-white border border-transparent rounded-lg bg-primary-600 hover:bg-primary-700"
                          aria-describedby="tier-scale"
                        >
                          Contact Us
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto mt-10 border border-gray-300 rounded-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none">
              <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                <div className="flex flex-col flex-1">
                  <div className="px-6 py-10 bg-white">
                    <div>
                      <h3
                        className="text-2xl font-medium text-center text-gray-900"
                        id="tier-scale"
                      >
                        Custom Needs
                      </h3>
                      <div className="flex items-center justify-center mt-4">
                        <span className="text-xl font-medium text-gray-700">
                          Let's Talk
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-gray-100 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                    <ul role="list" className="space-y-4">
                      {scaleFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 w-6 h-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <div className="rounded-lg shadow-md">
                        <Link href="/contact">
                          <a
                            className="block w-full px-6 py-3 text-base font-medium text-center bg-white border border-transparent rounded-lg text-primary-600 hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Contact Us
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
