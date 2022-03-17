import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '../page-sections/heros/with-angled-image-on-right'
// import Contact from '../page-sections/contact/split-two-tone'

const Testimonials: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="I build custom websites for small business owners without upfront expenses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        {/* <Hero /> */}
        {/* <Contact /> */}
      </main>
    </div>
  )
}

export default Testimonials
