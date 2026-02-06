import PackageCard from '@/components/PackageCard'
import SectionTitle from '@/components/SectionTitle'

export const metadata = {
  title: 'Packages — Viraxi',
  description: 'Packages and tools maintained by Viraxi',
}

export default function PackagesPage() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto text-[var(--muted)]">
        <header className="text-center">
          <SectionTitle badge="Tools" title="Packages" subtitle="Small, focused tools and libraries maintained by Viraxi. Click a package to learn more." />
        </header>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2">
          <PackageCard
            title="Midna"
            description="Smart Python package assistant that auto-discovers project imports and manages dependencies."
            href="/midna"
            repo="https://github.com/viraxi/midna"
          />
        </div>
      </div>
    </section>
  )
}