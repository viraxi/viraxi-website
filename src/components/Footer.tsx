import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 border-t border-slate-800 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="md:max-w-xs">
          <Link href="/" className="flex items-center gap-3"><img src="/logo-48.png" alt="Viraxi" width={36} height={36} /><span className="font-semibold text-[var(--text)]">Viraxi</span></Link>
          <p className="mt-4 text-sm text-[var(--muted)]">Design and build modern, minimal web experiences focused on clarity, performance, and accessibility.</p>
        </div>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-[var(--text)] mb-3">Company</h4>
            <ul className="space-y-2 text-[var(--muted)] text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="/packages" className="hover:text-white">Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text)] mb-3">Community</h4>
            <ul className="space-y-2 text-[var(--muted)] text-sm">
              <li><a href="https://github.com/viraxi" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-100 mb-3">Contact</h4>
            <p className="text-gray-300 text-sm">contact@viraxi.tech</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-6 top-0 opacity-10 dark:opacity-6 hidden sm:block" aria-hidden>
        {/* subtle decorative SVG, theme-aware via currentColor */}
        <svg width="220" height="80" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="rgba(255,255,255,0.05)"/><stop offset="1" stopColor="rgba(255,255,255,0.02)"/></linearGradient></defs><rect x="0" y="0" width="220" height="80" rx="10" fill="url(#g1)"/></svg>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Viraxi. All rights reserved.</p>
    </footer>
  )
}
