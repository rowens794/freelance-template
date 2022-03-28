import type { NextPage } from 'next'
import Head from 'next/head'

import useActiveSection from '../hooks/creatingValueSection'

import Heading from '../page-sections/heading-sections/custom-value-through-web'
import Section1 from '../page-sections/creating-value-page/section1' // Header
import Section2 from '../page-sections/creating-value-page/section2' // Intro
import Section3 from '../page-sections/creating-value-page/section3' // Generating Leads
import Section4 from '../page-sections/creating-value-page/section4' // Users
import Section5 from '../page-sections/creating-value-page/section5' // Where users come from
import Section6 from '../page-sections/creating-value-page/section6' // User Intent
import Section7 from '../page-sections/creating-value-page/section7' // CTA
import Section8 from '../page-sections/creating-value-page/section8' // Organic Traffic
import Section9 from '../page-sections/creating-value-page/section9' // summary
import CustomNav from '../page-sections/creating-value-page/CustomNav'

import CTA from '../page-sections/calls-to-action/simple-centered'

const About: NextPage = () => {
  const [activeSection] = useActiveSection()

  return (
    <div className="">
      <Head>
        <title>Creating High Value Websites for Financial Advisors</title>
        <meta
          name="description"
          content="The web is becoming an important sales channel for financial advisors.  Learn how to take your website to the next level."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative overflow-x-hidden">
        <CustomNav visibleEl={activeSection} />
        <Heading />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <CTA
          heading="Free Site Review Video"
          subHeading="Let me record a video applying these principles to your current website."
          link="/site-review"
          buttonText="Send Me the Review"
        />
      </main>
    </div>
  )
}

export default About
