export default function Home() {
  return (
    <section className="py-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 animate-fade-up">We craft simple web products with fast, accessible UX.</h1>
        <p className="text-lg text-gray-300 mb-6 animate-fade-up delay-75">Design-led engineering: fast, reliable, and easy to use. We focus on clarity and performance.</p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <a className="btn btn-primary" href="mailto:hello@viraxi.tech" aria-label="Start a conversation">Start a conversation</a>
          <a className="btn btn-ghost" href="#work">See what we build</a>
        </div>
      </div>

      <section id="about" aria-labelledby="about-heading" className="mt-20 max-w-2xl mx-auto text-center text-gray-300">
        <h3 id="about-heading" className="text-2xl font-semibold mb-3">About Viraxi</h3>
        <p className="mb-6">We ship clean, modern digital products — minimal, reliable and fast.</p>
        <ul className="grid gap-4 sm:grid-cols-3 mt-6">
          <li className="text-sm text-gray-300">Performance-first design</li>
          <li className="text-sm text-gray-300">Accessible & semantic markup</li>
          <li className="text-sm text-gray-300">Minimal, maintainable UI</li>
        </ul>

        <div className="mt-8 p-6 rounded-md bg-slate-900 border border-slate-800">
          <h4 className="text-lg font-semibold text-slate-100 mb-1">Featured project: Midna</h4>
          <p className="text-gray-300 mb-3">Midna auto-discovers and manages Python dependencies by scanning your code and requirements files. It helps keep environments clean and repeatable. <a href="/midna" className="text-gray-200 hover:text-white">Learn more</a></p>
          <div className="flex items-center justify-center gap-3">
            <a className="btn btn-primary" href="/midna">Midna page</a>
            <a className="btn btn-ghost" href="https://github.com/viraxi/midna" target="_blank" rel="noopener noreferrer">Repository</a>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-20 max-w-2xl mx-auto text-center text-gray-300">
        <h3 className="text-2xl font-semibold mb-3">Get in touch</h3>
        <p className="mb-4">For inquiries or collaborations, reach out via email.</p>
        <a className="inline-block px-6 py-3 rounded-md bg-white text-slate-900" href="mailto:hello@viraxi.tech">hello@viraxi.tech</a>
      </section>
    </section>
  )
}
