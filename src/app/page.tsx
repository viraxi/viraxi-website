import SectionTitle from '../components/SectionTitle'

export default function Home() {
  return (
    <section className="py-24">
      <div className="text-center">
        <SectionTitle badge="Featured" title="We craft simple web products with fast, accessible UX." subtitle="Design-led engineering: fast, reliable, and easy to use. We focus on clarity and performance." />
        <div className="flex items-center justify-center gap-4 mt-6">
          <a className="btn btn-primary" href="mailto:contact@viraxi.tech" aria-label="Start a conversation">Start a conversation</a>
          <a className="btn btn-ghost" href="#work">See what we build</a>
        </div>
      </div>

      <section id="about" aria-labelledby="about-heading" className="mt-20 max-w-2xl mx-auto text-center text-[var(--muted)]">
        <h3 id="about-heading" className="text-2xl font-semibold mb-3">About Viraxi</h3>
        <p className="mb-6">We ship clean, modern digital products — minimal, reliable and fast.</p>
        <ul className="grid gap-4 sm:grid-cols-3 mt-6">
          <li className="text-sm text-[var(--muted)]">Performance-first design</li>
          <li className="text-sm text-[var(--muted)]">Accessible & semantic markup</li>
          <li className="text-sm text-[var(--muted)]">Minimal, maintainable UI</li>
        </ul>

        <div className="mt-8 p-6 rounded-md surface">
          <h4 className="text-lg font-semibold text-[var(--text)] mb-1">Featured project: Midna</h4>
          <p className="text-[var(--muted)] mb-3">Midna auto-discovers and manages Python dependencies by scanning your code and requirements files. It helps keep environments clean and repeatable. <a href="/midna" className="text-[var(--accent)] hover:text-[var(--text)]">Learn more</a></p>
          <div className="flex items-center justify-center gap-3">
            <a className="btn btn-primary" href="/midna">Midna page</a>
            <a className="btn btn-ghost" href="https://github.com/viraxi/midna" target="_blank" rel="noopener noreferrer">Repository</a>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-20 max-w-2xl mx-auto text-center text-[var(--muted)]">
        <h3 className="text-2xl font-semibold mb-3 text-[var(--text)]">Get in touch</h3>
        <p className="mb-4">For inquiries or collaborations, reach out via email.</p>
        <a className="btn btn-primary inline-block" href="mailto:contact@viraxi.tech">contact@viraxi.tech</a>
      </section>
    </section>
  )
}
