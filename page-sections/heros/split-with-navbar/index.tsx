export default function index() {
  return (
    <div className="relative pt-12 bg-gray-50 lg:pt-0">
      <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Data to enrich your</span>{' '}
            <span className="block text-primary-600 xl:inline">
              online business
            </span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary-600 hover:bg-primary-700 md:py-4 md:px-10 md:text-lg"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-primary-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          alt=""
        />
      </div>
    </div>
  )
}
