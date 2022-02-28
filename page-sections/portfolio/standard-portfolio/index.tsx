import Image from 'next/image'

const posts = [
  {
    title: "Allison's Tax & Financial Services",
    category: 'Marketing Site',
    description:
      "Allison's is a Public Accounting office that focuses primarily on tax work.  As customers have become more and more tech savvy, this business needed a web presence that showed up on Google alongside some of the major national players. ",
    imageUrl: '/images/tax-site-mock.jpg',
    buttonText: "Visit Allison's",
    siteLink: 'https://tax-site-staging.netlify.app/',
    alt: "Allison's Tax Build",
  },
  {
    title: 'Intellispect',
    category: 'Web Application',
    description:
      "Intelispect is a Software as a Service business that needed a front and backend that would help them display information on more than 1.5 million nonprofit organizations in the US.  There site built using some of the latest web technologies to ensure it's fast, stable, and easy to use.",
    imageUrl: '/images/intellispect.jpg',
    buttonText: 'Visit Intellispect',
    siteLink: 'https://www.intellispect.co',
    alt: 'Intellispect Build',
  },
]

export default function Example() {
  return (
    <section
      id="portfolio"
      className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:px-8 lg:pt-28 lg:pb-28"
    >
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Some of Our Work
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            Take a look at the work we've done to thrill our clients.
          </p>
        </div>
        <div className="justify-center block gap-5 mx-auto mt-12 lg:flex lg:max-w-5xl">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col max-w-md mx-auto my-4 overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <Image
                  src={post.imageUrl}
                  alt={post.alt}
                  height={192}
                  width={448}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {post.category}
                  </p>
                  <a
                    href={post.siteLink}
                    className="block p-2 mt-2 rounded-md hover:bg-gray-100"
                  >
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
              <div className="w-full h-12 text-right">
                <a
                  className="w-24 p-4 m-4 text-white rounded-md bg-primary-600 hover:bg-primary-700"
                  href={post.siteLink}
                >
                  {post.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
