import { ExternalLinkIcon } from '@heroicons/react/solid'
import Image from 'next/image'

export default function Example() {
  return (
    <div className="relative my-16 bg-white sm:my-24 lg:my-36">
      <div className="relative bg-primary-600 md:absolute md:left-0 md:h-full md:w-1/2">
        <div className="absolute top-0 left-0 z-20 w-full h-full bg-primary-400 opacity-60" />
        <Image
          src="/images/couple-on-website.jpeg"
          objectFit="cover"
          layout="fill"
          alt=""
          className="relative z-10 object-right-middle"
        />
      </div>
      <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold tracking-wider uppercase text-primary-700">
            Award winning support
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">
            We’re here to help
          </p>
          <p className="mt-3 text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-transparent rounded-md bg-primary-400 hover:bg-primary-500"
              >
                Visit the help center
                <ExternalLinkIcon
                  className="w-5 h-5 ml-3 -mr-1 text-primary-800"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
