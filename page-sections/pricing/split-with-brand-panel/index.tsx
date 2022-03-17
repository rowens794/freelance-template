import {
  ColorSwatchIcon,
  CheckIcon,
  PlusIcon,
  ChartSquareBarIcon,
  PencilAltIcon,
  BookOpenIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'

const features = [
  {
    name: '5 Page Site',
    icon: BookOpenIcon,
    description:
      'Convey all of the information your customers need, quickly and effectively.  If you need additional pages, I can provide a quote for the extra work.',
  },
  {
    name: 'Unlimited Edits',
    icon: PencilAltIcon,
    description:
      "Any time there is a change to your business that needs to be reflected on your site, just give me a call and it's done - same day.",
  },
  {
    name: 'Custom Design/Development',
    icon: ColorSwatchIcon,
    description:
      "I don't build cookie cutter sites.  Every site I build is hand coded to ensure the best performance, reliabilty, and conversion potential.",
  },
  {
    name: 'Google Analytics',
    icon: ChartSquareBarIcon,
    description:
      'I include a google analytics integration for free, so that you can see exactly how your site is being utilized and converting traffic into customers.',
  },
]
const checklist = [
  'Hosting Included',
  '24/7 Customer Support',
  'Unlimited Edits',
  'Google Analytics',
  'No Minimum Contract',
  'Cancel Anytime',
]

export default function Example() {
  return (
    <section id="pricing" className="relative my-16 bg-white sm:my-24 lg:my-36">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-primary-700" />
      </div>

      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8">
        <div className="px-4 py-16 bg-white sm:py-24 sm:px-6 lg:px-0 lg:pr-8">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h2 className="text-base font-semibold tracking-wide uppercase text-primary-600">
              Full-featured
            </h2>
            <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              A Beautiful Site that Drives Business
            </p>
            <dl className="mt-12 space-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center w-12 h-12 rounded-md bg-primary-500">
                      <feature.icon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="px-4 py-16 bg-primary-700 sm:py-24 sm:px-6 lg:flex lg:items-center lg:justify-end lg:bg-none lg:px-0 lg:pl-8">
          <div className="w-full max-w-lg mx-auto space-y-8 lg:mx-0">
            <div>
              <h2 className="sr-only">Price</h2>
              <p className="relative grid grid-cols-2">
                <span className="flex flex-col text-center">
                  <span className="text-5xl font-extrabold tracking-tight text-white">
                    $0
                  </span>
                  <span className="mt-2 text-base font-medium text-primary-200">
                    Down
                  </span>
                  <span className="sr-only">plus</span>
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-12 pointer-events-none"
                  aria-hidden="true"
                >
                  <PlusIcon
                    className="w-6 h-6 text-primary-300"
                    aria-hidden="true"
                  />
                </span>
                <span>
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-extrabold tracking-tight text-white">
                      $300
                    </span>
                    <span className="mt-2 text-base font-medium text-primary-200">
                      Per month
                    </span>
                  </span>
                </span>
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-px overflow-hidden rounded sm:grid-cols-2"
            >
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center px-4 py-4 space-x-3 text-base text-white bg-opacity-50 bg-primary-800"
                >
                  <CheckIcon
                    className="w-6 h-6 text-primary-300"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <a className="flex items-center justify-center w-full px-8 py-4 text-lg font-medium leading-6 bg-white border border-transparent rounded-md text-primary-600 hover:bg-primary-50 md:px-10">
                Get started today
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
