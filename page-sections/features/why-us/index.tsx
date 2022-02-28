import React from 'react'
import Smile from '../../../components/svg-backgrounds/smile'
import MobilePhone from '../../../components/icons/mobile-phone'

type Props = {}

export default function index({}: Props) {
  return (
    <div className="relative overflow-hidden mt-36">
      <Smile color="fill-primary-700" />
      <div className=" bg-primary-700">
        <div className="absolute w-full -top-0 md:top-4">
          <div className="w-32 h-32 p-4 m-auto border-4 rounded-full border-primary-700 bg-primary-100">
            <MobilePhone color="fill-primary-500" />
          </div>
        </div>

        <h2 className="relative z-20 pt-32 text-2xl font-extrabold text-center text-white drop-shadow-md sm:pt-28 sm:text-3xl md:pt-24 md:text-5xl">
          Why Choose Allison's
        </h2>

        <div className="relative z-20 grid w-full max-w-5xl grid-cols-1 gap-8 px-8 pb-24 mx-auto mt-12 md:grid-cols-3">
          <div className="text-center text-white drop-shadow-sm">
            <p className="text-lg font-semibold drop-shadow-sm">
              Work with a CPA
            </p>
            <p className="max-w-lg m-auto font-light text-md drop-shadow-sm md:max-w-xs">
              Don't pay twice as much for an in-house trained "preparer". Work
              with a licensed CPA, who know exactly how to handle any situation
              you throw at him.
            </p>
          </div>

          <div className="text-center text-white drop-shadow-sm">
            <p className="font-semibold">On Your Schedule</p>
            <p className="max-w-lg m-auto font-light text-md drop-shadow-sm md:max-w-xs">
              Your busy, we have flexible hours and multiple options to
              accomodate your availability. If you simply can't make an
              in-office visit work, drop it off and we'll get it done.
            </p>
          </div>

          <div className="text-center text-white drop-shadow-sm">
            <p className="font-semibold">Full Support</p>
            <p className="max-w-lg m-auto font-light text-md drop-shadow-sm md:max-w-xs">
              We not only guarantee the highest possible refund, but we also
              have your back if you get questions or audited by the IRS. Simply
              let us know and we'll take over.
            </p>
          </div>
        </div>

        <div className="absolute z-10 w-full -bottom-24">
          <div
            style={{ width: '450px', height: '450px' }}
            className="p-4 m-auto rounded-full bg-primary-100 bg-gradient-to-b from-primary-700 to-primary-600"
          ></div>
        </div>
      </div>
      <div className="absolute bottom-0 z-20 w-full">
        <Smile color="fill-white" />
      </div>
    </div>
  )
}
