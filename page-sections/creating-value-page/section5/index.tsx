import Image from 'next/image'

import Puzzle from '../../../components/illustrations/framework'

interface Props {}

export default function Example(props: Props) {
  return (
    <div className="overflow-hidden bg-white" id="source">
      <div className="relative px-4 py-8 mx-auto sm:px-6 lg:max-w-5xl lg:py-16 lg:px-8">
        <div className="relative mx-auto text-base max-w-prose">
          <div className="absolute hidden w-32 top-4 -left-36 lg:block">
            <Puzzle target="Traffic Sources" />
          </div>
          <div>
            <span className="text-base font-semibold tracking-wide uppercase text-primary-600">
              Identify the Source
            </span>
            <h2 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-700 sm:text-4xl">
              Where Your Users Come From
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-8">
          <div className="mt-8 lg:mt-0 ">
            <div className="mx-auto mt-5 text-gray-500 prose-primary ">
              <p className="mx-auto my-4 prose">
                With an understanding of who your users are, we can now look at
                how they're getting to you.
              </p>
              <p className="mx-auto my-4 prose">
                There are five paths that a visitor can take to arrive at your
                website:
              </p>
              <div className="max-w-2xl pl-12 mx-auto">
                <ol className="mx-auto my-4 prose list-decimal marker:text-gray-700">
                  <li>
                    <span className="underline">Direct</span> - typing your URL
                    (www.yourwebsite.com) into their web browser
                  </li>
                  <li>
                    <span className="underline">Referral</span> - clicking on a
                    link on another website that directs them to you
                  </li>
                  <li>
                    <span className="underline">Social Media</span> - clicking
                    on a link in a social media post
                  </li>
                  <li>
                    <span className="underline">Paid</span> - clicking on an
                    advertisement (banner, social, or search)
                  </li>
                  <li>
                    <span className="underline">Organic Search</span> -
                    searching for a phrase in a search engine and clicking on
                    your result
                  </li>
                </ol>
              </div>
              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                Direct Traffic
              </h3>
              <p className="mx-auto my-4 prose">
                Direct traffic to your site is likely someone familiar with you.
                The majority of this traffic will come from your current clients
                or employees. They know or have bookmarked your URL - they want
                a particular piece of information, and they aren't worried about
                navigating your site to find it.
              </p>
              <p className="mx-auto my-4 prose">
                Aside from having a well-designed and easy-to-navigate site,
                there isn't much that you need to do to optimize their
                experience.
              </p>
              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                Referral Traffic
              </h3>
              <p className="mx-auto my-4 prose">
                When someone on the internet links to your website and someone
                follows that link, they are referral traffic. Just like in the
                real world, they are literally being referred to you.
              </p>
              <p className="mx-auto my-4 prose">
                Referral traffic is fantastic. Someone is essentially vouching
                for your practice and your website's content. Further, referral
                visitors are usually entirely unfamiliar with you. It's are
                great opportunity to have a third party provide a warm
                introduction to your practice and content.
              </p>
              <p className="mx-auto my-4 prose">
                The downside is that referral traffic is hard to get. Not only
                do you have to convince another website to link to yours -
                either by asking for a link directly or by getting lucky with an
                unsolicited link. You also need the visitors of that site to
                click the link to yours.
              </p>
              <p className="mx-auto my-4 prose">
                Unless you procure a link from a very high-traffic website like
                the Wall Street Journal, you're unlikely to see significant
                referral traffic on your site.
              </p>
              <p className="mx-auto my-4 prose">
                Providing clients with direct access to the information they
                want leads to an outstanding client experience. However, you
                have to remember there is minimal risk to the relationship if
                they can't find what they want. While you should be conscious of
                existing clients' desires, you shouldn't prioritize their needs
                over prospective clients.
              </p>
              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                Social Media
              </h3>
              <p className="mx-auto my-4 prose">
                Social media is a powerful traffic source. One well-timed post
                that strikes a chord can send tidal waves traffic your way.
              </p>
              <p className="mx-auto my-4 prose">
                While this traffic can result in new opportunities - there are
                two problems that you'll face with it:
              </p>
              <div className="max-w-2xl pl-12 mx-auto">
                <ol className="mx-auto my-4 prose list-decimal marker:text-gray-700">
                  <li>
                    A social media strategy is complex, and it takes a lot of
                    work to put out engaging content consistently.
                  </li>
                  <li>
                    Even if you create content that does well on social media,
                    the traffic it generates won't necessarily fit your
                    practice.
                  </li>
                </ol>
              </div>
              <p className="mx-auto my-4 prose">
                Unless you have a social media strategy in place, posting
                one-off pieces of content to Facebook/Twitter/LinkedIn will not
                drive the type of visitors you want to your website. If you end
                up with any traffic, it will just be from visitors who don't
                turn into leads.
              </p>
              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                Paid Traffic
              </h3>
              <p className="mx-auto my-4 prose">
                Any traffic generated from digital ads online is paid traffic.
                These can be ads on social media, banner ads on third-party
                websites, or paid search ads targeting specific search keywords.
              </p>
              <p className="mx-auto my-4 prose">
                Paid search ads are particularly important for financial
                advisors and a common traffic source of highly targeted traffic.
                For instance, you could pay Google to show up at the top of the
                search results when someone searches for the phrase "financial
                advisor near me."
              </p>
              <div className="max-w-lg mx-auto my-8 font-extrabold prose text-center">
                <Image
                  src="/images/keyword-volume.png"
                  width={500}
                  height={75}
                  className="block"
                  alt="Paid traffic for financial advisors is robust"
                />
                <p className="m-0 text-xs italic font-light text-right text-gray-500">
                  source:{' '}
                  <a
                    className="text-right underline light text text-primary-500"
                    href="https://ads.google.com/home/tools/keyword-planner/"
                  >
                    Google Keyword Planner
                  </a>
                </p>
              </div>
              <p className="mx-auto my-4 prose">
                According to Google, that one phrase gets between 10k and 100k
                searches every month. Google also tells us that an ad for this
                phrase costs between $8 and $40 per click.
              </p>
              <p className="mx-auto my-4 prose">
                Depending on how well you can convert these clicks into
                business, it can be a high ROI acquisition strategy to purchase
                these ads from Google.
              </p>
              <p className="mx-auto my-4 prose">
                While you shouldn't focus resources on meeting the needs of
                these visitors, it does make sense to recognize that they exist
                and think about the information they want. This exercise allows
                you to either provide or purposely exclude it from the site.
              </p>
              <p className="mx-auto my-4 prose">
                In fact, it must work. If you go to Google right now and type in
                that phrase, you'll see results that look like this:
              </p>
              <div className="max-w-xl mx-auto my-8 font-extrabold prose text-center">
                <Image
                  src="/images/google-ads.png"
                  width={600}
                  height={370}
                  className="block"
                  alt="Sample financial advisor ad run on Google"
                />
                <p className="m-0 text-xs italic font-light text-right text-gray-500">
                  source:{' '}
                  <a
                    className="text-right underline light text text-primary-500"
                    href="https://google.com"
                  >
                    Google Search Results
                  </a>
                </p>
              </div>
              <p className="mx-auto my-4 prose">
                These ads prove that this strategy is profitable for some firms;
                otherwise, they wouldn't pay for the exposure.
              </p>
              <p className="mx-auto my-4 prose">
                Paid search traffic is powerful. It offers a source of traffic
                that sends people looking for the services you provide to your
                website. The only downside is that you have to pay for it, which
                can get expensive. It's not uncommon for only 1 in 50 paid link
                clicks to result in a meeting with an interested prospect. If
                you're paying $25 per click, one sales meeting could cost you
                $1,250.
              </p>
              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                Organic Search
              </h3>
              <p className="mx-auto my-4 prose">
                Enter organic search traffic. This channel is nearly identical
                to paid search ads, but you don't have to pay for the link
                clicks.
              </p>
              <p className="mx-auto my-4 prose">
                That same individual that searched for "financial advisor near
                me" might decide to skip Google's advertisements and click on
                one of the actual search results.
              </p>
              <p className="mx-auto my-4 prose">
                If you can convince Google that your site is worthy of a top
                spot in their search results, you can generate high-quality
                traffic directly to your webpage free of charge.
              </p>
              <p className="mx-auto my-4 prose">
                Organic traffic is the holy grail of marketing your services.
                The only catch is - there is a lot of competition to get to the
                top.
              </p>
              <p className="mx-auto my-4 prose">
                Later on, we'll discuss organic search in more depth. For now, I
                want to merge the ideas in Part 1 - Users with this section,
                Part 2 - Traffic Sources, to better understand user intent when
                people arrive on your site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
