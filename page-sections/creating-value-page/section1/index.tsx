import Image from 'next/image'

interface Props {}

export default function Example(props: Props) {
  return (
    <div className="overflow-hidden bg-white" id="intro">
      <div className="relative px-4 py-8 mx-auto sm:px-6 lg:max-w-5xl lg:py-16 lg:px-8">
        <div className="mx-auto text-base max-w-prose ">
          <div>
            <span className="text-base font-semibold tracking-wide uppercase text-primary-600">
              Getting Started
            </span>
            <h2 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-700 sm:text-4xl">
              An Introduction to the Web Properties for Financial Advisors
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-8">
          <div className="mt-8 lg:mt-0 ">
            <div className="mx-auto mt-5 text-gray-500 prose-primary ">
              <p className="mx-auto my-4 prose">
                It's no secret that the internet is a growth channel for
                business. For decades we've seen consumer brands, publishing
                networks, and software companies thrive as a result of the web's
                self-serve, always available nature.{' '}
              </p>
              <p className="mx-auto my-4 prose">
                It has, however, felt like professional services firms have
                missed out on the growth. For those inside the industry, it was
                clear why: these businesses are built on relationships, and you
                can't sell a relationship online.
              </p>
              <p className="mx-auto my-4 prose">
                The lack of web-based growth is changing for professional
                service providers and financial advisors, in particular. Over
                the last decade, there's been a shift in how consumers search
                for professional help with their financial affairs. It used to
                be purely referral-based. But increasingly, people turn to the
                web to find an advisor.
              </p>
              <div className="relative my-8 lg:my-12">
                <div className="absolute z-20 p-2 text-xs bg-white top-2 left-2 md:top-24 md:left-48 md:text-base">
                  <span className="block font-light text-center ">
                    Freqency of the search term
                  </span>
                  <span className="block font-semibold text-center">
                    "financial advisors near me"
                  </span>
                  <span className="block font-light text-center">
                    on Google
                  </span>
                </div>
                <Image
                  src="/images/search-term.png"
                  width={950}
                  height={400}
                  className="relative z-10"
                />
                <p className="m-0 text-xs italic font-light text-right text-gray-500">
                  source:{' '}
                  <a
                    className="text-right underline light text text-primary-500"
                    href="https://trends.google.com/trends/explore?q=financial%20advisors%20near%20me&date=all&geo=US"
                  >
                    Google Trends
                  </a>
                </p>
              </div>
              <p className="mx-auto my-4 prose">
                The chart above shows the frequency of the search term:
                "Financial Advisors Near Me" on Google. When someone types this
                query into Google - they are ready to make a hire. It's high
                intent.
              </p>
              <p className="mx-auto my-4 prose">
                This chart clearly shows that people are turning to the internet
                to find their advisor. When they run this search, you want them
                to see your practice and understand why they should work with
                you.
              </p>
              <p className="mx-auto my-4 prose">
                This trend won't be slowing down. It demonstrated robust and
                consistent growth even before Covid-19. Now, in a post-pandemic
                world where face-to-face interaction is plunging due to the work
                from home revolution, making yourself visible and desirable
                online is a necessity for continued growth.
              </p>

              <p className="mx-auto my-4 prose">
                Throughout this document, we'll be exploring the steps financial
                advisors need to take to make sure they are building an online
                foundation that will allow them to keep up with competitors.
              </p>

              <p className="mx-auto my-4 prose">
                This trend won't be slowing down. It demonstrated robust and
                consistent growth even before Covid-19. Now, in a post-pandemic
                world where face-to-face interaction is plunging due to the work
                from home, making yourself visible and desirable online is a
                necessity for continued growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
