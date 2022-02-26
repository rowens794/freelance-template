import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

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
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold tracking-wider uppercase text-primary-600">
          {secTitle}
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {secDesc}
        </p>
        <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
          {secParagraph}
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 ">
                <div className="flow-root px-6 pb-8 bg-gray-100 rounded-lg h-52">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-primary-500">
                        <feature.icon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
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
