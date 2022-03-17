import type { NextPage } from 'next'
import Head from 'next/head'
import {
  SearchCircleIcon,
  BadgeCheckIcon,
  ChartPieIcon,
} from '@heroicons/react/outline'

import clientInfo from '../data/clientInfo'

import Hero from '../page-sections/heros/with-angled-image-on-right'
import FeaturesGrid from '../page-sections/features/grid-with-offset-icons'
import PricingPanel from '../page-sections/pricing/split-with-brand-panel'
import Content from '../page-sections/content/written-by-a-pro'
import Portfolio from '../page-sections/portfolio/standard-portfolio'
import AboutMe from '../page-sections/team/about-me'
import LightHouse from '../page-sections/lighthouse'
// import Newsletter from '../page-sections/newletter/simple-with-description'

const Home: NextPage = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white">
      <Head>
        <title>{clientInfo.name}</title>
        <meta
          name="description"
          content="I build custom websites for financial advisors with no upfront costs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Hero
          heading1="Web Design for"
          heading2="Financial Advisors"
          image="/images/hero-mock-hq.jpg"
          alt="Custom built Websites"
          intro="Create an online presence that attracts leads and generates opportunities while you take care of your clients."
          ctaText="Let's Talk"
          ctaLink="/contact"
        />
        <FeaturesGrid
          secTitle="What To Expect"
          secDesc="A Site that Ranks & Converts"
          secParagraph="Think of your website as a member of your team.  Always ready to answer any questions that a prospect has and deliver that prospect to an advisor."
          features={[
            {
              name: 'Built for SEO',
              description:
                'Match the search intent of your future customers so that google ranks you highly.',
              icon: SearchCircleIcon,
            },
            {
              name: 'Conversion Focus',
              description:
                'Make it easy for visitors to take the first step into your sales process.',
              icon: BadgeCheckIcon,
            },
            {
              name: 'Track Results',
              description:
                'Track traffic and conversions on your site so you know exactly how well it is performing.',
              icon: ChartPieIcon,
            },
          ]}
        />
        <Content />
        <LightHouse />
        <PricingPanel />
        <Portfolio />
        <AboutMe />
        {/* <Newsletter /> */}
      </main>
    </div>
  )
}

export default Home
