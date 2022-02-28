import React from 'react'
import Link from 'next/link'

type Props = {
  text: string
  href: string
}

export default function index({ text, href }: Props) {
  return (
    <Link href={href}>
      <a>
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-full shadow-sm bg-primary-800 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2"
        >
          {text}
        </button>
      </a>
    </Link>
  )
}
