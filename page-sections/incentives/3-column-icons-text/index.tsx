import {
  BadgeCheckIcon,
  CalendarIcon,
  TruckIcon,
} from '@heroicons/react/outline'

const incentives = [
  { name: 'Free, contactless delivery', icon: TruckIcon },
  { name: 'No questions asked returns', icon: BadgeCheckIcon },
  { name: '2-year warranty', icon: CalendarIcon },
]

export default function Index() {
  return (
    <div className="bg-white py-12">
      <h2 className="sr-only">Why you should buy from us</h2>
      <div className="flex overflow-x-auto">
        <div className="mx-auto flex space-x-12 whitespace-nowrap px-4 py-3 sm:px-6 lg:space-x-24 lg:px-8">
          {incentives.map((incentive) => (
            <div
              key={incentive.name}
              className="flex items-center text-sm font-medium text-primary-600"
            >
              <incentive.icon
                className="mr-2 h-6 w-6 flex-none"
                aria-hidden="true"
              />
              <p>{incentive.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
