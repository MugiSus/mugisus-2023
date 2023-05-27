function Heading({ title, subtitle } : { title: string, subtitle: string }) {
  return (
    <div className="flex items-baseline gap-x-4 gap-y-3 flex-wrap px-4 mt-4 mb-6 font-pop relative before:bg-black before:w-full before:-left-full before:absolute before:h-12 before:mt-0.5">
      <h1 className="text-6xl font-bold tracking-wider">{title}</h1>
      <h2 className="text-3xl font-medium tracking-wider">{subtitle}</h2>
    </div>
  )
}

function Subheading({ title, subtitle } : { title: string, subtitle: string }) {
  return (
    <div className="flex items-baseline gap-x-4 gap-y-2 flex-wrap px-4 mt-4 mb-6 font-pop relative before:bg-black before:w-full before:-left-full before:absolute before:h-2.5 before:mt-5">
      <h1 className="text-5xl font-bold tracking-wider">{title}</h1>
      <h2 className="text-2xl font-medium tracking-wider">{subtitle}</h2>
    </div>
  )
}

export { Heading, Subheading }