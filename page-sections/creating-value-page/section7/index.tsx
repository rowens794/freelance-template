import Image from 'next/image'
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/outline'

import Puzzle from '../../../components/illustrations/framework'

interface Props {}

export default function Example(props: Props) {
  return (
    <div className="overflow-hidden bg-white" id="cta">
      <div className="relative px-4 py-8 mx-auto sm:px-6 lg:max-w-5xl lg:py-16 lg:px-8">
        <div className="relative mx-auto text-base max-w-prose">
          <div className="absolute hidden w-32 top-4 -left-36 lg:block">
            <Puzzle target="Calls To Action" />
          </div>
          <div>
            <span className="text-base font-semibold tracking-wide uppercase text-primary-600">
              Encourage Action
            </span>
            <h2 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-700 sm:text-4xl">
              Present a Call To Action
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-8">
          <div className="mt-8 lg:mt-0 ">
            <div className="mx-auto mt-5 text-gray-500 prose-primary ">
              <p className="mx-auto my-4 prose">
                With an understanding of who is visiting your site, where they
                come from, and what they want, you are now in a position to ask
                them to take an action. As you serve your visitors content that
                satisfies their needs, present them with a call to action. This
                call to action should be so valuable to them that they can help
                but take action.
              </p>
              <p className="mx-auto my-4 prose">
                As a financial advisor, the first step in your sales process is
                getting contact information for people who have a need and a
                desire for your services. Don't worry about making the sale or
                setting up a meeting at this stage - it's too much to ask.
                Instead create an offer that's easy for a visitor to take action
                on right now.
              </p>
              <p className="mx-auto my-4 prose">
                By creating an offer that is both valuable and relevant to the
                user, you'll have no trouble getting submissions. However,
                formulating this offer requires some creativity. Books, guides,
                white papers, webinars, a portfolio review all incentivize
                someone to share their phone number or email address.
              </p>
              <p className="mx-auto my-4 prose">
                The less time and commitment you require from the user, the
                higher your conversion rate will be.
              </p>
              <p className="mx-auto my-4 prose">
                Simply asking a visitor to Book an Appointment won't perform
                well. It requires too much commitment from the visitor. Even if
                the consultation is free, there are hundreds of reasons why they
                wouldn't yet be ready to meet - if all you have is an offer for
                one, then you may lose them for good.
              </p>

              <p className="mx-auto my-4 prose">
                On the other hand, if you offer them a free guide in exchange
                for their contact information, there is a much higher
                probability that they'll complete the form. Once you have their
                contact info, you can market to them on your terms. Either by
                email or phone depending on what you ask for.
              </p>

              <ExampleCTAs />
              <p className="mx-auto my-4 prose">
                If you don't have a deliverable that you can immediately
                exchange for contact information, then be descriptive about why
                you're asking the user for information and try to keep your ask
                as low commitment as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ExampleCTAs = () => {
  return (
    <div className="px-4 mx-auto my-16 max-w-7xl">
      <div className="flex flex-col ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-6 overflow-hidden md:grid-cols-2">
              <div className="relative">
                <div className="absolute z-20 w-8 h-8 bg-red-200 rounded-full top-4 right-4 md:h-14 md:w-14">
                  <XCircleIcon
                    aria-hidden="true"
                    className="w-8 h-8 text-red-600 md:h-14 md:w-14"
                  ></XCircleIcon>
                </div>

                <Image
                  src="/images/sourcefa.com.png"
                  width={600}
                  height={350}
                  alt="Bad CTA Example"
                />
              </div>

              <div className="relative">
                <div className="absolute z-20 w-8 h-8 bg-green-200 rounded-full top-4 right-4 md:h-14 md:w-14">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="w-8 h-8 text-green-600 md:h-14 md:w-14"
                  ></CheckCircleIcon>
                </div>

                <Image
                  src="/images/fordfinancialsolutions.com.png"
                  width={600}
                  height={400}
                  alt="Good CTA Example"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
