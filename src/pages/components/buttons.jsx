import { Example } from '@/components/layout/example'
import { Button } from '@/components/ui/Button'
import { Tags } from '@/components/ui/Tag'
import { BackHome } from '@/components/ui/Nav'
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

const tagsData = [
  { tagName: 'books', tagNum: 8, href: '#' },
  { tagName: 'development', tagNum: 42, href: '#' },
  { tagName: 'work', tagNum: 8, href: '#' },
  { tagName: 'React', tagNum: 8, href: '#' },
  { tagName: 'Next.js', tagNum: 8, href: '#' },
  { tagName: 'Tailwind CSS', tagNum: 8, href: '#' },
  { tagName: 'front-end', tagNum: 8, href: '#' },
  { tagName: 'back-end', tagNum: 8, href: '#' },
  { tagName: 'resume', tagNum: 8, href: '#' },
  { tagName: 'books', tagNum: 8, href: '#' },
  { tagName: 'development', tagNum: 42, href: '#' },
  { tagName: 'work', tagNum: 8, href: '#' },
  { tagName: 'React', tagNum: 8, href: '#' },
  { tagName: 'Next.js', tagNum: 8, href: '#' },
  { tagName: 'Tailwind CSS', tagNum: 8, href: '#' },
  { tagName: 'front-end', tagNum: 8, href: '#' },
  { tagName: 'back-end', tagNum: 8, href: '#' },
  { tagName: 'resume', tagNum: 8, href: '#' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Buttons</title>
      </Head>
      <BackHome />
      <Example title="Buttons">
        <Button>primary/sm</Button>
        <Button size="base">base size</Button>
        <Button size="lg">
          lg size
          <EnvelopeIcon className="ml-2 -mr-0.5 h-5 w-5" aria-hidden="true" />
        </Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="white">white</Button>
        <Button>
          <EnvelopeIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
          heroicons
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

      <Example title="Tags">
        <Tags items={tagsData} />
        <Tags items={tagsData.slice(0, 4)} />
      </Example>
    </>
  )
}
