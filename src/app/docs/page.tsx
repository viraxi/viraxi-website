import repos from '../../data/repos'

export default function Docs() {
  return (
    <section className="max-w-2xl mx-auto py-12">
      <h1 className="text-2xl font-bold mb-4">Documentation</h1>
      <p className="mb-8 text-[var(--muted)]">Find documentation and resources for Viraxi projects. Each tool is open-source and fully documented in its repository.</p>
      <ul className="space-y-6">
        {Object.entries(repos).map(([name, info]) => (
          <li key={name} className="p-6 rounded surface flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-lg font-semibold capitalize">{name}</div>
              <div className="text-sm text-gray-400 mt-1">{info.repo}</div>
            </div>
            <div className="flex items-center gap-2">
              <a className="btn btn-primary" href={info.readme} target="_blank" rel="noopener noreferrer">README</a>
              <a className="btn btn-outline" href={info.repo} target="_blank" rel="noopener noreferrer">Repository</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
