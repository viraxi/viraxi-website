
"use client"

export default function Midna() {
  return (
    <section className="py-8 max-w-3xl mx-auto">
      <div className="mb-6 p-6 rounded-md surface">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Midna</h1>
            <p className="text-sm text-gray-300 mt-1">Smart Python package assistant — auto-discovers and manages Python dependencies.</p>
            <div className="mt-3 flex items-center gap-2">
              <img src="https://static.pepy.tech/badge/midna" alt="Downloads" className="h-5" />
              <img src="https://img.shields.io/pypi/v/midna.svg" alt="PyPI version" className="h-5" />
              <img src="https://img.shields.io/github/stars/viraxi/midna?style=social" alt="GitHub stars" className="h-5" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value="pip install midna"
                readOnly
                className="bg-slate-900 text-white px-3 py-2 rounded font-mono text-sm w-40 cursor-pointer select-all"
                onFocus={e => e.target.select()}
                aria-label="Copy pip install command"
              />
              <button
                className="btn btn-primary px-3 py-2 text-sm"
                onClick={() => {navigator.clipboard.writeText('pip install midna')}}
                aria-label="Copy to clipboard"
              >Copy</button>
            </div>
            <a className="btn btn-outline" href="https://github.com/viraxi/midna" target="_blank" rel="noopener noreferrer">Repository</a>
          </div>
        </div>
      </div>

      <div className="prose">
        <p className="text-gray-400">Full documentation is available in the project's README — open the links above to view it.</p>
      </div>

      <section className="mb-8">
        <h3 className="text-lg font-semibold text-slate-100 mb-2">Why use Midna</h3>
        <p className="text-gray-300">Keep your environment clean and repeatable. Midna avoids installing unused packages and helps maintain consistent requirements across environments.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-100 mb-2">Links & resources</h3>
        <ul className="text-gray-300 space-y-2">
          <li><a className="text-gray-200 hover:text-white" href="https://github.com/viraxi/midna" target="_blank" rel="noopener noreferrer">Repository</a></li>
          <li><a className="text-gray-200 hover:text-white" href="https://pypi.org/project/midna/" target="_blank" rel="noopener noreferrer">PyPI</a></li>
          {/* Download stats link removed as requested */}
          <li><a className="text-gray-200 hover:text-white" href="https://github.com/viraxi/midna/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">License (Apache 2.0)</a></li>
        </ul>
      </section>
    </section>
  )
}