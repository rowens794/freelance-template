import React, { useState, useEffect } from 'react'
import useVisibility from '../../../hooks/isVisible'

type Props = {}

let messages: {
  msg: string
  speaker: string
}[] = [
  {
    msg: 'I need more leads from my website',
    speaker: 'You',
  },
  {
    msg: `ok, let's focus on content that drives visitors towards a call-to-action that results in more leads for your practice`,
    speaker: 'Ryan',
  },
  {
    msg: `maybe target calls to action that focus on key activities like "review retirement readiness" or "is my portfolio diversified"`,
    speaker: 'Ryan',
  },
  {
    msg: 'ok, I also need to get more traffic to my website',
    speaker: 'You',
  },
  {
    msg: `well, first let's figure out what people in your market are searching for (I'll take care of this)`,
    speaker: 'Ryan',
  },
  {
    msg: `then I'll construct your pages so that they address those queries and you're site will begin to climb the google rankings, and bring in more interested visitors`,
    speaker: 'Ryan',
  },
  {
    msg: 'Great! I also want to spend less time working on my website - no updating content, worrying about bugs, etc.',
    speaker: 'You',
  },
  {
    msg: `Let me take this over for you, I do it for all my clients.`,
    speaker: 'Ryan',
  },
  {
    msg: 'My current website is really slow, I worry that I lose visitors because of it.',
    speaker: 'You',
  },
  {
    msg: `If it's slow then you definately will.  Half of all visitors leave after just 4 seconds of waiting. I can fix this - all of my work scores 90+ according to Google's pagespeed insights. `,
    speaker: 'Ryan',
  },
  {
    msg: `My current web design feels bad but I don't know why.`,
    speaker: 'You',
  },
  {
    msg: `Design is a tough one.  First, it's important to focus on usability.  Second, focus on tone - set an atmosphere prospects expect when dealing with a wealth advisor.  Third, makes sure that it's easy to parse the content of your page with a quick glance.`,
    speaker: 'Ryan',
  },
  {
    msg: `Second, focus on tone - set an atmosphere prospects expect when dealing with a wealth advisor.`,
    speaker: 'Ryan',
  },
  {
    msg: `Third, make sure that it's easy to parse the content of your page with a quick glance.`,
    speaker: 'Ryan',
  },
  {
    msg: `If you do those things right, the rest of your design will fall into place.`,
    speaker: 'Ryan',
  },
  {
    msg: `This sounds great, but I just can't commit to big website investment right now.`,
    speaker: 'You',
  },
  {
    msg: `I get that - I don't charge anything upfront for my work - your expense is monthly.  `,
    speaker: 'Ryan',
  },
  {
    msg: `If you find that the website isn't producing the results you want, you are free to cancel - there's no commitment.`,
    speaker: 'Ryan',
  },
]

