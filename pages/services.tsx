import type { NextPage } from 'next'
import Head from 'next/head'

import Heading from '../page-sections/heading-sections/simple-centered'
import Section from '../page-sections/content/two-column-small-with-image'
import WhatYouGet from '../page-sections/custom/services-what-you-get'

import VisitorToCustomer from '../components/illustrations/liking-posts'
import TimeIsMoney from '../components/illustrations/alarm-clock'
import Websites from '../components/illustrations/sitting-on-laptop'
import BestPractices from '../components/illustrations/static-website'

import clientInfo from '../data/clientInfo'

const Services: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>{clientInfo.name}</title>
        <meta
          name="description"
          content="I build custom websites for financial advisors without upfront expenses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <div className="absolute top-0 bottom-0 z-10 hidden w-screen left-3/4 bg-gray-50 lg:block" />

        <Heading
          heading="How this Works"
          boldText="A Service Explainer in 3 Minutes"
          bodyText="Web design & development can seem nebulous and confusing.  Let's breakdown exactly how I create a strong web presence for financial advisors."
        />
        <div className="py-4 lg:py-0" />
        <Section
          header="The Goal"
          boldText="Get In Front of Prospects and Convert them to Clients"
          content={[
            `The number 1 goal with a web property is to get in front of people who need financial advisory services and convince them that you are the advisor for them.  This starts by understanding where traffic will come from and creating a site that will match the search intent of the real life people in your market.`,
            `When people reach your website, I want them to understand exactly what your value proposition is, why they should trust you to deliver on it, and how to take action on your offer. `,
          ]}
          Img={() => <VisitorToCustomer width={400} />}
          alt=""
          direction="RTL"
        />
        <ImageConnectorLines direction="RTL" />
        <Section
          header="Why Get Professional Help?"
          boldText="Your Time is Money"
          content={[
            `The are very low cost web solutions available - You could spin up a wordpress site for about $150 / year, Wix offers solutions for $25 to $50 a month. The problem with these solutions, is that you don't get all of support that comes backed into a professional solution: design, copy, layout, reporting, live support and all of the other "extras" that make a solution viable in a business environment.`,
            `Every issue that a business owner has to address on their website, is time that they aren't selling and delivering their services to their paying customers, and every hour that a business owner spends trying to debug their website is an hour that website visitors leave to find a competitor.`,
          ]}
          Img={() => <TimeIsMoney width={400} />}
          alt=""
          direction="LTR"
        />
        <ImageConnectorLines direction="LTR" />
        <Section
          header="I Solve These Issues"
          boldText="I Build Websites for Advisors"
          content={[
            "When I sign up a new customer, they don't have to think about the latest design standards or copywriting techniques.  I take the time to understand their practice, and produce a site that communicates why potential clients should care about them.",
            'Better yet, I make myself available 24/7 for issues and content changes, so that the only thing you have to worry about is servicing new clients.  All of our websites come with unlimited revisions and content adjustments even after the site has launched. Think of me as your in-house tech team.',
          ]}
          Img={() => <Websites width={400} />}
          alt=""
          direction="RTL"
        />
        <ImageConnectorLines direction="RTL" />
        <Section
          header="I Build Sites that Perform"
          boldText="Best Practices to a T"
          content={[
            "I avoid page builders and custom code each websites for a reason.  It's the only way to ensure optimal speed, SEO best practices, and accessibility standards are met. Staying concious of each of these factors directly translates into a website will generate as many new clients as possible for your business.",
            'By dedicating attention to these details, I send a strong signal to search engines, like Google, that your website deserves to climb in the ranks relative to less well positioned competitors.',
          ]}
          Img={() => <BestPractices width={400} />}
          alt=""
          direction="LTR"
        />

        <WhatYouGet />
      </main>
    </div>
  )
}

export default Services

const ImageConnectorLines = ({ direction }: { direction: string }) => {
  return (
    <div className="translate-y-4 ">
      {direction === 'RTL' ? (
        <div className="hidden lg:block">
          <div className="pl-2 overflow-hidden">
            <div className="w-2/5 h-32 m-auto overflow-hidden border-b-2 border-r-2 border-gray-300 rounded-br-lg " />
          </div>
          <div className="-translate-y-0.5 overflow-hidden pr-2">
            <div className="w-2/5 h-32 m-auto border-t-2 border-l-2 border-gray-300 rounded-tl-lg " />
          </div>
        </div>
      ) : (
        <div className="hidden scale-x-[-1] transform space-y-reverse lg:block">
          <div className="pl-2 overflow-hidden">
            <div className="w-2/5 h-32 m-auto overflow-hidden border-b-2 border-r-2 border-gray-300 rounded-br-lg " />
          </div>
          <div className="-translate-y-0.5 overflow-hidden pr-2">
            <div className="w-2/5 h-32 m-auto border-t-2 border-l-2 border-gray-300 rounded-tl-lg " />
          </div>
        </div>
      )}
      <div className="my-32 lg:my-0" />
    </div>
  )
}
