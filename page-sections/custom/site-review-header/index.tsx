import React from 'react'

type Props = {}

export default function index({}: Props) {
  return (
    <div className="m-auto mt-24 mb-24 grid min-h-[calc(100vh-90px)] max-w-6xl grid-cols-1 px-4 sm:px-8 lg:mb-0 lg:grid-cols-2 ">
      <div className="flex items-center justify-center">
        <div className="text-center lg:text-left">
          <span className="text-xl font-extrabold text-gray-600">
            Claim Your
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl lg:text-left">
            <span className="block pb-8 text-primary-600 sm:pb-0 xl:inline">
              Free Website Review
            </span>
          </h1>
          <p className="my-6 text-left text-gray-500 xs:text-lg sm:mx-auto sm:mt-5 sm:max-w-lg md:mt-5 md:text-xl lg:mx-0">
            I specialize in helping financial advisors and wealth managers
            create a compelling online presence for their clients and
            prospective clients in their market.
          </p>
          <p className="my-6 text-left text-gray-500 xs:text-lg sm:mx-auto sm:mt-5 sm:max-w-lg md:mt-5 md:text-xl lg:mx-0">
            I want to help you understand exactly what's going right{' '}
            <span className="underline">and</span> wrong with yours.
          </p>
          <p className="my-6 text-left text-gray-500 xs:text-lg sm:mx-auto sm:mt-5 sm:max-w-lg md:mt-5 md:text-xl lg:mx-0">
            Fill out the form to the right and{' '}
            <span className="font-semibold text-gray-600">
              I'll record a 30 minute website evaluation video
            </span>{' '}
            for you where I'll review your design, SEO, site performance, and
            other aspects of your website.
          </p>
          <p className="my-6 text-left text-gray-500 xs:text-lg sm:mx-auto sm:mt-5 sm:max-w-lg md:mt-5 md:text-xl lg:mx-0">
            Once the video is recorded, I'll email it over to you.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-end">
        <form
          name="ContactPage"
          method="POST"
          data-netlify="true"
          action="/contact/success"
          className="grid float-right grid-cols-1 gap-2 px-4 py-8 bg-gray-200 rounded-md shadow-lg w-96"
        >
          <input
            type="hidden"
            name="form-name"
            value="WebsiteReview"
            className="grid grid-cols-1 gap-y-6"
          />
          <div>
            <label htmlFor="full-name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              autoComplete="name"
              className="block w-full px-2 py-2 text-gray-700 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="Full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full px-2 py-2 text-gray-700 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Website Url
            </label>
            <input
              type="text"
              name="url"
              id="url"
              className="block w-full px-2 py-2 text-gray-700 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="Your Website Url"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              className="block w-full px-2 py-2 text-gray-700 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="Anything I should know?"
              defaultValue={''}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="inline-flex justify-center px-6 py-2 mt-2 ml-4 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
