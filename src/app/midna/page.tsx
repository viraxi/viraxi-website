export const metadata = {
  title: 'Midna — Smart Python package assistant',
  description: 'Midna auto-discovers and manages Python dependencies by scanning your code and requirements files.',
}

export default function MidnaPage() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto text-[var(--muted)]">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text)]">Midna</h1>
          <p className="mt-2 text-lg">The smart Python package assistant — auto-discovers what packages your project actually uses.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a className="btn btn-primary" href="https://pypi.org/project/midna/" target="_blank" rel="noopener noreferrer">Install on pip</a>
            <a className="btn btn-ghost" href="https://github.com/viraxi/midna" target="_blank" rel="noopener noreferrer">View source</a>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-2">What it does</h2>
          <p className="mb-2 text-[var(--muted)]">Midna scans your project for imports and requirements files and proposes the minimal set of packages you actually need. It supports installing missing packages, cleaning unused ones, and offers a dry-run mode for safety.</p>
          <pre className="bg-slate-900 text-sm p-4 rounded text-gray-200">{`# Install
pip install midna

# Common usage
midna           # auto-discovers and installs missing packages
midna --dry-run # preview changes
midna --uninstall # remove unused packages`}</pre>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-slate-100 mb-2">Key features</h3>
          <ul className="list-disc ml-5 space-y-2 text-gray-300">
            <li>Intelligent package detection from import analysis</li>
            <li>Supports common formats: requirements.txt, pyproject.toml, Pipfile</li>
            <li>Safe dry-run mode and uninstall support</li>
            <li>Security-minded: pip-audit + Bandit checks in CI</li>
            <li>Minimal runtime dependencies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-slate-100 mb-2">Why use Midna</h3>
          <p className="text-gray-300">Keep your environment clean and repeatable. Midna avoids installing unused packages and helps maintain consistent requirements across environments.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-100 mb-2">Links & resources</h3>
          <ul className="text-gray-300 space-y-2">
            <li><a className="text-gray-200 hover:text-white" href="https://github.com/viraxi/midna" target="_blank" rel="noopener noreferrer">Repository</a></li>
            <li><a className="text-gray-200 hover:text-white" href="https://pypi.org/project/midna/" target="_blank" rel="noopener noreferrer">PyPI</a></li>
            <li><a className="text-gray-200 hover:text-white" href="https://pepy.tech/project/midna" target="_blank" rel="noopener noreferrer">Download stats</a></li>
            <li><a className="text-gray-200 hover:text-white" href="https://github.com/viraxi/midna/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">License (Apache 2.0)</a></li>
          </ul>
        </section>

      </div>
    </section>
  )
}