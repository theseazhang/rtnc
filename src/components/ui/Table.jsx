import clsx from 'clsx'

export default function Example({ mainColumn = columns[0], items, columns }) {
  const pl = 'pl-4 sm:pl-6'
  const pr = 'pr-4 sm:pr-6'
  if (!items) items = []
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow ring-1 ring-black ring-opacity-5">
      <table className="w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className={clsx(
                  'py-3.5 text-left text-sm font-semibold capitalize text-gray-900',
                  index === 0 ? pl : 'pl-3',
                  index === columns.length - 1 ? pr : 'pr-3'
                )}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {items.map((item, index) => (
            <tr key={index}>
              {columns.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className={clsx(
                    'whitespace-normal py-4 text-sm font-medium',
                    columnIndex === 0 ? pl : 'pl-3',
                    columnIndex === columns.length - 1 ? pr : 'pr-3',
                    column === mainColumn ? 'text-gray-900' : 'text-gray-500'
                  )}
                >
                  {item[column]}
                </td>
              ))}
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td
                className="whitespace-nowrap p-4 text-center text-sm font-medium text-gray-500"
                colSpan={columns.length}
              >
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
