import React, { useState, useEffect } from 'react'

type Props = { visibleEl: string }

export default function index({ visibleEl }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      {visibleEl ? (
        <div
          className="fixed z-40 hidden p-4 bg-white border-r border-gray-200 opacity-75 top-36 left-4 hover:opacity-100 lg:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!isHovered ? (
            <p className="block mb-3 text-sm font-bold text-gray-700 hover:hidden">
              ToC
            </p>
          ) : (
            <p className="mb-3 text-sm font-bold text-gray-700 underline hover:block">
              Table of Contents
            </p>
          )}

          <LinkItem
            htag="intro"
            name="Introduction"
            sublink={false}
            visible={visibleEl === 'intro'}
            itemNum={1}
            isHovered={isHovered}
          />
          <LinkItem
            htag="leads"
            name="Keys to Leads"
            sublink={false}
            visible={visibleEl === 'leads'}
            itemNum={2}
            isHovered={isHovered}
          />
          <LinkItem
            htag="framework"
            name="Framework for Web"
            sublink={false}
            visible={visibleEl === 'framework'}
            itemNum={3}
            isHovered={isHovered}
          />
          <LinkItem
            htag="users"
            name="What Users Want"
            sublink={true}
            visible={visibleEl === 'users'}
            itemNum={4}
            isHovered={isHovered}
          />
          <LinkItem
            htag="source"
            name="Source of Users"
            sublink={true}
            visible={visibleEl === 'source'}
            itemNum={5}
            isHovered={isHovered}
          />
          <LinkItem
            htag="intent"
            name="User Intent"
            sublink={true}
            visible={visibleEl === 'intent'}
            itemNum={6}
            isHovered={isHovered}
          />
          <LinkItem
            htag="cta"
            name="Calls to Action"
            sublink={true}
            visible={visibleEl === 'cta'}
            itemNum={7}
            isHovered={isHovered}
          />
          <LinkItem
            htag="organic"
            name="Organic Traffic"
            sublink={false}
            visible={visibleEl === 'organic'}
            itemNum={8}
            isHovered={isHovered}
          />
          <LinkItem
            htag="summary"
            name="Take-Aways"
            sublink={false}
            visible={visibleEl === 'summary'}
            itemNum={9}
            isHovered={isHovered}
          />
        </div>
      ) : null}
    </>
  )
}

const LinkItem = ({
  htag,
  name,
  sublink,
  visible,
  itemNum,
  isHovered,
}: {
  htag: string
  name: string
  sublink: boolean
  visible: boolean
  itemNum: number
  isHovered: boolean
}) => {
  const [element, setElement] = useState<any>(null)

  const handleClick = (element: any) => {
    window.scrollTo(
      0,
      element.getBoundingClientRect().top + window.scrollY - 100
    )
  }

  useEffect(() => {
    setElement(document.getElementById(htag))
  }, [])

  return (
    <div className="w-full font-light text-gray-600">
      {isHovered ? (
        <>
          {sublink ? (
            <div className="relative">
              <div className="absolute top-0 w-3 h-3 border-b border-l border-gray-400 left-1"></div>
              <a
                // href={`#${htag}`}
                onClick={() => handleClick(element)}
                className={
                  visible
                    ? `block cursor-pointer pl-5 font-bold hover:text-primary-600`
                    : 'block cursor-pointer pl-5 hover:text-primary-600'
                }
              >
                {name}
              </a>
            </div>
          ) : (
            <a
              onClick={() => handleClick(element)}
              className={
                visible
                  ? ` block cursor-pointer font-bold hover:text-primary-600`
                  : ' block cursor-pointer hover:text-primary-600'
              }
            >
              {name}
            </a>
          )}
        </>
      ) : (
        <>
          {visible ? (
            <p className="w-full font-bold text-center ">{itemNum}</p>
          ) : (
            <p className="w-full text-center">{itemNum}</p>
          )}
        </>
      )}
    </div>
  )
}
