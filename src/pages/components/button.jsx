import { Example } from '@/components/layout/example'
import { Button } from '@/components/ui/Button'
import {
  Basic,
  CheckboxDropdown,
  Dropdown,
  OnlyIcon,
} from '@/components/ui/ButtonGroup'
import {
  EnvelopeIcon,
  PlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid'
import Head from 'next/head'
import Link from 'next/link'

const buttonGroupData = [
  { text: 'Years', href: '#' },
  { text: 'Months', href: '#' },
  { text: 'Days', href: '#' },
]

const dropdownData = {
  text: 'Save changes',
  items: [
    { name: 'Save and schedule', href: '#' },
    { name: 'Save and publish', href: '#' },
    { name: 'It is disabled', href: '#', disabled: true },
  ],
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Buttons</title>
      </Head>
      <nav className="my-10 text-center">
        <Link href="/" className="text-3xl underline hover:text-indigo-600">
          Home
        </Link>
      </nav>
      <Example title="Buttons">
        <Button>primary</Button>
        <Button className="px-4 leading-5">leading-5</Button>
        <Button className="px-4 text-base leading-5">text-base</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="white">white</Button>
        <Button>
          <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
          heroicons
        </Button>
        <Button className="px-6 py-3 text-base leading-5">
          big-button
          <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
        <Button className="rounded-full px-3.5">rounded-full</Button>
        <Button className="rounded-full px-1 py-1" title="circular buttons">
          <PlusIcon className="h-4 w-4" aria-hidden="true" />
        </Button>
      </Example>

      <Example title="Button Groups">
        <Basic items={buttonGroupData} />
        <OnlyIcon>
          <ChevronLeftIcon
            text="Previous"
            className="h-5 w-5"
            aria-hidden="true"
            href="#"
          />
          <ChevronRightIcon
            text="Next"
            className="h-5 w-5"
            aria-hidden="true"
            href="#"
          />
        </OnlyIcon>
        <Dropdown text={dropdownData.text} items={dropdownData.items} />
        <CheckboxDropdown />
      </Example>
    </>
  )
}
