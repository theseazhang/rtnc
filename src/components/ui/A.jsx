export function A({ children, href, className, target = '_blank' }) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
