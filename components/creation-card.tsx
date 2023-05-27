/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { format } from 'date-fns'

/* @ts-ignore since creationsYaml is not a module but a yaml file */
import creationFeatiresYaml from '@/data/creationfeatures.yaml'
import { CreationProps } from '@/data/types'

function FeatureBannar({ icon, title }) {
  return (
    <div className="bg-white h-14 w-14 outline outline-black outline-6 -outline-offset-3">

    </div>
  )
}

export default function Creation({ url, image, title, date, content, features }: CreationProps) {
  return (
    <article className="grid bg-green outline outline-black outline-6 -outline-offset-3 grid-rows-[1fr_3.5rem] grid-cols-[1fr_3.5rem]">
      <div className='outline outline-black outline-6 -outline-offset-3'>
        <img src={image} alt={title} className='object-cover object-center aspect-[8/5] h-full w-full' />
      </div>
      <div className='flex flex-col-reverse overflow-y-scroll'>
        {
          features.map((feature: any, index: number) => (
            <FeatureBannar key={index} {...creationFeatiresYaml[feature]} />
          ))
        }
      </div>
      <div className='flex justify-end overflow-x-scroll'>
        <div className='flex flex-col items-end justify-center bg-white px-4 font-pop whitespace-nowrap outline outline-black outline-6 -outline-offset-3'>
          <time className='text-xs font-semibold tracking-wide tabular-nums mt-1 -mb-1 text-gray font-mono'>
            {format(date, 'yyyy.MM.dd')}
          </time>
          <span className='text-lg font-semibold tracking-wide'>
            {title}
          </span>
        </div>
      </div>
      <div className='bg-white h-14 w-14 outline outline-black outline-6 -outline-offset-3'></div>
    </article>
  )
}