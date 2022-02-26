import Link from 'next/link'
import navSections from '../../../data/navigation-sections'
import clientInfo from '../../../data/clientInfo'

export default function Index() {
  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          {navSections
            .filter((item) => item.type === 'link')
            .map((item) => (
              <div key={item.title} className="px-5 py-2">
                <Link href={item.href}>
                  <a
                    href={item.href}
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    {item.title}
                  </a>
                </Link>
              </div>
            ))}
        </nav>
        {clientInfo.social.length > 0 ? (
          <div className="flex justify-center mt-8 space-x-6">
            {clientInfo.social.map((item) => (
              <a
                href={item.href}
                key={item.platform}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.platform}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
        <p className="mt-2 text-sm font-light text-center text-gray-400">
          &copy; {new Date().getFullYear()} {clientInfo.name} All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
