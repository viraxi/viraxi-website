"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
          <Link href="/" className="flex items-center gap-3 group transition-transform duration-150 hover:scale-105">
              <Image src="/logo-48.png" alt="Viraxi" width={40} height={40} className="transition-transform duration-150 group-hover:scale-110" />
              <span className="text-lg font-semibold text-[var(--text)] transition-colors duration-150 group-hover:text-[var(--accent)]">Viraxi</span>
          </Link>
        </div> 

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="text-[var(--muted)] hover:text-[var(--text)]">Home</Link>
          <Link href="/docs" className="text-[var(--muted)] hover:text-[var(--text)]">Docs</Link>
          <Link href="/midna" className="text-[var(--muted)] hover:text-[var(--text)]">Midna</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/viraxi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Viraxi GitHub Organization"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
        </div>



        {/* Mobile toggle */}
        <div className="md:hidden">
          <button aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)} className="p-2 rounded-lg text-[var(--muted)] hover:bg-[rgba(255,255,255,0.06)] dark:hover:bg-[rgba(0,0,0,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 transition-all">
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
            <li><Link href="/" onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-[var(--muted)] hover:bg-[rgba(255,255,255,0.04)]">Home</Link></li>
            <li><Link href="/docs" onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-[var(--muted)] hover:bg-[rgba(255,255,255,0.04)]">Docs</Link></li>
            <li><Link href="/midna" onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-[var(--muted)] hover:bg-[rgba(255,255,255,0.04)]">Midna</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
