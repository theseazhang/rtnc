import Head from 'next/head'
import { Example } from '@/components/layout/example'
import { BackHome } from '@/components/ui/Nav'
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
        <BackHome href="http://seazhang.com/" text="Dylan Zhang" />
        <h2 className="m-5 text-center text-2xl font-semibold italic text-slate-700">
          RTNC is a collection of free react components that can be used in your
          next.js project.
        </h2>
        <h2 className="m-5 text-center text-2xl font-semibold italic text-slate-700">
          You can clone the repository from{' '}
          <a
            href="https://github.com/theseazhang/rtnc"
            className="text-blue-500 hover:text-blue-600"
          >
            github
          </a>
          .
        </h2>
        <A href="https://github.com/theseazhang/rtnc"></A>
        <Example title="Components">
          <Link
            href={'/components/buttons'}
            className="text-blue-500 hover:text-blue-600"
          >
            Buttons
          </Link>
          <Link
            href={'/components/modals'}
            className="text-blue-500 hover:text-blue-600"
          >
            Modals
          </Link>
          <Link
            href={'/components/links'}
            className="text-blue-500 hover:text-blue-600"
          >
            Links
          </Link>
          <Link
            href={'/components/table'}
            className="text-blue-500 hover:text-blue-600"
          >
            Table
          </Link>
        </Example>
        <Example title="Templates"></Example>
      </main>
    </>
  )
}
