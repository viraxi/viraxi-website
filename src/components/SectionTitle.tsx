export default function SectionTitle({ badge, title, subtitle }: { badge?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      {badge && (
        <p className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 badge">{badge}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold mb-2">{title}</h2>
      {subtitle && <p className="lead max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
