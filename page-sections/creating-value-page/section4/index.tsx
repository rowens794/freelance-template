import Puzzle from '../../../components/illustrations/framework'

interface Props {}

export default function Example(props: Props) {
  return (
    <div className="overflow-hidden bg-white" id="users">
      <div className="relative px-4 py-8 mx-auto sm:px-6 lg:max-w-5xl lg:py-16 lg:px-8">
        <div className="relative mx-auto text-base max-w-prose">
          <div className="absolute hidden w-32 top-4 -left-36 lg:block">
            <Puzzle target="Users" />
          </div>
          <div>
            <span className="text-base font-semibold tracking-wide uppercase text-primary-600">
              Identify the Want
            </span>
            <h2 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-700 sm:text-4xl">
              The Users of Your Website
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-8">
          <div className="mt-8 lg:mt-0 ">
            <div className="mx-auto mt-5 text-gray-500 prose-primary ">
              <p className="mx-auto my-4 prose">
                The first step is understanding who will use your site and what
                they want to accomplish when they visit it. For 99% of advisors,
                this includes three categories: "Current Clients," "Prospective
                Clients," and "Others."
              </p>
              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                Current Clients
              </h3>
              <p className="mx-auto my-4 prose">
                Put yourself in the shoes of a current client of your practice.
                When they come to your website, what motivates them? They want
                something; otherwise, they wouldn't have taken the time to type
                in your URL into their browser.
              </p>
              <p className="mx-auto my-4 prose">
                When they show up, they are either looking for newly released
                information, or a refresher on information previously conveyed
                to them.
              </p>
              <p className="mx-auto my-4 prose">
                They come because they forgot the address of your office, or the
                type of clients you work with, or where you studied. They come
                with a concrete idea of the information they want to retrieve.
              </p>
              <p className="mx-auto my-4 prose">
                If they find the information - fantastic! If they can't, they'll
                likely ask you directly by phone, email, or even at your next
                meeting.
              </p>
              <p className="mx-auto my-4 prose">
                Providing clients with direct access to the information they
                want leads to an outstanding client experience. However, you
                have to remember there is minimal risk to the relationship if
                they can't find what they want. While you should be conscious of
                existing clients' desires, you shouldn't prioritize their needs
                over prospective clients.
              </p>
              <p className="mx-auto my-4 prose">
                Much like your clients don't need to understand every manager or
                security selection decision made in their portfolio, you only
                need to have a broad understanding of the topics that will drive
                results from your website so that you can make informed
                decisions when you outsource the project.
              </p>
              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                Prospective Clients
              </h3>
              <p className="mx-auto my-4 prose">
                When prospective clients find their way to your site, they are
                almost certainly there to learn more about you and how you can
                help them.
              </p>
              <p className="mx-auto my-4 prose">
                This group is the most valuable as they represent the potential
                for new revenue. However, they are also fleeting. You may only
                have a single chance to convince them that they are a fit for
                your services and entice them to make contact.
              </p>
              <p className="mx-auto my-4 prose">
                When a prospective client arrives at your site, you need to let
                them know who you are, who you serve, and how you can help them
                as quickly as possible. Ideally, this occurs within seconds of
                their arrival. If a prospective client can't immediately
                determine why they should work with you, there is a very high
                chance they will move on to the next advisor.
              </p>
              <p className="mx-auto my-4 prose">
                Advisors are usually far too worried about narrowly defining who
                they serve. Niching down too far feels self-limiting. However,
                when you dig into who is showing up on your site and how they
                are getting there, it's usually the case that one group
                dominates all others. You should cater your message directly to
                them.
              </p>

              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                Other
              </h3>
              <p className="mx-auto my-4 prose">
                I refer to the final category of users as simply other. It
                includes anyone else who might use or come across your website
                that is not a current client or a prospective client.
              </p>
              <p className="mx-auto my-4 prose">
                It could be employees of your practice, vendors you work with,
                or even competing firms in your market.
              </p>
              <p className="mx-auto my-4 prose">
                While you shouldn't focus resources on meeting the needs of
                these visitors, it does make sense to recognize that they exist
                and think about the information they want. This exercise allows
                you to either provide or purposely exclude it from the site.
              </p>

              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                The Questions Your Visitors are Asking
              </h3>
              <p className="mx-auto my-4 prose">
                By thinking through who's arriving at your website, we can
                better understand the questions they're asking themselves when
                they get there.
              </p>
              <p className="mx-auto my-4 prose">
                While you can't answer every question (nor would you want to),
                this exercise helps you plan the content on your site and meet
                your users' needs.
              </p>
              <Table />
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
                      className="py-3 pl-4 pr-3 text-xs font-medium tracking-wide text-left text-gray-500 uppercase sm:pl-6"
                    ></th>
                    <th
                      scope="col"
                      className="w-24 px-3 py-3 text-xs font-medium tracking-wide text-center text-gray-500 uppercase"
                    >
                      Prospective Clients
                    </th>
                    <th
                      scope="col"
                      className="w-24 px-3 py-3 text-xs font-medium tracking-wide text-center text-gray-500 uppercase"
                    >
                      Current Clients
                    </th>
                    <th
                      scope="col"
                      className="w-24 px-3 py-3 text-xs font-medium tracking-wide text-center text-gray-500 uppercase"
                    >
                      Other
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {questions.map((q, i) => {
                    return (
                      <tr key={i}>
                        <td className="py-2 pl-4 pr-3 text-sm text-gray-900 whitespace-nowrap sm:pl-6">
                          {q.text}
                        </td>
                        <td className="px-3 py-2 text-sm text-center text-gray-500 whitespace-nowrap">
                          {q.arr[0]}
                        </td>
                        <td className="px-3 py-2 text-sm text-center text-gray-500 whitespace-nowrap">
                          {q.arr[1]}
                        </td>
                        <td className="px-3 py-2 text-sm text-center text-gray-500 whitespace-nowrap">
                          {q.arr[2]}
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
    text: 'Who does your firm serve?',
    arr: ['X', '', ''],
  },
  {
    text: 'What sets you apart from your competitors?',
    arr: ['X', '', ''],
  },
  {
    text: 'What are your clients saying about you?',
    arr: ['X', '', ''],
  },
  {
    text: 'What is your process to achieve the results?',
    arr: ['X', '', ''],
  },
  {
    text: 'Is there a philosophy that drives your actions?',
    arr: ['X', '', ''],
  },
  {
    text: 'How do you handle fees?',
    arr: ['X', '', ''],
  },
  {
    text: 'Are you a fiduciary?',
    arr: ['X', '', ''],
  },
  {
    text: 'What is the history of your practice?',
    arr: ['X', '', 'X'],
  },
  {
    text: 'What are your thoughts on the market?',
    arr: ['X', 'X', 'X'],
  },
  {
    text: 'Do you have any published whitepapers?',
    arr: ['X', 'X', 'X'],
  },
  {
    text: 'Who is on your team and what is their background?',
    arr: ['X', 'X', 'X'],
  },
  {
    text: 'What is the contact information for you firm/team?',
    arr: ['X', 'X', 'X'],
  },
  {
    text: 'How do I log in to my account?',
    arr: ['', 'X', ''],
  },
  {
    text: 'Who do I call if I have a problem?',
    arr: ['', 'X', ''],
  },
]
