import type { NextPage } from 'next'
import Head from 'next/head'

import clientInfo from '../data/clientInfo'
import Heading from '../page-sections/heading-sections/simple-centered'
import Content from '../page-sections/content/two-columns-with-image'
import CTA from '../page-sections/calls-to-action/simple-centered'

const About: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>{clientInfo.name}</title>
        <meta
          name="description"
          content="We build custom websites for small business owners without upfront expenses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Heading
          heading="A Website that's A Great Deal for the Customer"
          boldText="A Great Site for $150? What Gives?"
          bodyText="I'm re-thinking the traditional web development model and combining a high value product with little to no commitment."
        />
        <Content />
        <CTA
          heading="Ready to Get Underway"
          subHeading="Reach out and let's get the ball rolling"
          link="/contact"
          buttonText="Get Started"
        />
      </main>
    </div>
  )
}

export default About
