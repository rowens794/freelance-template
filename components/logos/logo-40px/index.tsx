import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  href: string
  title: string
  image: string
  alt: string
}

export default function index({ href, title, image, alt }: Props) {
  return (
    <Link href={href}>
      <a>
        <span className="sr-only">{title}</span>
        <Image src={image} width={40} height={40} alt={alt} />
      </a>
    </Link>
  )
}
