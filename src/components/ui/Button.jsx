import Link from 'next/link'
import clsx from 'clsx'

const defaultStyle =
  'inline-flex items-center justify-center rounded-md border border-transparent font-medium shadow-sm'

const variantStyles = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
  secondary: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
  white: 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
}

const sizeStyles = {
  sm: 'text-sm py-2 px-3 leading-4',
  base: 'text-base py-2 px-4 leading-5',
  lg: 'text-base px-6 py-3 leading-5',
}

export function Button({
  variant = 'primary',
  buttonType = 'button',
  size = 'sm',
  noStyle = false,
  className,
  href,
  ...props
}) {
  className = clsx(
    defaultStyle,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} type={buttonType} />
  )
}
