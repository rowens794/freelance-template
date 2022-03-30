import Image from 'next/image'

import Puzzle from '../../../components/illustrations/framework'

interface Props {}

export default function Example(props: Props) {
  return (
    <div className="overflow-hidden bg-white" id="organic">
      <div className="relative px-4 py-8 mx-auto sm:px-6 lg:max-w-5xl lg:py-16 lg:px-8">
        <div className="relative mx-auto text-base max-w-prose">
          <div>
            <span className="text-base font-semibold tracking-wide uppercase text-primary-600">
              Free High Quality Traffic
            </span>
            <h2 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-700 sm:text-4xl">
              Generating Organic Search Traffic
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-8">
          <div className="mt-8 lg:mt-0 ">
            <div className="mx-auto mt-5 text-gray-500 prose-primary ">
              <p className="mx-auto my-4 prose">
                Given the universal desire for free, highly targeted search
                traffic, it makes sense to include a section here specific to
                capturing visitors from search engines.
              </p>
              <p className="mx-auto my-4 prose">
                Let's define a term that you'll hear thrown around frequently:
                SEO. SEO or <b>Search Engine Optimization</b> is the process of
                creating content (or pages) and doing everything in your power
                to ensure those pages rank highly on search engines like google.
              </p>
              <p className="mx-auto my-4 prose">
                SEO is a vast topic that spans target keyword research, page
                creation (or on-page SEO), link building, search engine
                algorithm research, and various other niches. You should not
                expect the web developer you hire to be an expert; it is a
                discipline in itself. You should, however, expect them to be
                familiar with best practices for on-page SEO and talk to you
                about what they are doing to give your page the best chance of
                outperforming competitor's pages.
              </p>
              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                On-Page SEO Best Practices
              </h3>
              <p className="mx-auto my-4 prose">
                On-page SEO is simple to understand but challenging to
                implement. Properly executing on-page SEO requires that the
                developer follows good coding practices, use descriptive page
                titles and headings, includes text descriptions of images and a
                host of other technical items. Simply put, it requires
                experience with SEO and attention to detail.
              </p>
              <p className="mx-auto my-4 prose">
                Hubspot put out a fantastic{' '}
                <a
                  href="https://blog.hubspot.com/blog/tabid/6307/bid/33655/a-step-by-step-guide-to-flawless-on-page-seo-free-template.aspx"
                  className="text-primary-700"
                >
                  guide to on-page SEO
                </a>
                . If you are serious about growing your organic search traffic,
                you should give it a read and discuss its recommendations with
                your developer. The entire guide only takes about 15 minutes to
                read, and after you finish, you'll be able to hold a fairly
                in-depth conversation about SEO with anyone.
              </p>
              <p className="mx-auto my-4 prose">
                Hubspot's guide includes a great breakdown of specific on-page
                SEO items to consider. That list includes:
              </p>
              <div className="max-w-2xl pl-12 mx-auto">
                <ol className="mx-auto my-2 prose list-decimal marker:text-gray-700">
                  <li className="my-0">High-Quality Page Content</li>
                  <li className="my-0">Page Titles</li>
                  <li className="my-0">Headers</li>
                  <li className="my-0">Meta Descriptions</li>
                  <li className="my-0">Image Alt-text</li>
                  <li className="my-0">Structured Markup</li>
                  <li className="my-0">Page URLs</li>
                  <li className="my-0">Internal Linking</li>
                  <li className="my-0">Mobile Responsiveness</li>
                  <li className="my-0">Site Speed</li>
                </ol>
              </div>
              <p className="mx-auto my-4 prose">
                I'll also take a moment to mention a great tool to audit the
                performance of your current on-page SEO implementation.
                SEOOptimizer,{' '}
                <a
                  href="https://www.seoptimer.com"
                  className="text-primary-700"
                >
                  www.seoptimer.com
                </a>
                , will programmatically look at your site's content and show how
                well it's performing across various dimensions.
              </p>
              <p className="mx-auto my-4 prose">
                The very first item on the list relates to the quality of your
                content. If you've identified who your visitors are and wrote
                content that addresses the questions they are likely to have,
                you should be in a good spot from a content quality standpoint.
              </p>
              <p className="mx-auto my-4 prose">
                Items two through six all relate to ensuring that the content
                you have is properly translated on the webpage through code.
              </p>
              <p className="mx-auto my-4 prose">
                I'm going to skip commenting on page URLs and internal linking.
                The Hubspot guide better explains these items than I could in
                the space I have.
              </p>
              <p className="mx-auto my-4 prose">
                I do, however, want to spend some time on the last two items:
                Page Responsiveness and Site Speed. These two items have been
                sky-rocketing in importance over the last couple of years. Both
                have consequences beyond SEO and directly affect your website's
                overall user experience and conversion rate.
              </p>
              <p className="mx-auto my-4 prose">
                <b>Page responsiveness</b> refers to a webpage's ability to
                gracefully transform its layout as a device's screen size grows
                from something as small as a mobile phone to as large as a
                desktop pc. Today, your website must deliver a great experience
                across devices.
              </p>

              <p className="mx-auto my-4 prose">
                Web traffic split almost evenly between mobile phones and
                desktop computers in the US. If your website only provides a
                good experience to one, the other half of your traffic will
                leave. A desktop-only (or a mobile-only) site not only results
                in frustrating half of your users, but it also sends a strong
                signal to Google that your site shouldn't rank as high as your
                competitors.
              </p>

              <div className="relative my-8 lg:my-12">
                <div
                  className="absolute z-20 hidden text-sm bottom-20 left-20 sm:block md:bottom-24 md:left-48 md:p-2 md:text-base"
                  style={{ backgroundColor: '#D8EEEF' }}
                >
                  <span className="block font-bold text-center ">
                    Share of Total Web Traffic in the US
                  </span>
                </div>
                <Image
                  src="/images/traffic-devices.png"
                  width={960}
                  height={500}
                  className="relative z-10 opacity-80"
                  alt="mobile search traffic is now equal to desktop"
                />
                <p className="m-0 text-xs italic font-light text-right text-gray-500">
                  source:{' '}
                  <a
                    className="text-right underline light text text-primary-500"
                    href="https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/united-states-of-america/#monthly-201001-202203"
                  >
                    Statcounter
                  </a>
                </p>
              </div>

              <p className="mx-auto my-4 prose">
                You can check the responsiveness of your website by viewing each
                page on both a mobile phone and a desktop computer.
              </p>
              <p className="mx-auto my-4 prose">
                <b>Page Speed</b> refers to how quickly your website loads when
                visitors arrive on your website. People don't like to wait, and
                if your website is slow, they'll leave. You'll have fewer
                conversions because of this dropoff. Just like unresponsive
                design, a slow website results in fewer conversions and ranks
                lower in search engines.
              </p>
              <p className="mx-auto my-4 prose">
                Google continually adjusts in search ranking algorithm. As the
                population has leaned into mobile web browsing, Google, and
                other search providers, have increased the importance of page
                speed in their search algorithms. It is now more important than
                ever to have a page that loads almost instantly when a user
                navigates to your site.
              </p>
              <p className="mx-auto my-4 prose">
                To check out how your website's page speed stacks up, visit{' '}
                <a href="https://web.dev/measure" className="text-primary-700">
                  web.dev/measure
                </a>{' '}
                and input your URL.
              </p>
              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                Understanding Keywords and Search
              </h3>
              <p className="mx-auto my-4 prose">
                All search traffic is not created equal. Certain search phrases
                indicate a user is ready to take action. Earlier, we looked at
                data on the search phrase "financial advisor near me." Put
                yourself in the shoes of the person who is typing that search
                into Google. What do you think they want to do?
              </p>
              <p className="mx-auto my-4 prose">
                I think it's very likely they want to hire a financial advisor.
              </p>
              <p className="mx-auto my-4 prose">
                Compare that to the search phrase "what is a stock." This user
                likely has no intention of hiring a financial advisor. In fact,
                they are probably not at a point in their life where they need
                or even understand the value that a financial advisor can
                provide.
              </p>
              <p className="mx-auto my-4 prose">
                Depending on how your content is written, headings are phrased,
                and images are tagged, your site could potentially rank for
                either keyword. You want to structure your content to target
                keywords that result in conversions.
              </p>
              <h3 className="max-w-2xl pl-2 m-auto mt-8 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                Finding Keywords to Target
              </h3>
              <p className="mx-auto my-4 prose">
                Finding keywords that people are searching for and that you can
                rank highly for is challenging. One of the only good strategies
                is to pay for a keyword research tool like{' '}
                <a href="https://www.ahrefs.com" className="text-primary-700">
                  Ahrefs
                </a>{' '}
                or{' '}
                <a href="https://www.semrush.com" className="text-primary-700">
                  SEMRush
                </a>
                .
              </p>
              <p className="mx-auto my-4 prose">
                If you work with a developer who builds keyword research into
                their service, you can lean on their expertise. I've found that
                some of the best keywords to focus on for small advisors are
                keywords with local intent.
              </p>
              <p className="mx-auto my-4 prose">
                Local intent is an important concept - these are keywords, which
                the search engine has determined, where results that are
                physically located close to the user should be over-weighted in
                the search results. By focusing on these keywords, you eliminate
                the need to compete with publishing giants and colossal
                investment firms like PIMCO.
              </p>
              <p className="mx-auto my-4 prose">
                It takes some work to determine which keywords search engines
                apply local intent to, but I've found that variations that
                include the suffix "near me" are exclusively local intent.
                Ensuring that Google knows your website describes a service that
                can be labeled as "financial advisor," "wealth manager,"
                "financial planner," etc., and where your officers are located
                is key to ranking for these low-hanging opportunities.
              </p>
              <p className="mx-auto my-4 prose">
                Additionally, there are some less apparent keywords that I've
                found Google applying local intent to as well. Phrases like
                "best financial advisor," "fiduciary financial advisors," and
                "fee-only financial advisor" can fall into this bucket. These
                phrases are especially valuable because it's less likely your
                competitors will use them to describe their services, making it
                easier for your page to rank.
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
    <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden ">
              <p>
                [INSERT EXAMPLE GRAPHICS HIGHLIGHTING DIFFERENCE BETWEEN THE TWO
                (from above)]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
