import React from 'react'

type Props = { color: string }

export default function index({ color }: Props) {
  return (
    <>
      <svg
        version="1.1"
        id="no-aspect-ratio"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        height="100%"
        width="100%"
        viewBox="0 0 320 20"
        preserveAspectRatio="none"
      >
        <title>Background Smile</title>
        <defs></defs>
        <g
          id="STYLE-GUIDE"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            transform="translate(-702.000000, -7014.000000)"
            id="graphic-devices"
            className={color}
          >
            <g transform="translate(99.000000, 6317.000000)">
              <g id="smile" transform="translate(602.000000, 508.000000)">
                <path
                  d="M1,189 C54.4700902,202.195985 107.849554,208.793978 161.138393,208.793978 C214.427231,208.793978 267.714434,202.195985 321,189 L321,209 L1,209 L1,189 Z"
                  id="Rectangle-21"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}
