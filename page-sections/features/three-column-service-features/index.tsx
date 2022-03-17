import React from 'react'

import Car from '../../../components/icons/handdrawn-car'
import City from '../../../components/icons/handrawn-city'
import Briefcase from '../../../components/icons/handrawn-briefcase'
import Smile from '../../../components/svg-backgrounds/smile'
import Button from '../../../components/buttons/standard-cta'

type Props = {}

const waysToFile = [
  {
    name: 'Drop off at Office',
    desc: `Got a lot going on but still need to file.  No problem, just drop off your tax documents and we'll file everything on your behalf.  If I have any questions, I'll give you a call.`,
    icon: Car,
    ctaText: 'Drop Off Today',
    ctaLink: '/contact',
  },
  {
    name: 'In Person Appointment',
    desc: `Schedule a 30 minute appointment to sit down with a CPA and talk through your return. You'll walk out with your taxes filed and know exactly what your refund will be. `,
    icon: City,
    ctaText: 'Schedule Appointment',
    ctaLink: '/contact',
  },
  {
    name: 'Business/Rental Property',
    desc: `Do you have a complicated return?  No problem.  Let's set aside an hour to go over all of the details and maximize your refund. `,
    icon: Briefcase,
    ctaText: 'Schedule Appointment',
    ctaLink: '/contact',
  },
]

export default function index({}: Props) {
  return (
    <div className="max-w-5xl m-auto mt-32">
      <h2 className="text-4xl font-extrabold text-center text-primary-700 drop-shadow-md">
        File the way that works for you
      </h2>
      <div className="grid grid-cols-1 gap-8 mx-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {waysToFile.map((item) => {
          return <ItemContainer key={item.name} data={item} />
        })}
      </div>
    </div>
  )
}

const ItemContainer = ({ data }: any) => {
  return (
    <div className="relative w-full rounded-md bg-white pb-24 shadow-[0_0px_5px_3px_rgba(0,0,0,0.075)]">
      <div className="p-4 pb-24">
        <div className="w-full ">
          <div className="w-24 h-24 m-auto mt-8">
            <data.icon
              className="w-6 h-6 text-white"
              aria-hidden="true"
              color="fill-primary-600"
            />
          </div>
        </div>

        <p className="text-lg font-extrabold text-center text-gray-700">
          {data.name}
        </p>

        <p className="max-w-sm m-auto mt-8 font-light text-center text-gray-700">
          {data.desc}
        </p>
      </div>

      <div className="absolute bottom-0 w-full">
        <Smile color="fill-primary-100" />
        <div className="w-full p-6 text-center bg-primary-100">
          <Button text={data.ctaText} href={data.ctaLink} />
        </div>
      </div>
    </div>
  )
}
