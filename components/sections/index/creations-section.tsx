import { Subheading } from "../../heading"
import CreationCard from "../../creation-card"

/* @ts-ignore since creationsYaml is not a module but a yaml file */
import creationsYaml from '@/data/creations.yaml'
import { CreationProps } from "@/data/types"

export default function CreationsSection() {
  return (
    <section className="mt-12">
      <Subheading title="Creations" subtitle="Artworks & Products" />
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(24rem,1fr))]">
        {
          creationsYaml.map((creation: CreationProps, index: number) => 
            <CreationCard key={index} {...creation}/>
          )
        }
      </div>
    </section>
  )
}