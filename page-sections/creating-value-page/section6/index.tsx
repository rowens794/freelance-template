import Image from 'next/image'

import Puzzle from '../../../components/illustrations/framework'

interface Props {}

export default function Example(props: Props) {
  return (
    <div className="overflow-hidden bg-white" id="intent">
      <div className="relative px-4 py-8 mx-auto sm:px-6 lg:max-w-5xl lg:py-16 lg:px-8">
        <div className="relative mx-auto text-base max-w-prose">
          <div className="absolute hidden w-32 top-4 -left-36 lg:block">
            <Puzzle target="User Intent" />
          </div>
          <div>
            <span className="text-base font-semibold tracking-wide uppercase text-primary-600">
              Giving Users What They Want
            </span>
            <h2 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-700 sm:text-4xl">
              Understanding User Intent
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-8">
          <div className="mt-8 lg:mt-0 ">
            <div className="mx-auto mt-5 text-gray-500 prose-primary ">
              <p className="mx-auto my-4 prose">
                People don't come to your website for no reason. They are there
                because they want to answer a question or take an action. As the
                operator of a website, you want to do everything in your power
                to satisfy that user's need as painlessly as possible. To do
                that, you need to make an informed inference about why that
                visitor is on your site in the first place.
              </p>

              <p className="mx-auto my-4 prose">
                To simulate understanding user intent, let's look at a few
                examples.
              </p>

              <Table />

              <p className="mx-auto my-4 prose">
                You could think through hundreds of these examples. As you do,
                what you'll find is that even if there are different paths users
                take to arrive at your site, the content you need to provide
                once they are there falls into certain buckets. Your goal is to
                make sure each "content bucket" has a place on your website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Table = () => {
  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className=" bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="w-64 py-3 pl-4 pr-3 text-xs font-medium tracking-wide text-left text-gray-500 uppercase sm:pl-6"
                    >
                      Scenario
                    </th>
                    <th
                      scope="col"
                      className="w-48 px-3 py-3 text-xs font-medium tracking-wide text-center text-gray-500 uppercase"
                    >
                      Who is It?
                    </th>
                    <th
                      scope="col"
                      className="w-64 px-3 py-3 text-xs font-medium tracking-wide text-center text-gray-500 uppercase "
                    >
                      Desired Outcome
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {questions.map((q, i) => {
                    return (
                      <tr key={i}>
                        <td className="max-w-xs py-2 pl-4 pr-3 text-xs text-gray-700 sm:pl-6">
                          {q.scenario}
                        </td>
                        <td className="px-3 py-2 text-xs text-center text-gray-700">
                          {q.who}
                        </td>
                        <td className="max-w-xs px-3 py-2 text-xs text-left text-gray-700 ">
                          {q.outcome}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

let questions = [
  {
    scenario:
      'Someone arrives at your site by typing the URL of your firm’s contact page.',
    who: 'Likely Current Client',
    outcome:
      'You want to provide them with the address and phone number of your offices.',
  },
  {
    scenario:
      'Someone clicks on a link at another site to your firm’s fees page',
    who: 'Likely Prospective Client',
    outcome:
      'You want to provide them with fee information and entice them to take an action.',
  },
  {
    scenario: 'Someone clicks on an add that you bought on Google.',
    who: 'Prospective Client',
    outcome:
      'You want to present them with information about who you serve, why your different, and how to take action.',
  },
  {
    scenario:
      'Someone arrives at your website by searching for phrase "financial advisor near me"',
    who: 'Prospective Client',
    outcome:
      'You want to present them with information about who you serve, why your different, and how to take action.',
  },
  {
    scenario:
      'Someone arrives at your website by searching for your firm’s name.',
    who: 'Unknown',
    outcome:
      'You want to present general information, ideally your home page and prioritize the needs of a prospective client ',
  },
]
