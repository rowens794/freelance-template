interface PageData {
  secTitle: string
  secDesc: string
  secParagraph: string
  features: {
    name: string
    description: string
    icon: Function
  }[]
}

export default function Index({
  secTitle,
  secDesc,
  secParagraph,
  features,
}: PageData) {
  return (
    <section
      id="features"
      className="relative py-16 bg-white sm:py-32 lg:py-44"
    >
      <div className="max-w-md px-4 py-16 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-0 lg:px-8">
        <h2 className="text-base font-semibold tracking-wider uppercase text-primary-600">
          {secTitle}
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {secDesc}
        </p>
        <p className="mx-auto mt-5 text-gray-500 max-w-prose sm:text-lg">
          {secParagraph}
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.name}
                className={`pt-6 ${i === 3 ? 'lg:hidden' : ''}`}
              >
                <div className="flow-root px-3 pb-4 bg-gray-100 border-t-4 rounded-lg h-44 border-primary-800 drop-shadow-lg sm:h-48 sm:px-6 sm:pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-primary-500">
                        <feature.icon
                          className="w-8 h-8 text-white md:h-10 md:w-10"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-700 sm:text-xl">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
