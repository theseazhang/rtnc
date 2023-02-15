import clsx from 'clsx'
import {
  useEffect,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  useState,
  useRef,
} from 'react'

const pl = 'pl-4 sm:pl-6'
const pr = 'pr-4 sm:pr-6'

export function BasicTable({
  mainColumn = columns[0],
  items,
  columns,
  stripe,
  verticalLines,
  condensed,
}) {
  const default_pl = condensed ? 'pl-2' : 'pl-3'
  const default_pr = condensed ? 'pr-2' : 'pr-3'
  if (!items) items = []
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow ring-1 ring-black ring-opacity-5">
      <table className="w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr className={verticalLines && 'divide-x divide-gray-200'}>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className={clsx(
                  'whitespace-nowrap py-3.5 text-left text-sm font-semibold capitalize text-gray-900',
                  index === 0 ? pl : default_pl,
                  index === columns.length - 1 ? pr : default_pr
                )}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {items.map((item, index) => (
            <tr
              key={index}
              className={clsx(
                verticalLines === true && 'divide-x divide-gray-200',
                stripe === true && (index % 2 === 0 ? undefined : 'bg-gray-50')
              )}
            >
              {columns.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className={clsx(
                    'whitespace-nowrap text-sm font-medium',
                    columnIndex === 0 ? pl : default_pl,
                    columnIndex === columns.length - 1 ? pr : default_pr,
                    column === mainColumn ? 'text-gray-900' : 'text-gray-500',
                    condensed ? 'py-2' : 'py-4'
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

export const CheckboxTable = forwardRef(
  (
    {
      mainColumn = columns[0],
      items,
      columns,
      stripe,
      verticalLines,
      condensed,
    },
    childRef
  ) => {
    const default_pl = condensed ? 'pl-2' : 'pl-3'
    const default_pr = condensed ? 'pr-2' : 'pr-3'
    const checkboxStyle =
      'absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6'

    if (!items) items = []

    const checkInput = useRef()
    const [selectedRow, setSelectedRow] = useState([])

    useImperativeHandle(childRef, () => selectedRow)

    useEffect(() => {
      setSelectedRow([])
    }, [items])

    useLayoutEffect(() => {
      checkInput.current.indeterminate =
        selectedRow.length > 0 && selectedRow.length < items.length
    }, [selectedRow])

    function selectHandler(e, item) {
      if (e.target.checked) {
        setSelectedRow([...selectedRow, item])
      } else {
        setSelectedRow(selectedRow.filter((x) => x !== item))
      }
    }

    function selectAll() {
      setSelectedRow(selectedRow.length > 0 ? [] : items)
      checkInput.current.indeterminate = false
    }

    return (
      <div className="relative w-full overflow-x-auto rounded-lg shadow ring-1 ring-black ring-opacity-5">
        <table className="w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr className={verticalLines && 'divide-x divide-gray-200'}>
              <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                <input
                  type="checkbox"
                  className={checkboxStyle}
                  ref={checkInput}
                  checked={
                    selectedRow.length > 0 &&
                    selectedRow.length === items.length
                  }
                  onChange={selectAll}
                />
              </th>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className={clsx(
                    'whitespace-nowrap py-3.5 text-left text-sm font-semibold capitalize text-gray-900',
                    index === 0 ? pl : default_pl,
                    index === columns.length - 1 ? pr : default_pr
                  )}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {items.map((item, index) => (
              <tr
                key={index}
                className={clsx(
                  verticalLines === true && 'divide-x divide-gray-200',
                  stripe === true &&
                    (index % 2 === 0 ? undefined : 'bg-gray-50'),
                  selectedRow.includes(item) && 'bg-gray-50'
                )}
              >
                <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                  {selectedRow.includes(item) && (
                    <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                  )}
                  <input
                    type="checkbox"
                    className={checkboxStyle}
                    value={item.key}
                    checked={selectedRow.includes(item)}
                    onChange={(e) => selectHandler(e, item)}
                  />
                </td>
                {columns.map((column, columnIndex) => (
                  <td
                    key={columnIndex}
                    className={clsx(
                      'whitespace-nowrap text-sm font-medium',
                      columnIndex === 0 ? pl : default_pl,
                      columnIndex === columns.length - 1 ? pr : default_pr,
                      column === mainColumn
                        ? selectedRow.includes(item)
                          ? 'text-indigo-600'
                          : 'text-gray-900'
                        : 'text-gray-500',
                      condensed ? 'py-2' : 'py-4'
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
                  colSpan={columns.length + 1}
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
)
