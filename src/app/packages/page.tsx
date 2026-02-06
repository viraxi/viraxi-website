import PackageCard from '@/components/PackageCard'

export const metadata = {
  title: 'Packages — Viraxi',
  description: 'Packages and tools maintained by Viraxi',
}

export default function PackagesPage() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto text-gray-300">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">Packages</h1>
          <p className="lead mt-2">Small, focused tools and libraries maintained by Viraxi. Click a package to learn more.</p>
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