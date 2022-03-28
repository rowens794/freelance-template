import { useEffect, useState } from 'react'
import throttle from 'lodash.throttle'

export default function useVisibility(): [string] {
  const [activeSection, setActiveSection] = useState('')

  const getSection = () => {
    let offset = -200
    let header =
      document.getElementById('intro')!.getBoundingClientRect()!.top +
      window.scrollY -
      offset
    let intro =
      document.getElementById('intro')!.getBoundingClientRect()!.top +
      window.scrollY +
      offset
    let leads =
      document.getElementById('leads')!.getBoundingClientRect()!.top +
      window.scrollY +
      offset
    let framework =
      document.getElementById('framework')!.getBoundingClientRect()!.top +
      window.scrollY +
      offset
    let users =
      document.getElementById('users')!.getBoundingClientRect()!.top +
      window.scrollY +
      offset
    let source =
      document.getElementById('source')!.getBoundingClientRect()!.top +
      window.scrollY +
      offset
    let intent =
      document.getElementById('intent')!.getBoundingClientRect()!.top +
      window.scrollY +
      offset
    let cta =
      document.getElementById('cta')!.getBoundingClientRect()!.top +
      window.scrollY +
      offset
    let organic =
      document.getElementById('organic')!.getBoundingClientRect()!.top +
      window.scrollY +
      offset
    let summary =
      document.getElementById('summary')!.getBoundingClientRect()!.top +
      window.scrollY +
      offset

    if (window.scrollY < intro) {
      setActiveSection('')
    } else if (window.scrollY > intro && window.scrollY < leads) {
      setActiveSection('intro')
    } else if (window.scrollY > leads && window.scrollY < framework) {
      setActiveSection('leads')
    } else if (window.scrollY > framework && window.scrollY < users) {
      setActiveSection('framework')
    } else if (window.scrollY > users && window.scrollY < source) {
      setActiveSection('users')
    } else if (window.scrollY > source && window.scrollY < intent) {
      setActiveSection('source')
    } else if (window.scrollY > intent && window.scrollY < cta) {
      setActiveSection('intent')
    } else if (window.scrollY > cta && window.scrollY < organic) {
      setActiveSection('cta')
    } else if (window.scrollY > organic && window.scrollY < summary) {
      setActiveSection('organic')
    } else if (window.scrollY > summary) {
      setActiveSection('summary')
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', getSection, true)
    return () => document.removeEventListener('scroll', getSection, true)
  })

  return [activeSection]
}
