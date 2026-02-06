"use client"

import Link from 'next/link'

export default function PackageCard({ title, description, href, repo }: { title: string; description: string; href: string; repo: string }) {
  return (
    <article role="article" className="p-4 rounded-md bg-slate-900 border border-slate-800">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-slate-100">{title}</h4>
          <p className="text-gray-300 mt-1">{description}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Link href={href}>
          <a className="btn btn-primary" aria-label={`Open ${title} page`}>Open</a>
        </Link>
        <a className="btn btn-ghost" href={repo} target="_blank" rel="noopener noreferrer">Repository</a>
      </div>
    </article>
  )
}