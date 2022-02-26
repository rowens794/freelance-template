import Link from 'next/link'

interface Inputs {
  heading: string
  subHeading: string
  link: string
  buttonText: string
}

export default function Index({
  heading,
  subHeading,
  link,
  buttonText,
}: Inputs) {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">{heading}</span>
          <span className="block">{subHeading}</span>
        </h2>
        <div className="flex justify-center mt-8">
          <div className="inline-flex rounded-md shadow">
            <Link href={link}>
              <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-600 hover:bg-primary-700">
                {buttonText}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
