import { useEffect, useState } from 'react'
import Link from 'next/link'

interface PageData {
  heading1: string
  heading2: string
  intro: string
  image: string
  alt: string
  ctaText: string
  ctaLink: string
}

export default function index({
  heading1,
  heading2,
  intro,
  ctaText,
  ctaLink,
}: PageData) {
  let [size, setSize] = useState(600)

  useEffect(() => {
    function autoResize() {
      if (window.innerWidth > 1300) {
        setSize(600)
      } else {
        setSize(500)
      }
    }

    window.addEventListener('resize', autoResize)

    // Return a function to disconnect the event listener
    return () => window.removeEventListener('resize', autoResize)
  })

  return (
    <section className="relative z-10 py-16 overflow-hidden bg-white lg:py-0">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-24 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl lg:text-left">
                <span className="block xl:inline">{heading1}</span>{' '}
                <span className="block text-primary-600 xl:inline">
                  {heading2}
                </span>
              </h1>
              <p className="my-6 text-lg text-center text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl md:mt-5 md:text-xl lg:mx-0 lg:text-left">
                {intro}
              </p>
              <div className="mt-12 text-center sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="w-64 m-auto rounded-md shadow md:w-80 lg:m-0">
                  <Link href={ctaLink}>
                    <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-600 hover:bg-primary-700 md:py-4 md:px-10 md:text-lg">
                      {ctaText}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="invisible bg-primary-600 lg:visible lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className=" absolute bottom-8 left-8 w-[600px] xl:left-0 xl:h-[500px] xl:w-[750px]">
          <div className="absolute z-30 desktopOrb">
            <img
              src="/images/screen.svg"
              width={size}
              className=" saturate-25"
              alt="desktop friendly web design"
              aria-hidden="true"
            />
          </div>
          <div className="absolute z-30 mobileOrb xl:visible ">
            <img
              src="/images/mobile.svg"
              width={size * 0.667}
              className="saturate-75"
              alt="mobile friendly web design"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
