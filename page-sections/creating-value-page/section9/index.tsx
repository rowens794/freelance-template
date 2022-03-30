interface Props {}

export default function Example(props: Props) {
  return (
    <div className="overflow-hidden bg-white" id="summary">
      <div className="relative px-4 py-8 mx-auto sm:px-6 lg:max-w-5xl lg:py-16 lg:px-8">
        <div className="relative mx-auto text-base max-w-prose">
          <div>
            <span className="text-base font-semibold tracking-wide uppercase text-primary-600">
              Summary
            </span>
            <h2 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-gray-700 sm:text-4xl">
              Takeaways For Creating a High-Value Website
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-8">
          <div className="mt-8 lg:mt-0 ">
            <div className="mx-auto mt-5 text-gray-500 prose-primary ">
              <p className="mx-auto my-4 prose">
                Most small practices in the US have not made their website a
                focus of their customer acquisition strategy. Historically,
                there has not been a critical mass of high intent traffic to
                make the channel worth seriously pursuing. However, as we saw in
                the{' '}
                <a
                  href="#advisor-search"
                  className="font-base text-primary-700"
                >
                  chart
                </a>{' '}
                at the beginning of this article, over the last few years,
                there's been a shift. People are changing their behavior when it
                comes to finding help planning their future. They are
                increasingly turning to the web to find an advisor.
              </p>
              <p className="mx-auto my-4 prose">
                An opportunity exists for agile practices to create a presence
                on the web that outshines its competition and scoops up leads.
                This guide doesn't contain every detail of what you'll need to
                do to get your site up and running. Still, it should give you
                enough information to start a conversation with a developer or
                an agency about how they can help you better leverage your
                online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
