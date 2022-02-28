import React from 'react'
import Link from 'next/link'
import {
  SpeakerphoneIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/outline'

type Props = {}

export default function index({}: Props) {
  return (
    <div className="relative z-20 hidden pb-2 sm:pb-5 lg:block">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Link href="/contact">
          <a>
            <div className="p-1 rounded-lg shadow-lg bg-secondary-600 hover:bg-secondary-700">
              <div className="flex flex-wrap items-center justify-between">
                {/* Content Section */}
                <div className="flex items-center flex-1 w-0 ">
                  <div className="relative w-56 h-6 ml-4">
                    <div className="absolute flex p-4 transform border-2 rounded-lg -bottom-4 -rotate-6 border-secondary-200 bg-gradient-to-r from-secondary-700 to-secondary-800">
                      <SpeakerphoneIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                      <p className="ml-3 font-medium text-white truncate">
                        It's Tax Season
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white">
                      <span className="font-extrabold">
                        Our appointment book is filling fast.
                      </span>{' '}
                      Claim your spot today.
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 order-3 w-full px-6 py-2 mt-2 sm:order-2 sm:mt-0 sm:w-auto">
                  <ChevronDoubleRightIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
