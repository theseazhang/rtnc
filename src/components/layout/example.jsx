export function Example({ title, children }) {
  return (
    <section className="mx-auto max-w-5xl p-8">
      <h1 className="mb-10 border-b border-slate-200 pb-8 text-center text-3xl font-bold">
        {title}
      </h1>
      <div className="my-10 flex flex-col flex-wrap items-start justify-start gap-10 sm:flex-row">
        {children}
      </div>
    </section>
  )
}
