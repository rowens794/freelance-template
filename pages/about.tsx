import type { NextPage } from 'next'
import Head from 'next/head'

import clientInfo from '../data/clientInfo'
import Heading from '../page-sections/heading-sections/simple-centered'
import Content from '../page-sections/content/two-columns-with-image'

const About: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>About {clientInfo.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Heading
          heading="A Website that's A Great Deal for the Customer"
          boldText="A Great Site for $150? What Gives?"
          bodyText="I'm re-thinking the traditional web development model and combining a high value product with little to no commitment."
        />
        <Content />
      </main>
    </div>
  )
}

export default About
