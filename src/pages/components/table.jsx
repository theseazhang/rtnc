import { Example } from '@/components/layout/example'
import { BackHome } from '@/components/ui/Nav'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import Head from 'next/head'
import { useState, useRef } from 'react'
import { BasicTable, CheckboxTable } from '@/components/ui/Table'

function actionRender(name) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <Link
        href={`/edit/${name}`}
        className="text-indigo-600 hover:text-indigo-900"
      >
        Edit<span className="sr-only">{name}</span>
      </Link>
      <button className="text-indigo-600 hover:text-indigo-900">
        Delete<span className="sr-only">{name}</span>
      </button>
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
    {
      name: 'Tom Cook',
      title: 'Director of Product',
      email: 'tom.cook@example.com',
      role: 'Member',
      action: actionRender('Tom Cook'),
    },
    {
      name: 'Whitney Francis',
      title: 'Copywriter',
      email: 'whitney.francis@example.com',
      role: 'Admin',
      action: actionRender('Whitney Francis'),
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
      description: 'Table data. Array element can be string or react component',
      type: 'array',
      example: '[{name: "Lindsay", title: "Developer"}]',
      default: '[]',
      required: 'false',
    },
    {
      name: 'stripe',
      description: 'With striped rows',
      type: 'boolean',
      example: 'true',
      default: 'false',
      required: 'false',
    },
    {
      name: 'verticalLines',
      description: 'With vertical lines',
      type: 'boolean',
      example: 'true',
      default: 'false',
      required: 'false',
    },
    {
      name: 'condensed',
      description: 'With condensed content',
      type: 'boolean',
      example: 'true',
      default: 'false',
      required: 'false',
    },
  ],
}

function CheckBoxContainer({ mainColumn = columns[0], items, columns }) {
  const childRef = useRef()
  const [tableItems, setTableItems] = useState([...items])

  function bulkDelete() {
    setTableItems(
      tableItems.filter((x) => childRef.current.every((y) => y !== x))
    )
  }

  function resetData() {
    setTableItems([...items])
  }

  return (
    <div className="w-full">
      <div className="mb-4 space-x-3 text-right">
        <Button variant="white" onClick={bulkDelete}>
          Bulk Delete
        </Button>
        <Button variant="white" onClick={resetData}>
          Reset
        </Button>
      </div>
      <CheckboxTable
        ref={childRef}
        items={tableItems}
        columns={columns}
        mainColumn={mainColumn}
      />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Table</title>
      </Head>
      <BackHome />
      <Example title="Basic Table (with striped rows and vertical lines)">
        <BasicTable
          items={tableData.items}
          columns={tableData.columns}
          mainColumn={tableData.mainColumn}
          stripe={true}
          verticalLines={true}
        />
      </Example>
      <Example title="With Condensed Content">
        <BasicTable
          items={tableData.items}
          columns={tableData.columns}
          mainColumn={tableData.mainColumn}
          condensed={true}
        />
      </Example>
      <Example title="CheckboxTable">
        <CheckBoxContainer
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
