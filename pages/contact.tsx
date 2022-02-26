import type { NextPage } from 'next'
import Head from 'next/head'

import clientInfo from '../data/clientInfo'
import Heading from '../page-sections/heading-sections/simple-centered'
import Contact from '../page-sections/contact/split-two-tone'

const Index: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Contact {clientInfo.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Heading
          heading="Want to Chat?"
          boldText="Let's Start a Conversation."
          bodyText="Feel Free to call or email me. I pickup on the first ring, and
            respond to emails within 30 minutes."
        />
        <Contact />
      </main>
    </div>
  )
}

export default Index
