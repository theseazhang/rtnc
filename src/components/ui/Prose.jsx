import clsx from 'clsx'

export function Prose({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        'prose max-w-none prose-a:break-words dark:prose-invert'
      )}
    >
      {children}
    </div>
  )
}
