
export default function Home() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">Viraxi is designed around simple, focused components.</h1>
      <p className="text-lg text-[var(--muted)] mb-8">Each tool does one thing well and integrates cleanly with others. This modular approach lets you build, extend, and scale functionality without unnecessary complexity.</p>
      <blockquote className="mt-8 mb-12 text-xl italic text-[var(--muted)] max-w-2xl mx-auto">“The whole is greater than the sum of its parts.”<br /><span className="block mt-2 text-base not-italic text-right">— Aristotle</span></blockquote>
      <a className="btn btn-primary mb-16" href="mailto:contact@viraxi.tech" aria-label="Start a conversation">Start a conversation</a>

      {/* Philosophy section removed as requested */}
    </section>
  )
}
