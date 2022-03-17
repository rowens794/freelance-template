import Image from 'next/image'

export default function Example() {
  return (
    <section id="about" className="bg-white">
      <div className="px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 space-y-12 lg:grid-cols-2">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Hi, I'm Ryan
            </h2>
            <p className="max-w-lg m-auto text-left text-gray-500 text-md">
              I've spent more than a decade working as an investment advisor,
              serving high-net-worth and institutional clients. During this part
              of my career I worked closely with clients and prospect and
              developed a deep understanding of the issues that drove them to
              make decisions. When I left investment management I knew I wanted
              to help investment advisors deliver their right message to their
              current and future customers.
            </p>
            <p className="max-w-lg m-auto text-left text-gray-500 text-md">
              As I looked out at the market for web development solutions for
              investment advisors for I saw a slew of low quality agencies that
              slap an advisor's logo on a slow, poorly written template with no
              support and charge hundreds of dollars a month. This struck as a
              very poor value proposition.
            </p>
            <p className="max-w-lg m-auto text-left text-gray-500 text-md">
              There was, of course, another side to the market filled with
              highed end agencies that produce beautiful high quality sites, but
              charge 5 figures for developement. This investment is hard to
              justify for small practices.
            </p>
            <p className="max-w-lg m-auto text-left text-gray-500 text-md">
              As a one man shop I serve as bridge between the two established
              models. I produce high quality custom work for my customers, but
              becuase I don't have the overhead of a full service agency, I can
              do so at a price that makes sense for small practices.
            </p>
          </div>
          <ul
            role="list"
            className="flex justify-center mx-auto space-y-16 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
          >
            <li>
              <div className="space-y-6">
                <Image
                  className="w-40 h-40 mx-auto rounded-full xl:h-56 xl:w-56"
                  src="/images/headshot.jpeg"
                  alt="Ryan Owens"
                  height={224}
                  width={224}
                />

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="inline-block">Ryan Owens, CFA</h3>
                    <a
                      href="https://www.linkedin.com/in/ryan-james-owens/"
                      className="inline-block ml-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <p className="text-primary-600">Web Developer /</p>
                    <p className="leading-3 text-primary-600">
                      Investment Advisor
                    </p>
                  </div>
                  <ul role="list" className="flex justify-center space-x-5">
                    <li></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
