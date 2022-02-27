import type { NextPage } from 'next'
import Head from 'next/head'
import {
  DeviceMobileIcon,
  TemplateIcon,
  AdjustmentsIcon,
} from '@heroicons/react/outline'

import clientInfo from '../data/clientInfo'

import Hero from '../page-sections/heros/with-angled-image-on-right'
import FeaturesGrid from '../page-sections/features/grid-with-offset-icons'
import PricingPanel from '../page-sections/pricing/split-with-brand-panel'
import Portfolio from '../page-sections/portfolio/standard-portfolio'
import AboutMe from '../page-sections/team/about-me'
// import Newsletter from '../page-sections/newletter/simple-with-description'

const Home: NextPage = () => {
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
        <Hero
          heading1="Web Design & Development"
          heading2="for Small Business"
          image="/images/hero-mock-hq.jpg"
          alt="Custom built Websites"
          intro="Don't slow your page with Wordpress - We build completely custom websites that are blazing fast starting at $150/mo."
          ctaText="Let's Talk"
          ctaLink="/contact"
        />
        <FeaturesGrid
          secTitle="What You Get"
          secDesc="Every Thing You Need to Put Your Best Foot Forward"
          secParagraph="We specialize in creating amazing websites for small business owners. We write everyline of code to make sure your website is lightning fast, responsive across devices, and optimized to generate the results your business needs."
          features={[
            {
              name: 'Mobile First Design',
              description:
                'The internet has gone mobile.  We build sites for the devices your customers use.',
              icon: DeviceMobileIcon,
            },
            {
              name: 'Responsive Design',
              description:
                'Your site will scale beautifully as your customers move from mobile to tablet to desktop devices.',
              icon: TemplateIcon,
            },
            {
              name: 'Fully Optimized',
              description:
                'Your site will load super fast on any device.  Helping you close more business.',
              icon: AdjustmentsIcon,
            },
          ]}
        />
        <PricingPanel />
        <Portfolio />
        <AboutMe />
        {/* <Newsletter /> */}
      </main>
    </div>
  )
}

export default Home
