import Puzzle from '../../../components/illustrations/framework'

interface Props {}

export default function Example(props: Props) {
  return (
    <div className="my-16 overflow-hidden bg-white " id="framework">
      <div className="relative flex flex-col items-center justify-center gap-4 px-4 py-8 mx-auto item sm:px-6 lg:max-w-5xl lg:flex-row lg:py-16 lg:px-8">
        <div>
          <div className="mx-auto text-base max-w-prose ">
            <div>
              <span className="mt-2 text-xl font-bold leading-8 tracking-tight text-gray-700 sm:text-2xl">
                A Framework for Thinking About Your Web Presence
              </span>
            </div>
          </div>
          <div className="mx-auto mt-8 ">
            <div className="mt-8 lg:mt-0 ">
              <div className="mx-auto mt-5 text-gray-500 prose-primary ">
                <p className="mx-auto my-4 prose">
                  Above, we looked at the four concepts you need to understand
                  to develop a successful web property. In this section, we'll
                  dive into each to better understand how they fit together to
                  achieve business objectives.
                </p>
                <p className="mx-auto my-4 prose">
                  As you become more familiar with the separate pieces, keep in
                  mind that the overarching goal is to understand who your users
                  are and where their coming from so that you can infer what
                  they want to present them with a compelling over.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center w-64">
          <Puzzle target="" />
        </div>
      </div>
    </div>
  )
}
