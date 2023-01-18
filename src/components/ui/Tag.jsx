import Link from 'next/link'
import clsx from 'clsx'

const defaultStyle =
  'inline-flex items-center justify-center text-black lowercase border-2 border-black/80 px-2 py-1.5 bg-white text-sm hover:shadow-none duration-200 ease-in-out transition'

const colorStyle = {
  red: 'shadow-[4px_4px_0_0_#EF4444] hover:bg-red-500',
  yellow: 'shadow-[4px_4px_0_0_#F59E0B] hover:bg-yellow-500',
  green: 'shadow-[4px_4px_0_0_#10B981] hover:bg-green-500',
  blue: 'shadow-[4px_4px_0_0_#3B82F6] hover:bg-blue-500',
  purple: 'shadow-[4px_4px_0_0_#8B5CF6] hover:bg-purple-500',
  pink: 'shadow-[4px_4px_0_0_#EC4899] hover:bg-pink-500',
  orange: 'shadow-[4px_4px_0_0_#F97316] hover:bg-orange-500',
  lime: 'shadow-[4px_4px_0_0_#84CC16] hover:bg-lime-500',
  teal: 'shadow-[4px_4px_0_0_#14B8A6] hover:bg-teal-500',
  sky: 'shadow-[4px_4px_0_0_#0EA5E9] hover:bg-sky-500',
  rose: 'shadow-[4px_4px_0_0_#F43F5E] hover:bg-rose-500',
  indigo: 'shadow-[4px_4px_0_0_#6366F1] hover:bg-indigo-500',
}

const defaultColors = []

for (const key in colorStyle) {
  defaultColors.push(key)
}

export function Tag({
  href = '#',
  tagName = 'tag',
  tagNum = 0,
  color = 'red',
  className,
}) {
  className = clsx(defaultStyle, colorStyle[color] || 'red', className)
  return (
    <Link href={href} className={className}>
      {tagName}
      <span className="ml-2 border-l-2 border-black/80 pl-2">{tagNum}</span>
    </Link>
  )
}

export function Tags({ items, className }) {
  console.log(defaultColors)
  className = clsx('flex flex-wrap gap-2', className)
  return (
    <div className={className}>
      {items.map((item, index) => (
        <Tag
          key={index}
          tagName={item.tagName}
          tagNum={item.tagNum}
          href={item.href}
          color={item.color || defaultColors[index % 12]}
        />
      ))}
    </div>
  )
}
