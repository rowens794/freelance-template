import Image from 'next/image'

const posts = [
  {
    title: 'Wellington Asset Management',
    category: 'Marketing Site',
    description:
      'Wellington is a brochure site for an Investment Management company that helps individuals, companies, and nonprofit organizations manage & invest financial assets so that they can meet their long-term goals.',
    imageUrl: '/images/wellington.jpg',
    buttonText: 'Visit Wellington',
    siteLink: 'https://demo-ria-site.netlify.app/',
    alt: 'Wealth Management Build',
  },
  {
    title: 'Logo Ipsum',
    category: 'Marketing Site',
    description:
      'Logo Ipsum is a concept design for an LPL financial advisory practice.  The site is structured in a way that helps visitors understand who the practice serves and how it can help them achieve their goals.',
    imageUrl: '/images/lorem.jpg',
    buttonText: 'Visit Logo Ipsum',
    siteLink: 'https://logoipsum-lpl.netlify.app/',
    alt: "Allison's Tax Build",
  },
  {
    title: 'Intellispect',
    category: 'Web Application',
    description:
      "Intelispect is a Software as a Service business that needed a front and backend that would help them display information on more than 1.5 million nonprofit organizations in the US. They're site built using some of the latest web technologies to ensure that it's fast, stable, and easy to use.",
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
      className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Some of My Work
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-gray-500 sm:mt-4 sm:text-lg">
            Take a look at the work I've done to thrill my clients.
          </p>
        </div>
        <div className="justify-center block gap-8 mx-auto mt-12 md:grid md:max-w-6xl">
          {posts.map((post, i) => {
            return <NewPost post={post} key={i} />
          })}
        </div>
      </div>
    </section>
  )
}

const OrigPost = ({ post }: { post: any }) => {
  return (
    <div
      key={post.title}
      className="flex flex-col max-w-sm mx-auto my-12 overflow-hidden rounded-lg shadow-lg lg:my-4"
    >
      <div className="flex-shrink-0">
        <Image
          src={post.imageUrl}
          alt={post.alt}
          height={225}
          width={448}
          className="object-cover w-full h-48"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <p className="text-sm font-medium text-primary-600">
            {post.category}
          </p>
          <a
            href={post.siteLink}
            className="block p-2 mt-2 rounded-md hover:bg-gray-100"
          >
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="mt-3 text-base text-gray-500">{post.description}</p>
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
  )
}

const NewPost = ({ post }: { post: any }) => {
  return (
    <div className="relative mx-auto my-12 max-w-[700px]">
      <p className="text-xl font-semibold text-primary-800">{post.title}</p>
      <p className="text-sm font-medium text-primary-600">{post.category}</p>
      <div
        key={post.title}
        className="relative mx-auto mt-4 mb-0 overflow-y-scroll rounded-md shadow-md md:my-4"
      >
        <div className="relative z-10 w-full border border-gray-200 text-[0px]">
          <Image
            src={post.imageUrl}
            alt={post.alt}
            width={1400 / 2}
            height={900 / 2}
            className="w-full"
            quality={50}
          />
        </div>
      </div>

      <div className="relative z-30 mx-4 -translate-y-8 rounded-md shadow-md bg-primary-600 xs:mx-8 md:absolute md:-bottom-16 md:-right-12 md:w-1/2">
        <div className="flex-1">
          <div className="block p-4 rounded-md ">
            <p className="mt-3 text-sm font-light text-gray-100">
              {post.description}
            </p>
            <div className="w-full my-2 text-right">
              <a
                href={post.siteLink}
                className="w-full text-sm text-right text-white underline"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
