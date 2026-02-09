import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 border-t border-slate-800 mt-16 bg-[var(--surface)]">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-5 text-center">
        <Link href="/" className="flex items-center gap-3 mb-2 group transition-transform duration-150 hover:scale-105">
          <img src="/logo-48.png" alt="Viraxi" width={36} height={36} className="transition-transform duration-150 group-hover:scale-110" />
          <span className="font-semibold text-[var(--text)] transition-colors duration-150 group-hover:text-[var(--accent)]">Viraxi</span>
        </Link>
        <div className="flex items-center gap-4 mb-2">
          <a href="https://github.com/viraxi" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] text-[var(--muted)] transition-colors">GitHub</a>
          <span className="text-gray-500">|</span>
          <a href="mailto:contact@viraxi.tech" className="hover:text-[var(--accent)] text-[var(--muted)] transition-colors">contact@viraxi.tech</a>
        </div>
        <p className="text-center text-sm text-gray-400 mt-4">© {new Date().getFullYear()} Viraxi. All rights reserved.</p>
      </div>
    </footer>
  )
}
