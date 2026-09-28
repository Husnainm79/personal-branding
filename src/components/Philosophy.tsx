import { Distribution } from './Distribution.tsx'
import { Pillars } from './Pillars.tsx'
import { Reveal } from './Reveal.tsx'

export function Philosophy() {
  return (
    <section id="pillars" className="relative border-t border-slate-200 bg-white px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Pillars />
        </Reveal>

        <Reveal className="mt-16 lg:mt-20" delay={0.05}>
          <Distribution />
        </Reveal>
      </div>
    </section>
  )
}
