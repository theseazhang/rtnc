import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid'

export function BackHome({ href = '/', text = 'Home' }) {
  return (
    <nav className="my-10 text-center">
      <Link
        href={href}
        className="inline-flex flex-col items-center justify-center gap-2 text-3xl font-semibold text-blue-500 hover:text-blue-600 sm:flex-row"
      >
        <HomeIcon className="h-16 w-16 sm:h-8 sm:w-8" />
        {text}
      </Link>
    </nav>
  )
}
