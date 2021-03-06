import { useRef, useEffect, useState } from 'react'
import throttle from 'lodash.throttle'

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
export default function useVisibility<Element extends HTMLElement>(
  offset = 100,
  throttleMilliseconds = 100,
  element = 0
): [Boolean, React.RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(false)
  const currentElement = useRef<any>()

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false)
      return
    }
    const target = 100
    const top = currentElement.current.getBoundingClientRect().top

    setIsVisible(
      Math.round(top + offset) <= target &&
        Math.round(top - offset) <= window.innerHeight
    )
  }, throttleMilliseconds)

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true)
    return () => document.removeEventListener('scroll', onScroll, true)
  })

  return [isVisible, currentElement]
}
