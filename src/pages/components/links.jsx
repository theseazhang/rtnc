import { Example } from '@/components/layout/example'
import { BackHome } from '@/components/ui/Nav'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Links</title>
      </Head>
      <BackHome />
      <Example title="Colorful Link">
        <p className="text-xl">
          This is an example for{' '}
          <Link href="#" className="colorful-link">
            colorful link
          </Link>
          .
        </p>
      </Example>
    </>
  )
}
