import type { NextPage } from 'next'
import Head from 'next/head'

import clientInfo from '../../data/clientInfo'
import Heading from '../../page-sections/heading-sections/simple-centered'
import Contact from '../../page-sections/contact/split-two-tone'

const Index: NextPage = () => {
  return (
    <div className="min-h-full bg-white">
      <Head>
        <title>{clientInfo.name}</title>
        <meta
          name="description"
          content="I build custom websites for small business owners without upfront expenses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-[calc(100vh-10rem)] ">
        <Heading
          heading="I've Recieved Your Message"
          boldText="Thanks for Reaching Out!"
          bodyText="I'll be in touch soon."
        />
      </main>
    </div>
  )
}

export default Index
