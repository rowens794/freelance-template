import Button from '../../../components/buttons/standard-cta-dark-round'
import Banner from '../../../components/banners/floating-secondary'

interface PageData {
  heading1: string
  heading2: string
  intro: string
  image: string
  alt: string
  ctaText: string
  ctaLink: string
}

export default function index({
  heading1,
  heading2,
  intro,
  image,
  alt,
  ctaText,
  ctaLink,
}: PageData) {
  return (
    <div className="relative z-10 pt-12 overflow-hidden to bg-primary-500 bg-gradient-to-b from-primary-600 lg:pt-0">
      <div className="max-w-full px-4 m-auto mt-28 sm:px-8 lg:max-w-5xl">
        <Banner />
        <div className="relative z-20 w-full mt-12 ">
          <div className="relative max-w-lg m-auto text-center md:m-4 md:text-left">
            <h1 className="relative z-20 text-4xl font-extrabold text-white drop-shadow-md sm:text-5xl md:text-6xl ">
              {heading1}
            </h1>
            <h2 className="relative z-20 my-4 text-xl font-bold text-primary-200 drop-shadow-md sm:text-2xl md:text-3xl ">
              {heading2}
            </h2>
            <p className="relative z-20 my-12 text-md text-primary-50 drop-shadow-md sm:text-lg ">
              {intro}
            </p>
            <div className="relative z-20 w-full text-center ">
              <Button text={ctaText} href={ctaLink} />
            </div>
          </div>
        </div>
      </div>

      {/* Circle Graphics */}
      <div className="absolute z-10 w-64 h-64 rounded-full -right-32 -bottom-24 bg-primary-500 md:right-32 lg:h-96 lg:w-96"></div>
      <div className="absolute z-10 rounded-full -left-32 -bottom-64 h-96 w-96 bg-primary-400"></div>

      <img src="/images/white-smile.svg" className="relative z-20 " />
    </div>
  )
}
