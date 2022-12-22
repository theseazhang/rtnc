import Head from 'next/head'
import { Example } from '@/components/layout/example'
import Link from 'next/link'
import { A } from '@/components/ui/A'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="This is a HomePage." />
      </Head>
      <main>
        <A href="https://github.com/theseazhang/rtnc">
          <h1 className="m-10 text-center text-2xl font-semibold italic text-indigo-600 underline">
            Components and Templates with Next.js and Tailwind CSS.
          </h1>
        </A>
        <Example title="Components">
          <Link
            href={'/components/button'}
            className="underline hover:text-indigo-600"
          >
            button
          </Link>
        </Example>
        <Example title="Templates"></Example>
      </main>
    </>
  )
}
