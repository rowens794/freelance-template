import type { NextPage } from 'next'
import Head from 'next/head'
import {
  SpeakerphoneIcon,
  GlobeIcon,
  ChartPieIcon,
  ClockIcon,
  ColorSwatchIcon,
  DocumentSearchIcon,
  DeviceMobileIcon,
} from '@heroicons/react/outline'

import clientInfo from '../data/clientInfo'

import Hero from '../page-sections/custom/site-review-header'
import FeaturesGrid from '../page-sections/features/grid-with-offset-icons'
import AboutMe from '../page-sections/team/about-me'
import WhatYouGet from '../page-sections/custom/what-you-get'

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
        <Hero />
        <WhatYouGet />
        <FeaturesGrid
          secTitle="What I'll Look At"
          secDesc="A Framework For Feedback"
          secParagraph="When I review your site I'll specifically focus on the following areas: "
          features={[
            {
              name: 'Site Design',
              description:
                'Is your site styled consistently, is it easy to understand, does it convey an appropriate image for your practice.',
              icon: ColorSwatchIcon,
            },
            {
              name: 'Page Speed',
              description: `Speed is a big factor for both conversions and SEO. I'll take your site through a gantlet of speed tests to ensure top performance.`,
              icon: ClockIcon,
            },
            {
              name: 'On-Page SEO',
              description:
                'Are you taking the proper steps to ensure your site is read and ranked by search engines?',
              icon: DocumentSearchIcon,
            },
            {
              name: 'Market Analysis',
              description:
                'Are you targeting keywords that your target customers are searching for? If so, are you ranking for them?',
              icon: GlobeIcon,
            },
            {
              name: 'Compelling CTAs',
              description:
                'Are your visitors being asked to take action? Are they overwhelmed with choices? Is your offer compelling?',
              icon: SpeakerphoneIcon,
            },
            {
              name: 'Responsive Design',
              description: `Users access sites across devices and screen sizes. If you don't deliver an exceptional experience, your visitors will leave.`,
              icon: DeviceMobileIcon,
            },
          ]}
        />
        <AboutMe />
      </main>
    </div>
  )
}

export default Home
