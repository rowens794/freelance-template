import React, { useState, useEffect } from 'react'
import styles from './lighthouse.module.css'
import useVisibility from '../../hooks/isVisible'

type Props = {}

export default function Index({}: Props) {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(-200)
  const [hasActivated, setHasActivated] = useState(false)

  useEffect(() => {
    if (isVisible) setHasActivated(true)
  }, [isVisible])

  return (
    <section
      id="lighthouse"
      className="relative py-8 bg-white lg:py-18 sm:py-12"
    >
      <div className="max-w-5xl m-auto my-12 text-center" ref={currentElement}>
        <h2 className="text-base font-semibold tracking-wider uppercase text-primary-600">
          Core Web Vitals Perfection
        </h2>
        <p className="px-4 mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Deliver a Delightful Experience
        </p>
        <p className="px-4 mx-auto mt-5 text-gray-500 max-w-prose sm:text-lg">
          Google makes it easy to understand how your website performs across 4
          major categories using{' '}
          <a
            href="https://huckabuy.com/2021/02/01/how-to-use-googles-lighthouse-report-for-technical-seo/"
            target="_blank"
            className="underline text-primary-700"
          >
            Lighthouse
          </a>
          . Every site that I build performs flawlessly.
        </p>
        <div className="grid w-full max-w-md grid-cols-4 p-4 m-auto mx-auto mt-6 transform sm:mt-12 sm:max-w-lg">
          <Circle
            isVisible={hasActivated}
            desc="Performance"
            descXS="Perf."
            max={99}
          />
          <Circle
            isVisible={hasActivated}
            desc="Accessibility"
            descXS="Access."
            max={98}
          />
          <Circle
            isVisible={hasActivated}
            desc="Best Practices"
            descXS="Best Practices"
            max={100}
          />
          <Circle isVisible={hasActivated} desc="SEO" descXS="SEO" max={100} />
        </div>
        <p className="mt-6 text-sm text-gray-600">
          How does yours{' '}
          <a
            href="https://web.dev/measure/"
            target="_blank"
            className="underline text-primary-700"
          >
            perform
          </a>
          ?
        </p>
      </div>
    </section>
  )
}

const Circle = ({
  isVisible,
  desc,
  descXS,
  max,
}: {
  isVisible: Boolean
  desc: string
  descXS: string
  max: number
}) => {
  let [count, setCount] = useState(30)

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (count >= max) {
          clearInterval(interval)
        } else {
          setCount(count + 1)
        }
      }, 20)
      return () => clearInterval(interval)
    }
  })

  let stroke = 'stroke-red-600'
  let bgColor = 'bg-red-100'
  let textColor = 'text-red-600'
  if (count > 50) {
    stroke = 'stroke-yellow-600'
    bgColor = 'bg-yellow-100'
    textColor = 'text-yellow-600'
  }
  if (count > 90) {
    stroke = 'stroke-primary-600'
    bgColor = 'bg-primary-100'
    textColor = 'text-primary-600'
  }

  return (
    <div className="w-full ">
      <div
        className={`${styles.square} ${bgColor} m-auto -translate-x-3 scale-75 transform xs:translate-x-0 sm:scale-100`}
      >
        <p
          className={`my-[19px] w-[100] text-center text-[42px] text-white ${textColor} `}
        >
          {count}
        </p>
        <svg preserveAspectRatio="none" className={`${styles.svgElem} `}>
          <circle
            cx="-50"
            cy="50"
            r="50"
            className={`${styles.rectElem} ${stroke} m-auto `}
          />
        </svg>

        <p className="w-full pt-2 mt-4 text-sm font-bold text-center text-gray-600 xs:hidden">
          {descXS}
        </p>
        <p className="hidden pt-2 mt-2 text-sm font-bold text-center text-gray-700 xs:block sm:mt-0 md:pt-2 ">
          {desc}
        </p>
      </div>
    </div>
  )
}
