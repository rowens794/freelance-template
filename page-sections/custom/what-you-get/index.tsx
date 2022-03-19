import React from 'react'
import Image from 'next/image'
import { ChatAlt2Icon } from '@heroicons/react/outline'

type Props = {}

export default function index({}: Props) {
  return (
    <div className="grid max-w-xl grid-cols-1 gap-6 px-4 py-8 mx-auto text-left sm:px-6 lg:max-w-5xl lg:grid-cols-2 lg:py-16 lg:px-8">
      {/* Column 1 */}
      <div>
        <h2 className="text-base font-semibold tracking-wider text-center uppercase text-primary-600 md:text-left">
          Here's what you'll get
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl md:text-left">
          A 30 Minute Website Review Video
        </p>
        <p className="mx-auto mt-5 text-left text-gray-500 lg:text-lg ">
          I'll put together a 30-minute video review that you can watch when
          it's convenient for you.
        </p>
        <p className="mx-auto mt-5 text-left text-gray-500 lg:text-lg ">
          The video will contain both the issues I've identified and
          recommendations on how to correct them.
        </p>
        <p className="mx-auto mt-5 text-left text-gray-500 lg:text-lg ">
          With recommendations in hand, you'll be on your way to turning the
          conversion power of your website up to 11.
        </p>
      </div>

      {/* Column 2 */}
      <div className="h-full ">
        <div className="relative w-full h-full mt-8 overflow-hidden text-center rounded-sm drop-shadow-lg">
          <img src="/images/site-review.svg" className="" />
        </div>
      </div>
    </div>
  )
}