export default function index({}: Props) {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(-200)
  const [hasActivated, setHasActivated] = useState(false)
  const [msgHopper, setMsgHopper] = useState<any[]>([])
  const [showTyping, setShowTyping] = useState<string | null>(null)
  const [int, setInt] = useState(0)

  //set a variable to keep track of whether the user has scrolled into view
  useEffect(() => {
    if (isVisible) setHasActivated(true)
  }, [isVisible])

  useEffect(() => {
    //once the user has scrolled into view activate the animation
    if (hasActivated) {
      const getDelay = () => {
        //if it's the very first message - deliver instantly
        if (msgHopper.length === 0) {
          return 1000

          //else calculate the time needed to read
        } else {
          let msg = ''
          if (int === 0) {
            msg = messages[messages.length - 1].msg
          } else {
            msg = messages[int - 1].msg
          }

          let ReadingRateWPM = 150
          let words = msg.split(' ').length
          let secondsElapsed = (words / ReadingRateWPM) * 60
          let millisecondsElapsed = Math.round(secondsElapsed * 1000)
          return millisecondsElapsed
        }
      }

      const intervalId = setTimeout(() => {
        let newHopper: any = []
        let millisecondDelay = getDelay()

        //determine what message to add
        let msgToAdd = null
        if (messages[int].speaker === 'You') {
          msgToAdd = <UserMsg msg={messages[int].msg} key={int} />
        } else {
          msgToAdd = <RyanMsg msg={messages[int].msg} key={int} />
        }

        //adjust the hoppers holdings
        if (msgHopper.length > 4) {
          newHopper = [...msgHopper.slice(1, undefined), msgToAdd]
        } else {
          newHopper = [...msgHopper, msgToAdd]
        }

        //add the msg after defined  timeout
        setShowTyping(messages[int].speaker === 'You' ? 'You' : 'Ryan')
        const interval2 = setTimeout(() => {
          setMsgHopper(newHopper)
          if (int === messages.length - 1) {
            setInt(0)
          } else {
            setInt(int + 1)
          }
          setShowTyping(null)
        }, millisecondDelay)

        return () => clearInterval(interval2)
      }, 1500)

      return () => clearInterval(intervalId) //This is important
    }
  }, [int, hasActivated])

  return (
    <div
      className="grid max-w-md grid-cols-1 gap-6 px-4 mx-auto text-left sm:max-w-3xl sm:px-6 md:grid-cols-2 md:gap-0 lg:max-w-7xl lg:px-8"
      ref={currentElement}
    >
      {/* Column 1 */}
      <div>
        <h2 className="text-base font-semibold tracking-wider uppercase text-primary-600">
          What You Want
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What I Do
        </p>
        <p className="mx-auto mt-5 text-xl text-gray-500 ">
          You have problems. I understand that and I make them go away.
        </p>
      </div>

      {/* Column 2 */}
      <div className=" h-96">
        <div className="flex flex-col justify-end w-full max-w-md px-4 mx-auto overflow-y-hidden max-h-96">
          {msgHopper.map((msg) => {
            return msg
          })}
          {showTyping === 'You' ? <UserTyping /> : null}
          {showTyping === 'Ryan' ? <RyanTyping /> : null}
        </div>
      </div>
    </div>
  )
}

const UserMsg = ({ msg }: { msg: string }) => {
  return (
    <div className="w-full my-2 text-left">
      <p className="ml-2 text-xs font-bold text-left text-gray-700 uppercase light">
        you
      </p>
      <div className="relative">
        <p className="relative z-20 w-10/12 p-2 bg-gray-200 rounded-lg ">
          {msg}
        </p>
        <img
          src="/images/msg-tail-gray.svg"
          className="absolute z-10 w-8 h-8 -bottom-2 -left-4"
        />
      </div>
    </div>
  )
}

const RyanMsg = ({ msg }: { msg: string }) => {
  return (
    <div className="float-right w-full my-2">
      <p className="mr-2 text-xs font-bold text-right text-gray-700 uppercase">
        Ryan
      </p>
      <div className="relative float-right">
        <p className="relative z-20 float-right w-10/12 p-2 text-white rounded-lg bg-primary-600">
          {msg}
        </p>
        <img
          src="/images/msg-tail-primary.svg"
          className="absolute w-8 h-8 -bottom-2 -right-4"
        />
      </div>
    </div>
  )
}

const UserTyping = () => {
  return (
    <div className="w-full my-2">
      <div className="relative grid float-left grid-cols-3 px-2 py-3 bg-gray-200 rounded-full animate-pulse">
        <div className="mx-0.5 h-2 w-2 rounded-full bg-white" />
        <div className="mx-0.5 h-2 w-2 rounded-full bg-white" />
        <div className="mx-0.5 h-2 w-2 rounded-full bg-white" />
      </div>
    </div>
  )
}

const RyanTyping = () => {
  return (
    <div className="w-full my-2 ">
      <div className="relative grid float-right grid-cols-3 px-2 py-3 rounded-full animate-pulse bg-primary-600">
        <div className="mx-0.5 h-2 w-2 rounded-full bg-primary-300" />
        <div className="mx-0.5 h-2 w-2 rounded-full bg-primary-300" />
        <div className="mx-0.5 h-2 w-2 rounded-full bg-primary-300" />
      </div>
    </div>
  )
}
