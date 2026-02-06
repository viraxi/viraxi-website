"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // prevent background scroll when menu is open on mobile
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => { document.documentElement.style.overflow = '' }
  }, [open])

  return (
    <header className={`w-full py-3 px-4 transition-all duration-150 ${scrolled ? 'header-scrolled shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
              <Image src="/logo-48.png" alt="Viraxi" width={40} height={40} />
              <span className="text-lg font-semibold text-[var(--text)]">Viraxi</span>
          </Link>
        </div> 

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#about" className="text-[var(--muted)] hover:text-[var(--text)]">About</Link>
          <Link href="/packages" className="text-[var(--muted)] hover:text-[var(--text)]">Packages</Link>
          <Link href="/midna" className="text-[var(--muted)] hover:text-[var(--text)]">Midna</Link>
          <Link href="#contact" className="text-[var(--muted)] hover:text-[var(--text)]">Contact</Link>
          <a className="text-[var(--muted)] hover:text-[var(--text)] inline-flex items-center gap-2" href="https://github.com/viraxi" target="_blank" rel="noopener noreferrer" aria-label="Viraxi GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.88-.38.98 0 1.96.13 2.88.38 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.68.42.36.8 1.08.8 2.17 0 1.57-.02 2.84-.02 3.23 0 .31.21.68.8.56C20.21 21.39 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>



        {/* Mobile toggle */}
        <div className="md:hidden">
          <button aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)} className="p-2 rounded-md text-[var(--muted)] hover:bg-[rgba(255,255,255,0.06)] dark:hover:bg-[rgba(0,0,0,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(255,255,255,0.12)]">
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div id="mobile-menu" className={`md:hidden transition-max-h duration-200 overflow-hidden ${open ? 'max-h-60' : 'max-h-0'}`}>
        <nav className="px-4 pt-4 pb-6">
          <ul className="flex flex-col gap-3">
            <li><Link href="#about" onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-[var(--muted)] hover:bg-[rgba(255,255,255,0.04)]">About</Link></li>
            <li><Link href="/packages" onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-[var(--muted)] hover:bg-[rgba(255,255,255,0.04)]">Packages</Link></li>
            <li><Link href="/midna" onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-[var(--muted)] hover:bg-[rgba(255,255,255,0.04)]">Midna</Link></li>
            <li><Link href="#contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-[var(--muted)] hover:bg-[rgba(255,255,255,0.04)]">Contact</Link></li>
            <li className="pt-2 border-t border-slate-800"><ThemeToggle /></li>
            <li><a className="block px-3 py-2 rounded text-[var(--muted)] hover:bg-[rgba(255,255,255,0.04)]" href="https://github.com/viraxi/viraxi-website" target="_blank" rel="noopener noreferrer">Source</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
