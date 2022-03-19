export default function Example() {
  return (
    <section
      id="copywriting"
      className="relative py-12 my-16 bg-white sm:my-24 lg:my-36"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-100 lg:bg-gray-300" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-100 " />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8">
        {/* Left Hand Side */}
        <div className="relative px-4 py-8 bg-gray-100 sm:px-6 lg:bg-transparent lg:py-16 lg:px-0 lg:pr-8 ">
          <div className="max-w-lg mx-auto text-center top-1/2 md:text-left lg:absolute lg:mx-0 lg:-translate-y-1/2 lg:transform">
            <h2 className="text-base font-semibold tracking-wide uppercase text-primary-700">
              Your Story Told by an Industry Pro
            </h2>
            <p className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              CFA Charterholder{' '}
              <span className="block md:inline-block">
                with a Decade of Experience
              </span>
            </p>
          </div>
        </div>

        {/* Right Hand Side */}
        <div className="px-4 bg-gray-100 sm:px-6 lg:flex lg:items-center lg:justify-end lg:bg-transparent lg:bg-none lg:py-16 lg:px-0 lg:pl-8">
          <div className="w-full max-w-lg mx-auto space-y-8 lg:mx-0">
            <div className="relative text-gray-700 ">
              <h3 className="hidden text-xl font-bold text-gray-800 lg:block">
                Copywriting by an Industry Insider
              </h3>
              <p className="my-4 ">
                I've spent over 10 years working in the investment management
                industry. I've managed over $2 billion, led investment teams,
                and met with hundreads of clients.
              </p>

              <p className="my-4 ">
                I know how to communicate the value of professional advisory
                services to prospective customers and I want to deliver that
                message for your practice.
              </p>

              <p className="my-4 ">
                Because I was raised in the industry, you not only get more
                compelling copy, but you spend less time hand-holding your
                website developer to ensure you get the results you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
