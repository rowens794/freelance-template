interface SectionProps {
  heading: string
  boldText: string
  bodyText: string
}

export default function Index({ heading, boldText, bodyText }: SectionProps) {
  return (
    <div className="relative pt-8 bg-white sm:pt-16 lg:pt-24">
      <div className="relative z-20 px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase text-primary-600">
            {heading}
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {boldText}
          </p>
          <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
            {bodyText}
          </p>
        </div>
      </div>
    </div>
  )
}
