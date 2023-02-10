import { Example } from '@/components/layout/example'
import { BackHome } from '@/components/ui/Nav'
import Link from 'next/link'
import Head from 'next/head'
import BasicTable from '@/components/ui/Table'

function actionRender(name) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <Link
        href={`/edit/${name}`}
        className="text-blue-500 hover:text-blue-600"
      >
        Edit<span className="sr-only">{name}</span>
      </Link>
      <Link
        href={`/delete/${name}`}
        className="text-blue-500 hover:text-blue-600"
      >
        Delete<span className="sr-only">{name}</span>
      </Link>
    </div>
  )
}

const tableData = {
  columns: ['name', 'title', 'email', 'role', 'action'],
  mainColumn: 'name',
  items: [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
      action: actionRender('Lindsay Walton'),
    },
    {
      name: 'Courtney Henry',
      title: 'Designer',
      email: 'courtney.henry@example.com',
      role: 'Admin',
      action: actionRender('Courtney Henry'),
    },
  ],
}

const apiData = {
  columns: ['name', 'description', 'type', 'example', 'default', 'required'],
  mainColumn: 'name',
  items: [
    {
      name: 'columns',
      description: '表头列名数组',
      type: 'array',
      example: '["name", "title"]',
      default: '',
      required: 'true',
    },
    {
      name: 'mainColumn',
      description: '主要列，强调显示',
      type: 'string',
      example: 'name',
      default: 'columns[0]',
      required: 'false',
    },
    {
      name: 'items',
      description:
        '表格数据数组，每个元素是一个键值对，键名对应columns，值可以是字符串或者React组件',
      type: 'array',
      example: '[{name: "Lindsay", title: "Developer"}]',
      default: '[]',
      required: 'false',
    },
  ],
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Table</title>
      </Head>
      <BackHome />
      <Example title="Basic Table">
        <BasicTable
          items={tableData.items}
          columns={tableData.columns}
          mainColumn={tableData.mainColumn}
        />
      </Example>
      <Example title="Table Attributes">
        <BasicTable
          items={apiData.items}
          columns={apiData.columns}
          mainColumn={apiData.mainColumn}
        />
      </Example>
    </>
  )
}
