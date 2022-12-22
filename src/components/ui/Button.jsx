import Link from 'next/link'
import clsx from 'clsx'

const defaultStyle =
  'inline-flex items-center justify-center rounded-md py-2 px-3 text-sm border border-transparent font-medium shadow-sm leading-4 gap-2'

const focusStyle =
  'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'

const variantStyles = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
  secondary: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
  white: 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300',
}

export function Button({
  variant = 'primary',
  buttonType = 'button',
  noStyle = false,
  className,
  href,
  ...props
}) {
  className = clsx(defaultStyle, variantStyles[variant], focusStyle, className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} type={buttonType} />
  )
}
