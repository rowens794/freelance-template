import Image from 'next/image'

interface sectionContent {
  header: string
  boldText: string
  content: string[]
  Img: string | Function
  alt: string
  direction: string
}

export default function Example({
  header,
  boldText,
  content,
  Img,
  alt,
  direction,
}: sectionContent) {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className={`relative z-20 grid grid-cols-1 md:grid-cols-2 md:gap-8`}
        >
          {/* Image Content */}
          <div className="relative hidden pt-6 mx-auto text-right md:block">
            {typeof Img === 'string' ? (
              <img
                className="inline-block object-cover object-center rounded-lg "
                src={Img}
                alt={alt}
                width={400}
                height={400}
              />
            ) : (
              <Img />
            )}
          </div>

          {/* Text Content */}
          <div className={` ${direction === 'RTL' ? ' -order-1 ' : ''}`}>
            <div className="mx-auto text-base max-w-prose">
              <div>
                <h2 className="text-base font-semibold tracking-wide uppercase text-primary-600">
                  {header}
                </h2>
                <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  {boldText}
                </h3>
              </div>
            </div>

            {content.map((paragraph, i) => {
              return (
                <div
                  className="mx-auto mt-5 prose text-gray-500 prose-primary lg:col-start-1 lg:row-start-1 lg:max-w-none"
                  key={i}
                >
                  <p>{paragraph}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
