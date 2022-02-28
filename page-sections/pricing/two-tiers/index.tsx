import Smile from '../../../components/svg-backgrounds/smile'
import Button from '../../../components/buttons/standard-cta'

import { CheckIcon } from '@heroicons/react/outline'

const pricing = {
  tiers: [
    {
      title: 'Standard Return',
      price: 85,
      description: 'Best for individuals and families with steady jobs.',
      features: [
        'File individually or jointly w/ spouse',
        'Itemize deductions (if applicable)',
        'E-File for Fastest Refund',
        'Lifetime Accuracy Guarentee',
        'Lifetime IRS audit support',
      ],
      cta: 'Schedule Appointment',
      ctaLink: '/contact',
    },
    {
      title: 'Standard + Business',
      price: 150,
      description:
        'Best for individuals for families with a business and/or rental property.',
      features: [
        'Everything in Standard Return, plus',
        'Business Return (Schedule C)',
        'Rental Property (Schedule E)',
        'Lifetime Accuracy Guarentee',
        'Lifetime IRS audit support',
      ],
      cta: 'Schedule Appointment',
      ctaLink: '/contact',
    },
  ],
}

export default function Example() {
  return (
    <div className="m-auto mt-32 bg-white max-w-7xl">
      {/* Header and Page Header */}
      <div className="relative">
        {/* Page Header */}
        <div className="relative max-w-2xl px-4 pb-8 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative">
            <h2 className="text-4xl font-extrabold text-center text-primary-700 drop-shadow-md">
              The best prices in town
            </h2>
            <p className="max-w-2xl m-auto text-xl italic text-center text-gray-400">
              (or on the internet for that matter)
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="relative" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading" className="sr-only">
          Pricing
        </h2>

        {/* Tiers */}
        <div className="px-4 m-auto mx-auto space-y-12 max-w-4lg sm:px-6 lg:grid lg:max-w-4xl lg:grid-cols-2 lg:gap-x-8 lg:space-y-0 lg:px-8 ">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white shadow-[0_0px_5px_3px_rgba(0,0,0,0.075)]"
            >
              <div className="relative p-8 pb-36">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-900">
                    {tier.title}
                  </h3>

                  <p className="flex items-baseline mt-4 text-primary-700">
                    <span className="text-5xl font-extrabold tracking-tight">
                      ${tier.price}
                    </span>
                  </p>

                  <hr className="mt-4 border-primary-100" />
                  <p className="mt-6 text-gray-500">{tier.description}</p>

                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon
                          className="flex-shrink-0 w-6 h-6 text-primary-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute bottom-0 w-full">
                <Smile color="fill-primary-100" />
                <div className="w-full p-6 text-center bg-primary-100">
                  <Button text={tier.cta} href={tier.ctaLink} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
