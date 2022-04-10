import Image from 'next/image'

const posts = [
  {
    title: 'Wellington Asset Management',
    category: 'Marketing Site',
    description:
      'Wellington is a brochure site for an Investment Management company that helps individuals, companies, and nonprofit organizations manage & invest financial assets so that they can meet their long-term goals.',
    pageImg: '/images/wellington.png',
    blurImg: '/images/wellington-blur.jpg',
    imageUrl: '/images/Wellington.jpg',
    buttonText: 'Visit Wellington',
    siteLink: 'https://demo-ria-site.netlify.app/',
    alt: 'Wealth Management Build',
    height: 11800,
    width: 1980,
  },
  {
    title: "Allison's Tax & Financial Services",
    category: 'Marketing Site',
    description:
      "Allison's is a Public Accounting office that focuses primarily on tax work.  As customers have become more and more tech-savvy, this business needed a web presence that showed up on Google alongside some of the major national players. ",
    pageImg: '/images/logoipsum.png',
    blurImg: '/images/logoipsum-blur.jpg',
    imageUrl: '/images/wellingtonScreen.jpg',
    buttonText: "Visit Allison's",
    siteLink: 'https://tax-site-staging.netlify.app/',
    alt: "Allison's Tax Build",
    height: 8540,
    width: 1980,
  },
  {
    title: 'Intellispect',
    category: 'Web Application',
    description:
      "Intelispect is a Software as a Service business that needed a front and backend that would help them display information on more than 1.5 million nonprofit organizations in the US. They're site built using some of the latest web technologies to ensure that it's fast, stable, and easy to use.",
    pageImg: '/images/intellispect.png',
    blurImg: '/images/intellispect-blur.jpg',
    imageUrl: '/images/wellingtonScreen.jpg',
    buttonText: 'Visit Intellispect',
    siteLink: 'https://www.intellispect.co',
    alt: 'Intellispect Build',
    height: 13578,
    width: 1980,
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
        <div className="justify-center block gap-8 mx-auto mt-12 lg:grid lg:max-w-6xl lg:grid-cols-3">
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
    <div className="relative">
      <div
        key={post.title}
        className="relative mx-auto my-12 max-w-[495px] overflow-y-scroll rounded-md border border-gray-400 shadow-2xl"
      >
        <div className="relative z-10 h-[500px] w-full">
          <Image
            src={post.pageImg}
            alt={post.alt}
            width={post.width / 4}
            height={post.height / 4}
            className="w-full"
            blurDataURL={post.blurUrl}
            quality={50}
          />
        </div>
      </div>

      <div className="absolute z-30 w-full mx-auto bottom-6 md:bottom-14 ">
        <p className="relative z-40 mx-auto w-full max-w-[495px] bg-primary-800 px-2 pt-2 text-center text-lg font-light text-white opacity-90">
          {post.title}
        </p>
        <p className="relative z-40 mx-auto w-full max-w-[495px] bg-primary-800 px-2 pb-2 text-center text-sm font-light text-white opacity-90">
          {post.category}
        </p>
      </div>
    </div>
  )
}
